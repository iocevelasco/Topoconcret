import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { COMPANY } from '../../constants/data'
import ContactForm from '../ui/ContactForm'

const contactItems = [
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneRaw}`,
  },
  {
    icon: Mail,
    label: 'Trabaje con nosotros',
    value: COMPANY.emailWork,
    href: `mailto:${COMPANY.emailWork}`,
    hint: 'Envíe su hoja de vida.',
  },
  {
    icon: Send,
    label: 'Sea nuestro Proveedor',
    value: COMPANY.emailSupplier,
    href: `mailto:${COMPANY.emailSupplier}`,
    hint: 'Envíe su información.',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: COMPANY.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge">Hablemos</span>
          <h2 className="section-title">Contáctanos</h2>
          <p className="text-ink-light text-lg">
            Solicite una cotización sin compromiso. Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href, hint }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5
                           hover:border-teal/40 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Icon size={18} className="text-teal" />
                </div>
                <div>
                  <p className="text-ink-muted text-xs uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-dark font-medium text-sm">{value}</p>
                  {hint && <p className="text-ink-light text-xs mt-0.5">{hint}</p>}
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-dark mb-6">Formulario de Cotizaciones</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
