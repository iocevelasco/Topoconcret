import { MapPin, Phone, Clock } from 'lucide-react'
import { COMPANY } from '../../constants/data'
import { LinkButton } from '../ui/Button'

const MAP_URL =
  'https://maps.google.com/maps?q=Century+Tower+Properties%2C+S.A.%2C+Calle+65+Oeste%2C+Panam%C3%A1&t=m&z=17&output=embed&iwloc=near'

export default function Location() {
  return (
    <section id="mapa" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-gray text-sm font-semibold uppercase tracking-widest mb-3 block">Dónde encontrarnos</span>
          <h2 className="section-title">Nuestra Ubicación</h2>
          <p className="text-ink-light text-lg">
            Visítenos en nuestras oficinas en Ciudad de Panamá.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-brand-gray/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-gray" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">Dirección</p>
                <p className="text-dark text-sm font-medium leading-relaxed">{COMPANY.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-brand-gray/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={18} className="text-brand-gray" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">Teléfono / WhatsApp</p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-dark text-sm font-medium hover:text-brand-gray transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-brand-gray/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={18} className="text-brand-gray" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">Horario</p>
                <p className="text-dark text-sm font-medium">Lunes – Viernes</p>
                <p className="text-ink-light text-sm">8:00 AM – 5:00 PM</p>
              </div>
            </div>

            <LinkButton
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full justify-center"
            >
              Cómo llegar
            </LinkButton>
          </div>

          {/* Google Maps iframe */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-[420px]">
            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Topoconcret"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
