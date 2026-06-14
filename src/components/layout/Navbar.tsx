import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const BASE = '/Topoconcret'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center">
            <img
              src={`${BASE}/logo-dark.svg`}
              alt="Topoconcret"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? 'text-ink hover:text-teal'
                    : 'text-white/90 hover:text-teal-light drop-shadow'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary text-sm">
              Cotizar
            </a>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-ink hover:text-teal font-medium uppercase tracking-wide text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a href="#contacto" className="btn-primary block text-center text-sm">
                Cotizar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
