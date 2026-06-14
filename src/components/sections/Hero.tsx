import { ArrowDown, Phone } from 'lucide-react'
import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}/header02.gif`}
          alt="Topoconcret detecciones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-teal text-sm font-medium uppercase tracking-wide">
              Detecciones · Reparaciones · Panamá
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {COMPANY.tagline}
          </h1>

          <p className="text-xl sm:text-2xl text-teal font-semibold mb-3">
            Detecciones y reparaciones de problemas en inmuebles
          </p>
          <p className="text-white/70 text-base mb-4">
            (filtraciones · humedades · vicios ocultos)
          </p>

          <p className="text-white/80 text-lg max-w-xl mb-10 leading-relaxed">
            Encuentre las causas de sus problemas{' '}
            <span className="text-white font-semibold">rápidamente</span>, al{' '}
            <span className="text-white font-semibold">menor costo</span> y{' '}
            <span className="text-teal font-semibold">sin destrucción.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="btn-primary text-base px-8 py-4">
              Solicitar Cotización
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 border-2 border-white/40 hover:border-teal
                         text-white hover:text-teal px-8 py-4 rounded-lg font-semibold
                         transition-all duration-200"
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-teal transition-colors animate-bounce"
        aria-label="Ver servicios"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  )
}
