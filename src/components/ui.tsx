import type { ReactNode } from 'react'
import { waLink, type ImageRef } from '../content'

/* Material Symbol icon */
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`icon ${className}`}>
      {name}
    </span>
  )
}

/* Real image when `src` is set, otherwise a labelled placeholder of the same shape */
export function ImageSlot({
  image,
  className = '',
  fit = 'cover',
  eager = false,
}: {
  image: ImageRef
  className?: string
  /** "contain" for illustrations that must not be cropped */
  fit?: 'cover' | 'contain'
  /** Load immediately (above-the-fold images) instead of lazily */
  eager?: boolean
}) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        className={`${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-base-content/20 bg-base-300 p-4 text-center text-base-content/50 ${className}`}
    >
      <Icon name="image" className="icon-32" />
      <span className="text-label-sm">{image.alt}</span>
    </div>
  )
}

/* Page section with a centred content column */
export function Section({
  id,
  children,
  muted = false,
  className = '',
}: {
  id?: string
  children: ReactNode
  muted?: boolean
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${muted ? 'bg-base-200' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  )
}

export function SectionHeader({
  title,
  description,
  align = 'center',
}: {
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <header className={`mb-10 flex flex-col gap-3 md:mb-12 ${align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : ''}`}>
      <h2 className="text-heading-h1-semibold">{title}</h2>
      {description && <p className="text-body-lg text-base-content/70">{description}</p>}
    </header>
  )
}

/* Opens WhatsApp in a new tab */
export function WaButton({
  children,
  message,
  className = 'btn-primary',
}: {
  children: ReactNode
  message?: string
  className?: string
}) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`btn ${className}`}>
      {children}
    </a>
  )
}
