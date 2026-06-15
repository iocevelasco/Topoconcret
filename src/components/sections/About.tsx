import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

const DESCRIPTION_PARAGRAPHS = [
  'Proveemos soluciones en la detección de problemas en inmuebles y obras civiles con tecnología avanzada no destructiva.',
  'Desarrollamos proyectos de remodelación, cumpliendo con los requisitos del cliente y manteniendo nuestro compromiso de calidad.',
  'Nuestros servicios se basan en optimizar el tiempo de nuestros clientes, facilitándole información detallada y efectiva para la identificación de los problemas presentes y transformando sus requerimientos en una única solución a corto plazo.',
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-20"
      style={{
        backgroundColor: '#3a3f47',
        backgroundImage: `url(${BASE}/images/header/psd-background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left: NOSOTROS + description */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-white tracking-wide uppercase mb-4">
              NOSOTROS
            </h2>
            <div className="h-[3px] bg-brand-red mb-8 w-full" />

            <div className="space-y-5">
              {DESCRIPTION_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-white/80 leading-relaxed text-sm lg:text-base">
                  {p}
                </p>
              ))}
            </div>

            <div className="h-[3px] bg-brand-red mt-10 w-full" />
          </div>

          {/* Right: Misión + Visión cards */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-7 shadow-lg">
              <h3 className="text-xl font-bold text-brand-red mb-4">Misión</h3>
              <p className="text-dark/80 leading-relaxed text-sm">{COMPANY.mission}</p>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-lg">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visión</h3>
              <p className="text-dark/80 leading-relaxed text-sm">{COMPANY.vision}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
