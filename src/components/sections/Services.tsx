import React, { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { SERVICES, type FeatureIcon } from '../../constants/data'

const BASE = '/Topoconcret'

// ─── Unified icon + label card ────────────────────────────────────────────────
function FeatureIconCard({
  src,
  label,
  invert = false,
  className = '',
}: {
  src: string
  label: string
  invert?: boolean
  className?: string
}) {
  return (
    <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
      <img
        src={src}
        alt={label}
        className="w-full h-auto object-contain"
        style={invert ? { filter: 'brightness(0) invert(1)' } : undefined}
        style={{ maxHeight: '64px' }}
      />
      <span className={`text-sm font-medium leading-snug ${invert ? 'text-white' : 'text-dark'}`}>
        {label}
      </span>
    </div>
  )
}

// ─── Shared: full-width icon grid ─────────────────────────────────────────────
function IconGrid({
  icons,
  cols = 3,
  invert = false,
}: {
  icons: { icon: string; label: string }[]
  cols?: 3 | 5
  invert?: boolean
}) {
  const colClass = cols === 5 ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-3'
  return (
    <div className={`grid ${colClass} gap-x-6 gap-y-8`}>
      {icons.map((fi, idx) => (
        <FeatureIconCard
          key={idx}
          src={`${BASE}/${fi.icon}`}
          label={fi.label}
          invert={invert}
          className="w-full"
        />
      ))}
    </div>
  )
}

// ─── Shared hero layout: title left + photo right + red line through image ────
function ServiceHeroSection({
  id,
  title,
  image,
  subtitle,
  featureIcons,
  reverse = false,
  bg = 'bg-white',
  minHeight = '400px',
  children,
}: {
  id: string
  title: string
  image: string
  subtitle?: string
  featureIcons?: FeatureIcon[]
  reverse?: boolean
  bg?: string
  minHeight?: string
  children?: React.ReactNode
}) {
  const imgRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const textCol = (
    <div
      className={`lg:w-[60%] px-8 pb-4 flex flex-col justify-start ${
        reverse ? 'lg:pl-12 lg:pr-8 items-end text-right' : 'lg:pl-8 lg:pr-12 items-start text-left'
      }`}
      style={{ paddingTop: '9rem' }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-dark/70 font-medium">{subtitle}</p>}
      <div className="h-[4px] bg-brand-red mt-6 w-full" />
      {featureIcons && featureIcons.length > 0 && (
        <div
          className="mt-8 grid gap-4"
          style={{ gridTemplateColumns: `repeat(${featureIcons.length}, 1fr)` }}
        >
          {featureIcons.map((fi, idx) => (
            <FeatureIconCard
              key={idx}
              src={`${BASE}/${fi.icon}`}
              label={fi.label}
              className="w-full"
            />
          ))}
        </div>
      )}
    </div>
  )

  const imageCol = (
    <div
      className={`lg:w-[40%] min-h-[220px] lg:min-h-0 flex items-start ${reverse ? 'justify-start' : 'justify-end'}`}
    >
      <div
        ref={imgRef}
        style={{
          width: '420px',
          borderRadius: '7px',
          overflow: 'hidden',
          height: '100%',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <img src={`${BASE}/${image}`} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  )

  return (
    <div id={id} className={`${bg}`} style={{ padding: '4rem 0' }}>
      <div
        className="max-w-6xl mx-auto relative overflow-hidden flex flex-col lg:flex-row"
        style={{ minHeight }}
      >
        {reverse ? imageCol : textCol}
        {reverse ? textCol : imageCol}
      </div>
      {children}
    </div>
  )
}

// ─── Análisis Térmico ─────────────────────────────────────────────────────────
function TermicoSection() {
  const svc = SERVICES.find((s) => s.id === 'termico')!
  return (
    <ServiceHeroSection
      id="analisisTermico"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
    >
      {svc.featureIcons && svc.featureIcons.length > 5 && (
        <div className="py-10 px-8 max-w-3xl mx-auto">
          <IconGrid icons={svc.featureIcons} cols={3} />
        </div>
      )}
    </ServiceHeroSection>
  )
}

// ─── Ultrasonido ──────────────────────────────────────────────────────────────
function UltrasonidoSection() {
  const svc = SERVICES.find((s) => s.id === 'ultrasonido')!
  return (
    <ServiceHeroSection
      id="ultrasonido"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
      minHeight="400px"
    />
  )
}

// ─── Escáner de estructuras ───────────────────────────────────────────────────
function ScannerSection() {
  const svc = SERVICES.find((s) => s.id === 'scanner')!
  return (
    <ServiceHeroSection
      id="scannerEstructuras"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
      bg="bg-gray-50"
      minHeight="380px"
    />
  )
}

// ─── Laparoscopia: bg image, photo left, title + red line + icons right ──────
function LaparoscopiaSection() {
  const svc = SERVICES.find((s) => s.id === 'laparoscopia')!
  return (
    <div id="laparoscopia" className="relative overflow-hidden" style={{ minHeight: '340px' }}>
      {/* Background tunnel image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BASE}/images/laparoscopia-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row" style={{ minHeight: '340px' }}>
        {/* Left: worker photo */}
        <div className="lg:w-[42%] flex items-stretch p-6 lg:p-10">
          <img
            src={`${BASE}/${svc.image}`}
            alt={svc.title}
            className="w-full object-cover rounded"
            style={{ maxHeight: '380px' }}
          />
        </div>

        {/* Right: title, red line, icons */}
        <div className="lg:w-[58%] flex flex-col justify-center px-8 lg:px-12 py-10 text-right items-end">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">{svc.title}</h2>

          {/* Red horizontal divider */}
          <div className="w-full h-[3px] bg-brand-red my-8" />

          {/* Feature icons */}
          {svc.featureIcons && (
            <div className="flex flex-wrap justify-end gap-10">
              {svc.featureIcons.map((fi, idx) => (
                <FeatureIconCard
                  key={idx}
                  src={`${BASE}/${fi.icon}`}
                  label={fi.label}
                  invert
                  invert
                  className="w-20"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Plomería: image left (reverse), title right, icon grid below ─────────────
function PlomeriaSection() {
  const svc = SERVICES.find((s) => s.id === 'plomeria')!
  return (
    <ServiceHeroSection
      id="plomeria"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
      featureIcons={svc.featureIcons}
      reverse={true}
    />
  )
}

// ─── Impermeabilización: same structure as Scanner + icon grid below ─────────
function ImpermeabilizacionSection() {
  const svc = SERVICES.find((s) => s.id === 'impermeabilizacion')!
  return (
    <ServiceHeroSection
      id="impermeabilizacion"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
      featureIcons={svc.featureIcons}
      bg="bg-gray-50"
      reverse={true}
    />
  )
}

// ─── Drones: original background image + red left band + drone overlay ───────
function DronesSection() {
  const svc = SERVICES.find((s) => s.id === 'drones')!
  return (
    <div id="drones" className="relative overflow-hidden" style={{ minHeight: '160px' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BASE}/images/originals/drones-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      <div className="relative z-10 flex items-stretch" style={{ minHeight: '160px' }}>
        <div
          className="bg-brand-red flex flex-col justify-center px-8 lg:px-16 py-10"
          style={{ width: '42%' }}
        >
          <h2 className="text-white font-bold text-base lg:text-xl leading-tight uppercase tracking-wide mb-3">
            {svc.title}
          </h2>
          {svc.subtitle && <p className="text-white/80 text-sm leading-snug">{svc.subtitle}</p>}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={`${BASE}/images/originals/drone-transparent.png`}
            alt="Drone"
            className="h-32 lg:h-36 w-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Destapes con Trompos ────────────────────────────────────────────────────
function DestapesSection() {
  const svc = SERVICES.find((s) => s.id === 'destapes')!
  return (
    <ServiceHeroSection
      id="trompos"
      title={svc.title}
      image={svc.image!}
      subtitle={svc.subtitle}
      bg="bg-gray-50"
    />
  )
}

// ─── Standard alternating row ─────────────────────────────────────────────────
function ServiceRow({
  id,
  title,
  features,
  image,
  reverse,
  bg = 'bg-white',
}: {
  id?: string
  title: string
  features: string[]
  image?: string
  reverse?: boolean
  bg?: string
}) {
  return (
    <div id={id} className={`${bg}`}>
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '260px' }}>
        <div
          className={`lg:w-1/2 min-h-[200px] lg:min-h-0 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {image ? (
            <img src={`${BASE}/${image}`} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-dark/5 flex items-center justify-center min-h-[200px]">
              <span className="text-ink-faint text-sm">Sin imagen</span>
            </div>
          )}
        </div>
        <div
          className={`lg:w-1/2 flex flex-col justify-center px-8 py-8 lg:px-16 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-dark leading-tight mb-3">{title}</h2>
          <div className="w-16 h-[4px] bg-brand-red mb-4" />
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check size={14} className="text-teal mt-1 shrink-0" />
                <span className="text-ink text-sm leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─── Pintura: oval images + white label cards ─────────────────────────────────
function PinturaSection() {
  const svc = SERVICES.find((s) => s.id === 'pintura')!

  const CARDS = [
    {
      image: `${BASE}/images/obras/header.jpg`,
      label: 'Exteriores',
      desc: 'Aplicación de pintura y revestimientos exteriores',
    },
    {
      image: `${BASE}/images/800x400/01.jpg`,
      label: 'Interiores',
      desc: 'Pintura de casas, apartamentos, oficinas y depósitos',
    },
  ]

  return (
    <div id="pintura" className="bg-gray-100 py-16">
      <div className="section-container">
        <h2 className="text-sm font-semibold text-dark/50 text-center uppercase tracking-[0.25em] mb-3">
          {svc.title}
        </h2>
        {svc.subtitle && (
          <p className="text-center text-base text-dark/60 font-medium mb-14">{svc.subtitle}</p>
        )}
        <div className="grid lg:grid-cols-2 gap-10 max-w-2xl mx-auto">
          {CARDS.map((card) => (
            <div key={card.label}>
              <div
                className="relative z-10 overflow-hidden mx-2"
                style={{ borderRadius: '50%', aspectRatio: '4/3' }}
              >
                <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white px-8 pb-8 -mt-[5rem] relative z-0 pt-[6rem]">
                <p className="text-xl font-semibold text-dark mb-2">{card.label}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section id="servicios">
      {SERVICES.map((service, index) => {
        if (service.id === 'termico') return <TermicoSection key={service.id} />
        if (service.id === 'ultrasonido') return <UltrasonidoSection key={service.id} />
        if (service.id === 'scanner') return <ScannerSection key={service.id} />
        if (service.id === 'laparoscopia') return <LaparoscopiaSection key={service.id} />
        if (service.id === 'plomeria') return <PlomeriaSection key={service.id} />
        if (service.id === 'impermeabilizacion')
          return <ImpermeabilizacionSection key={service.id} />
        if (service.id === 'destapes') return <DestapesSection key={service.id} />
        if (service.id === 'drones') return <DronesSection key={service.id} />
        if (service.id === 'pintura') return <PinturaSection key={service.id} />

        return (
          <ServiceRow
            key={service.id}
            id={service.id}
            title={service.title}
            features={service.features}
            image={service.image}
            reverse={index % 2 === 1}
            bg={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          />
        )
      })}
    </section>
  )
}
