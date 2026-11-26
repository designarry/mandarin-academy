import axios from 'axios'

const { VITE_BACKENDLESS_BASE_URL, VITE_BACKENDLESS_APP_ID, VITE_BACKENDLESS_REST_API_KEY } = import.meta.env

/* Backendless REST: {base}/{appId}/{restKey}/... */
export const backendless = axios.create({
  baseURL: `${VITE_BACKENDLESS_BASE_URL}/${VITE_BACKENDLESS_APP_ID}/${VITE_BACKENDLESS_REST_API_KEY}`,
  timeout: 10000,
})

/** Number of records in a data table, optionally filtered by a Backendless where clause */
export async function countRecords(table: string, where?: string): Promise<number> {
  const { data } = await backendless.get<number>(`/data/${table}/count`, { params: where ? { where } : undefined })
  return data
}

/** Whole-number percentage of records in a table that match a where clause (0 for an empty table) */
export async function percentRecords(table: string, where: string): Promise<number> {
  const [matching, total] = await Promise.all([countRecords(table, where), countRecords(table)])
  return total === 0 ? 0 : Math.round((matching / total) * 100)
}

/** Records of a data table (Backendless returns at most 100 per request) */
export async function listRecords<T>(table: string, params: Record<string, string | number> = {}): Promise<T[]> {
  const { data } = await backendless.get<T[]>(`/data/${table}`, { params: { pageSize: 100, ...params } })
  return data
}

type TeacherRecord = {
  objectId: string
  'full name': string | null
  university: string | null
  'year graduated': number | null
}

export type Teacher = { id: string; name: string; university: string; yearGraduated: number | null }

/** Teachers in the order they were added */
export async function fetchTeachers(table: string): Promise<Teacher[]> {
  const rows = await listRecords<TeacherRecord>(table, { sortBy: 'created asc' })
  return rows.map((row) => ({
    id: row.objectId,
    name: row['full name'] ?? '',
    university: row.university ?? '',
    yearGraduated: row['year graduated'] ? new Date(row['year graduated']).getFullYear() : null,
  }))
}

type TestimonyRecord = {
  objectId: string
  'full name': string | null
  'program name': string | null
  testimony: string | null
}

export type Testimonial = { id: string; name: string; program: string; quote: string }

/** Students who wrote a testimony, oldest first. Only these three columns are requested. */
export async function fetchTestimonials(table: string): Promise<Testimonial[]> {
  const rows = await listRecords<TestimonyRecord>(table, {
    where: "testimony IS NOT NULL AND testimony != ''",
    props: '`full name`,`program name`,testimony,objectId',
    sortBy: 'created asc',
  })
  return rows
    .map((row) => ({
      id: row.objectId,
      name: row['full name']?.trim() ?? '',
      program: row['program name']?.trim() ?? '',
      quote: row.testimony?.trim() ?? '',
    }))
    .filter((item) => item.quote)
}
