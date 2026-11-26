import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  countRecords,
  fetchTeachers,
  fetchTestimonials,
  percentRecords,
  type Teacher,
  type Testimonial,
} from '../lib/backendless'
import {
  about,
  brand,
  cta,
  hero,
  location,
  onlineClasses,
  onlinePackages,
  programs,
  reasons,
  schedules,
  stats,
  teachers,
  tentangHero,
  testimonials,
  waLink,
  whyUs,
} from '../content'
import type { LiveStat } from '../content'
import { Icon, ImageSlot, Section, SectionHeader, WaButton } from './ui'

/* ---------- Heroes ---------- */

export function HomeHero() {
  return (
    <section className="bg-base-200">
      <div className="hero mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="hero-content w-full min-w-0 max-w-none flex-col gap-10 p-0 md:flex-row-reverse lg:gap-16">
          <ImageSlot image={hero.image} fit="contain" eager className="aspect-square w-full max-md:hidden [@media(orientation:landscape)_and_(max-height:500px)]:hidden max-w-md md:w-5/12" />
          <div className="flex flex-col items-start gap-6 md:flex-1">
            <span className="badge badge-primary badge-soft h-auto py-1 px-2.5 whitespace-normal">{hero.eyebrow}</span>
            <h1 className="text-display-md text-balance">{hero.title}</h1>
            <p className="text-body-xl text-base-content/70">{hero.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/program#program" className="btn btn-primary btn-lg">
                Lihat Program Kami
              </Link>
              <WaButton className="btn-outline btn-lg">Hubungi Kami</WaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Stat value loaded from Backendless; falls back to the static value if the request fails */
function LiveValue({ live, fallback }: { live: LiveStat; fallback: string }) {
  const [value, setValue] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)
  const { kind, table } = live
  const where = live.kind === 'percent' ? live.where : undefined

  useEffect(() => {
    let active = true
    const request = kind === 'percent' && where ? percentRecords(table, where) : countRecords(table)
    request.then((n) => active && setValue(n)).catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [kind, table, where])

  if (failed) return fallback
  if (value === null) return <span className="loading loading-dots loading-md" aria-label="Memuat" />
  return kind === 'percent' ? `${value}%` : value.toLocaleString('id-ID')
}

export function Statistics() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-4">
      <div className="stats stats-vertical w-full bg-base-100 shadow-xl md:stats-horizontal">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-figure text-primary">
              <Icon name={stat.icon} className="icon-32" />
            </div>
            <div className="stat-value text-primary">
              {stat.live ? <LiveValue live={stat.live} fallback={stat.value} /> : stat.value}
            </div>
            <div className="stat-desc text-body-md">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TentangHero() {
  return (
    <section className="bg-base-200">
      <div className="hero mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="hero-content w-full min-w-0 max-w-none flex-col gap-10 p-0 md:flex-row-reverse lg:gap-16">
          <ImageSlot image={tentangHero.image} fit="contain" eager className="aspect-square w-full max-md:hidden [@media(orientation:landscape)_and_(max-height:500px)]:hidden max-w-md md:w-5/12" />
          <div className="flex flex-col items-start gap-6 md:flex-1">
            <span className="badge badge-primary badge-soft px-2.5 py-1">Tentang</span>
            <h1 className="text-display-md text-balance">{tentangHero.title}</h1>
            <p className="text-body-xl text-base-content/70">{tentangHero.description}</p>
            <Link to="/tentang#tentang" className="btn btn-primary btn-lg">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- About & reasons ---------- */

export function AboutSection({ withButton = true }: { withButton?: boolean }) {
  return (
    <Section id="tentang">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <ImageSlot image={about.image} fit="contain" className="mx-auto aspect-square w-full max-w-md" />
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-heading-h1-semibold">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-base-content/80">
              {paragraph}
            </p>
          ))}
          {withButton && <WaButton>Hubungi Kami</WaButton>}
        </div>
      </div>
    </Section>
  )
}

export function WhyUsSection() {
  return (
    <Section muted>
      <SectionHeader title={whyUs.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {whyUs.items.map((item) => (
          <div key={item.title} className="card bg-base-100 shadow-sm">
            <div className="card-body gap-4">
              <span className="grid size-14 place-items-center rounded-box bg-primary/10 text-primary">
                <Icon name={item.icon} className="icon-32" />
              </span>
              <h3 className="card-title text-heading-h3-semibold">{item.title}</h3>
              <p className="text-body-md text-base-content/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function ReasonsSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 md:order-2">
          <h2 className="text-heading-h1-semibold">{reasons.title}</h2>
          <ul className="list rounded-box bg-base-200">
            {reasons.items.map((item) => (
              <li key={item.text} className="list-row items-center">
                <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-content">
                  <Icon name={item.icon} className="icon-20" />
                </span>
                <p className="list-col-grow text-body-md">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <ImageSlot image={reasons.image} fit="contain" className="mx-auto aspect-square w-full max-md:hidden [@media(orientation:landscape)_and_(max-height:500px)]:hidden max-w-md md:order-1" />
      </div>
    </Section>
  )
}

/* ---------- Programs & online classes ---------- */

export function ProgramsSection({ muted = true }: { muted?: boolean }) {
  return (
    <Section id="program" muted={muted}>
      <SectionHeader title={programs.title} description={programs.description} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.items.map((program) => (
          <div key={program.title} className="card bg-base-100 shadow-sm">
            <figure>
              <ImageSlot image={program.image} className="aspect-3/2 w-full border-0" />
            </figure>
            <div className="card-body">
              <span className="badge badge-soft badge-primary px-2.5 py-1">{program.badge}</span>
              <h3 className="card-title text-heading-h3-semibold">{program.title}</h3>
              <p className="text-body-md text-base-content/70">{program.description}</p>
              <div className="card-actions mt-2">
                <WaButton
                  className="btn-primary btn-outline btn-block"
                  message={`Halo ${brand.name}, saya ingin tahu detail program ${program.title}.`}
                >
                  Detail Program
                </WaButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function OnlinePackagesSection() {
  return (
    <Section>
      <SectionHeader title={onlinePackages.title} description={onlinePackages.description} />
      <div className="grid gap-6 md:grid-cols-2">
        {onlinePackages.items.map((item, i) => (
          <a
            key={item.title}
            href={waLink(`Halo ${brand.name}, saya tertarik dengan paket online ${item.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`card aspect-2/1 overflow-hidden transition-transform hover:-translate-y-1 ${
              i % 2 === 0 ? 'bg-primary text-primary-content' : 'bg-neutral text-neutral-content'
            }`}
          >
            <div className="card-body justify-between">
              <Icon name={item.icon} className="icon-32 opacity-90" />
              <div className="flex flex-col gap-2">
                <h3 className="text-heading-h1-semibold">{item.title}</h3>
                <p className="text-body-md opacity-85">{item.description}</p>
              </div>
              <span className="flex items-center gap-1 text-label-md">
                Tanya via WhatsApp <Icon name="arrow_forward" className="icon-20" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

export function OnlineClassesSection({ muted = false }: { muted?: boolean }) {
  return (
    <Section id="kelas-online" muted={muted}>
      <SectionHeader title={onlineClasses.title} description={onlineClasses.description} />
      <div className="grid gap-6 md:grid-cols-2 [@media(orientation:landscape)_and_(max-height:500px)]:grid-cols-2 lg:grid-cols-3">
        {onlineClasses.items.map((item) => (
          <div key={item.id} id={item.id} className="card scroll-mt-24 bg-base-100 shadow-sm">
            <figure>
              <ImageSlot image={item.image} className="aspect-3/2 w-full border-0" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-heading-h2-semibold">{item.title}</h3>
              <ul className="my-2 flex flex-1 flex-col gap-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-body-md">
                    <Icon name="check_circle" className="icon-20 icon-filled shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-actions">
                <WaButton
                  className="btn-primary btn-block"
                  message={`Halo ${brand.name}, saya ingin bergabung di kelas ${item.title}.`}
                >
                  Gabung Sekarang
                </WaButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function SchedulesSection() {
  return (
    <Section>
      <SectionHeader title={schedules.title} description={schedules.description} />
      <div className="grid gap-6 md:grid-cols-2">
        {schedules.items.map((item) => (
          <div key={item.title} className="card bg-base-200">
            <figure>
              <ImageSlot image={item.image} className="aspect-3/2 w-full border-0" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-heading-h3-semibold">{item.title}</h3>
              <p className="text-body-md text-base-content/70">{item.description}</p>
              <div className="card-actions mt-2">
                <WaButton className="btn-link px-0" message={`Halo ${brand.name}, saya ingin melihat ${item.title}.`}>
                  Lihat Jadwal
                </WaButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- People ---------- */

function TeacherCard({ teacher, photo }: { teacher: Teacher; photo?: string }) {
  const details = [teacher.university, teacher.yearGraduated && `Lulus ${teacher.yearGraduated}`].filter(Boolean).join(' · ')
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <ImageSlot image={{ alt: `Foto ${teacher.name} Laoshi`, src: photo }} className="aspect-square w-full border-0" />
      </figure>
      <div className="card-body items-center gap-1 p-4 text-center">
        <h3 className="text-heading-h4-bold">{teacher.name} Laoshi</h3>
        {details && <p className="text-body-sm text-base-content/60">{details}</p>}
      </div>
    </div>
  )
}

function TeacherCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-sm" aria-hidden="true">
      <div className="skeleton aspect-square w-full rounded-b-none" />
      <div className="card-body items-center gap-2 p-4">
        <div className="skeleton h-5 w-24" />
        <div className="skeleton h-4 w-32" />
      </div>
    </div>
  )
}

export function TeachersSection() {
  const [list, setList] = useState<Teacher[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    fetchTeachers(teachers.table)
      .then((rows) => active && setList(rows))
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [])

  return (
    <Section muted>
      <SectionHeader title={teachers.title} description={teachers.description} />
      {failed ? (
        <p className="text-center text-body-md text-base-content/60">Data guru belum dapat dimuat. Silakan coba lagi nanti.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6" aria-busy={list === null}>
          {list === null
            ? teachers.photos.map((photo) => <TeacherCardSkeleton key={photo} />)
            : list.map((teacher, i) => <TeacherCard key={teacher.id} teacher={teacher} photo={teachers.photos[i]} />)}
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <WaButton>Hubungi Kami</WaButton>
      </div>
    </Section>
  )
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="card border border-base-300 bg-base-100">
      <div className="card-body gap-4">
        <Icon name="format_quote" className="icon-32 text-primary/40" />
        <blockquote className="flex-1 text-body-lg">{item.quote}</blockquote>
        <figcaption className="flex items-center gap-3">
          <div className="avatar avatar-placeholder">
            <div className="w-11 rounded-full bg-primary/10 text-primary">
              <Icon name="person" />
            </div>
          </div>
          <div>
            <p className="text-body-md-semibold">{item.name || 'Siswa'}</p>
            {item.program && <p className="text-body-sm text-base-content/60">{item.program}</p>}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

function TestimonialCardSkeleton() {
  return (
    <div className="card border border-base-300 bg-base-100" aria-hidden="true">
      <div className="card-body gap-4">
        <div className="skeleton h-8 w-8" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
        <div className="flex items-center gap-3">
          <div className="skeleton size-11 shrink-0 rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* Hidden entirely when there are no testimonials or the request fails */
export function TestimonialsSection() {
  const [items, setItems] = useState<Testimonial[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    fetchTestimonials(testimonials.table)
      .then((rows) => active && setItems(rows))
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [])

  if (failed || items?.length === 0) return null

  return (
    <Section>
      <SectionHeader title={testimonials.title} />
      <div className="grid gap-6 md:grid-cols-3" aria-busy={items === null}>
        {items === null
          ? [1, 2, 3].map((n) => <TestimonialCardSkeleton key={n} />)
          : items.map((item) => <TestimonialCard key={item.id} item={item} />)}
      </div>
    </Section>
  )
}

/* ---------- Location & CTA ---------- */

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`
  return (
    <Section muted>
      <SectionHeader title={location.title} />
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="card bg-base-100 shadow-sm lg:col-span-2">
          <div className="card-body gap-5">
            <h3 className="card-title text-heading-h2-semibold">{location.name}</h3>
            <ul className="flex flex-col gap-4 text-body-md">
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="shrink-0 text-primary" />
                {location.address}
              </li>
              <li className="flex items-start gap-3">
                <Icon name="call" className="shrink-0 text-primary" />
                {brand.phone}
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="shrink-0 text-primary" />
                <span className="break-all">{brand.email}</span>
              </li>
            </ul>
            <div className="card-actions mt-auto">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="map" className="icon-20" /> Lihat Lokasi
              </a>
            </div>
          </div>
        </div>
        <iframe
          title={`Peta lokasi ${brand.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapsQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-80 w-full rounded-box border-0 lg:col-span-3"
        />
      </div>
    </Section>
  )
}

export function CtaBanner() {
  return (
    <Section>
      <div className="card overflow-hidden bg-primary text-primary-content md:card-side">
        <div className="card-body justify-center gap-4 p-8 md:p-12">
          <h2 className="text-display-sm text-balance">{cta.title}</h2>
          <p className="text-body-xl opacity-90">{cta.description}</p>
          <div className="card-actions mt-2">
            <WaButton className="btn-lg bg-base-100 text-primary border-base-100 hover:bg-base-200">
              {cta.button}
            </WaButton>
          </div>
        </div>
        <figure className="max-md:portrait:hidden md:w-2/5">
          <ImageSlot image={cta.image} className="aspect-square h-full w-full rounded-none border-0" />
        </figure>
      </div>
    </Section>
  )
}
