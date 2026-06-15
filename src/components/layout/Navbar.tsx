import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { LinkButton } from '../ui/Button'

const BASE = '/Topoconcret'

const SERVICES_DROPDOWN = [
  { label: 'Análisis térmico', href: '#analisisTermico' },
  { label: 'Inspección con ultrasonido', href: '#ultrasonido' },
  { label: 'Inspección Laparoscopia', href: '#laparoscopia' },
  { label: 'Scanner de Estructuras', href: '#scannerEstructuras' },
  { label: 'Plomería en General', href: '#plomeria' },
  { label: 'Destapes con trompos', href: '#trompos' },
  { label: 'Impermeabilización', href: '#impermeabilizacion' },
  { label: 'Inspecciones con drones', href: '#drones' },
  { label: 'Servicios de pintura', href: '#pintura' },
]

const NAV_LINKS = [
  { label: 'Porque contratarnos', href: '#contratar' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Dónde encontrarnos', href: '#mapa' },
  { label: 'Contáctanos', href: '#contacto' },
]

const linkClass = 'text-dark/80 hover:text-brand-red transition-colors duration-200'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/75 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="section-container">
        {/* Bar — shrinks from h-20 → h-14 on scroll */}
        <div
          className="flex items-center justify-between transition-all duration-300 overflow-hidden"
          style={{ height: scrolled ? '56px' : '76px' }}
        >
          {/* Logo + flag */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src={`${BASE}/images/logo-dark.svg`}
              alt="Topoconcret"
              className="w-auto transition-all duration-300"
              style={{ height: scrolled ? '36px' : '44px' }}
            />
            <img
              src={`${BASE}/images/panama.svg`}
              alt="Panamá"
              className="h-5 w-auto opacity-80"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide ${linkClass}`}
              >
                Nuestros servicios
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-2 z-50 rounded-b-lg">
                  {SERVICES_DROPDOWN.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdown(false)}
                      className="block px-4 py-2.5 text-sm text-dark/80 hover:text-brand-red hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide ${linkClass}`}
              >
                {link.label}
              </a>
            ))}

            <LinkButton href="#contacto" variant="primary" size="md">
              Cotizar
            </LinkButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-dark transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-dark/80 font-semibold uppercase tracking-wide text-sm hover:text-brand-red transition-colors"
              onClick={() => setMobileServices(!mobileServices)}
            >
              Nuestros servicios
              <ChevronDown size={14} className={`transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="bg-gray-50 border-t border-b border-gray-100">
                {SERVICES_DROPDOWN.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => { setOpen(false); setMobileServices(false) }}
                    className="block px-8 py-2.5 text-sm text-dark/80 hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-dark/80 hover:text-brand-red font-semibold uppercase tracking-wide text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <LinkButton href="#contacto" variant="primary" size="md" className="w-full justify-center">
                Cotizar
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
