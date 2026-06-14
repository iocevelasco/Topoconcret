import { SERVICES } from '../../constants/data'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge">Lo que hacemos</span>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="text-ink-light text-lg leading-relaxed">
            Tecnología avanzada no destructiva para diagnosticar y resolver cualquier problema en
            su inmueble.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
