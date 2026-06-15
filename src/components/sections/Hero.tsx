import { useEffect, useState } from 'react'

const BASE = '/Topoconcret'

const SLIDES = [
  { label: 'DETECCIONES',    bg: `${BASE}/header02.gif` },
  { label: 'REMODELACIONES', bg: `${BASE}/header01.jpg` },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % SLIDES.length)
        setFade(true)
      }, 500)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative h-[72vh] min-h-[460px] flex items-center overflow-hidden"
      >
        {/* Slide images — cross-fade via opacity */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.label}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            <img
              src={slide.bg}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/55" />
          </div>
        ))}

        <div className="section-container relative z-10">
          <div
            className="transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
          >
            <div className="inline-block bg-brand-red px-5 py-2 mb-4">
              <span className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">
                {SLIDES[idx].label}
              </span>
            </div>
          </div>
          <p className="text-white text-xl sm:text-2xl font-medium">
            Nuestra prioridad es tu tiempo
          </p>
        </div>
      </section>

      {/* ── Intro below banner ──────────────────────────────────────── */}
      <div className="bg-white py-14">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-dark leading-tight mb-4">
            Detecciones y reparaciones de problemas en inmuebles
          </h1>
          <h2 className="text-base sm:text-lg text-dark/60 mb-6 font-normal">
            (filtraciones - humedades - vicios ocultos)
          </h2>
          <p className="text-dark/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Encuentre las causas de sus problemas{' '}
            <strong className="text-dark font-semibold">rápidamente</strong>, al{' '}
            <strong className="text-dark font-semibold">menor costo</strong> y sin destrucción.
          </p>
        </div>
      </div>
    </>
  )
}
