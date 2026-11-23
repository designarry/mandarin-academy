import { Link } from 'react-router-dom'
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

export function Statistics() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-4">
      <div className="stats stats-vertical w-full bg-base-100 shadow-xl md:stats-horizontal">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-figure text-primary">
              <Icon name={stat.icon} className="icon-32" />
            </div>
            <div className="stat-value text-primary">{stat.value}</div>
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

export function TeachersSection() {
  return (
    <Section muted>
      <SectionHeader title={teachers.title} description={teachers.description} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {teachers.items.map((teacher, i) => (
          <div key={i} className="card bg-base-100 shadow-sm">
            <figure>
              <ImageSlot image={teacher.image} className="aspect-square w-full border-0" />
            </figure>
            <div className="card-body items-center gap-1 p-4 text-center">
              <h3 className="text-heading-h4-bold">{teacher.name}</h3>
              <p className="text-body-sm text-base-content/60">{teacher.university}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <WaButton>Hubungi Kami</WaButton>
      </div>
    </Section>
  )
}

function StarRating() {
  return (
    <div className="rating rating-sm" aria-label="Rating 5 dari 5">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="mask mask-star-2 bg-accent" aria-current={n === 5 ? 'true' : undefined} />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader title={testimonials.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <figure key={i} className="card border border-base-300 bg-base-100">
            <div className="card-body gap-4">
              <div className="flex items-center justify-between">
                <StarRating />
                <Icon name="format_quote" className="icon-32 text-primary/40" />
              </div>
              <blockquote className="flex-1 text-body-lg">{item.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="w-11 rounded-full bg-primary/10 text-primary">
                    <Icon name="person" />
                  </div>
                </div>
                <div>
                  <p className="text-body-md-semibold">{item.name}</p>
                  <p className="text-body-sm text-base-content/60">{item.role}</p>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
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
