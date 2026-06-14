import { CheckCircle2 } from 'lucide-react'
import { BENEFITS } from '../../constants/data'

export default function WhyUs() {
  return (
    <section id="por-que" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="section-badge">Nuestras ventajas</span>
            <h2 className="section-title">¿Por qué contratar nuestros servicios?</h2>
            <p className="text-ink-light text-lg leading-relaxed mb-8">
              Combinamos tecnología de punta con experiencia profesional para ofrecerle diagnósticos
              precisos sin dañar su propiedad.
            </p>
            <a href="#contacto" className="btn-primary">
              Solicitar Evaluación
            </a>
          </div>

          <div className="space-y-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start gap-4 border border-gray-100 rounded-xl p-5
                           hover:border-teal/30 hover:shadow-sm transition-all duration-200"
              >
                <CheckCircle2 size={20} className="text-teal shrink-0 mt-0.5" />
                <p className="text-ink text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
