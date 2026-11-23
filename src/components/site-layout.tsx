import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, footer, nav, onlineClasses, waLink } from '../content'
import { Icon, WaButton } from './ui'

/* On navigation: jump to the #hash target if there is one, otherwise to the top */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}

/* Light/dark toggle: sets daisyUI's data-theme and the project's .dark class together */
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.setAttribute('data-theme', dark ? 'mandarin-dark' : 'mandarin')
  }, [dark])

  const toggle = () => {
    const next = !dark
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
    setDark(next)
  }

  return (
    <label className="btn btn-ghost btn-circle swap swap-rotate" aria-label="Ganti tema terang/gelap">
      <input type="checkbox" checked={dark} onChange={toggle} />
      <Icon name="dark_mode" className="swap-off" />
      <Icon name="light_mode" className="swap-on" />
    </label>
  )
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label={`${brand.name} — Home`}>
      <span className="grid size-10 place-items-center rounded-box bg-primary text-xl font-bold text-primary-content">
        中
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-heading-h4-bold">{brand.shortName}</span>
        <span className="text-label-sm text-base-content/60">Semarang</span>
      </span>
    </Link>
  )
}

const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'menu-active' : '')

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <nav className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start gap-1">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <button type="button" tabIndex={0} className="btn btn-ghost btn-square" aria-label="Buka menu">
              <Icon name="menu" />
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-56 rounded-box bg-base-100 p-2 shadow-lg">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <ThemeToggle />
          <WaButton className="btn-primary max-sm:hidden">Hubungi Kami</WaButton>
        </div>
      </nav>
    </header>
  )
}

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer mx-auto max-w-6xl px-4 py-14 sm:footer-horizontal">
        <aside className="max-w-xs gap-4">
          <span className="text-heading-h3-semibold">{brand.name}</span>
          <p className="text-body-sm opacity-80">{footer.blurb}</p>
        </aside>
        <nav>
          <h6 className="footer-title">Navigasi</h6>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="link link-hover">
              {item.label}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Kelas Online</h6>
          {onlineClasses.items.map((item) => (
            <Link key={item.id} to={`/program#${item.id}`} className="link link-hover">
              {item.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Hubungi Kami</h6>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
            <Icon name="chat" className="icon-20" /> WhatsApp
          </a>
          <span className="flex items-center gap-2">
            <Icon name="mail" className="icon-20" /> {brand.email}
          </span>
          <a href={brand.instagram.url} target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
            <Icon name="photo_camera" className="icon-20" /> {brand.instagram.handle}
          </a>
        </nav>
      </div>
      <div className="border-t border-neutral-content/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-body-sm opacity-70">
          © {YEAR} {brand.name}. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}

function SiteLayout({ children }: { children: ReactNode }) {
  useScrollOnNavigate()
  return (
    <div className="flex min-h-svh flex-col bg-base-100 text-base-content">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
