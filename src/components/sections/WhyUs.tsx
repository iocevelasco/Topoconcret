const BASE = '/Topoconcret'

const BENEFITS = [
  {
    img: 'images/originals/why-confianza.png',
    text: 'Generamos confianza en el negocio de bienes raíces, realizamos inspecciones antes de una operación de compra, venta o alquiler.',
  },
  {
    img: 'images/originals/why-solucion.png',
    text: 'Somos la solución para administradoras de edificios y disputa de vecinos.',
  },
  {
    img: 'images/originals/why-humedades.png',
    text: 'Ubicamos la fuente de filtraciones y humedades en inmuebles comerciales con alto tráfico de personas de una manera rápida y efectiva.',
  },
  {
    img: 'images/originals/why-inversion.png',
    text: 'Protegemos tu inversión.',
  },
  {
    img: 'images/originals/why-diagnosticos.png',
    text: 'Diagnósticos rápidos, no destructivo y efectivos con tecnología avanzada.',
  },
  {
    img: 'images/originals/why-reparacion.jpg',
    text: 'Ahorros en gastos de destrucción y reparación.',
  },
  {
    img: 'images/originals/why-profesionales.png',
    text: 'Informes profesionales detallados con recomendaciones.',
  },
]

interface BenefitCircleProps {
  img: string
  text: string
}

function BenefitCircle({ img, text }: BenefitCircleProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3 w-36 lg:w-40">
      <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shrink-0 shadow-sm">
        <img src={`${BASE}/${img}`} alt={text} className="w-full h-full object-cover" />
      </div>
      <p className="text-dark text-xs leading-relaxed">{text}</p>
    </div>
  )
}

export default function WhyUs() {
  const row1 = BENEFITS.slice(0, 4)
  const row2 = BENEFITS.slice(4)

  return (
    <section id="contratar" className="py-14 bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-dark text-center mb-10 leading-tight">
          ¿Por qué contratar nuestros servicios?
        </h2>

        {/* Row 1: 4 circles */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
          {row1.map((b, i) => (
            <BenefitCircle key={i} img={b.img} text={b.text} />
          ))}
        </div>

        {/* Row 2: 3 circles centered */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {row2.map((b, i) => (
            <BenefitCircle key={i} img={b.img} text={b.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
