import { useState, type FormEvent } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', phone: '', service: '', message: '' }

const SERVICE_OPTIONS = [
  'Análisis Térmico',
  'Inspección con Ultrasonido',
  'Inspección Laparoscópica de Tuberías',
  'Escáner de Estructuras',
  'Plomería en General',
  'Destapes con Trompos',
  'Impermeabilización',
  'Vuelo con Drones',
  'Servicio de Pintura',
  'Otro / Consulta General',
]

const inputClass =
  'w-full border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 ' +
  'rounded-lg px-4 py-3 text-dark placeholder:text-ink-faint text-sm outline-none transition-all duration-200 bg-white'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service || 'No especificado',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={52} className="text-teal" />
        <h3 className="text-xl font-bold text-dark">¡Mensaje enviado!</h3>
        <p className="text-ink-light">Nos pondremos en contacto a la brevedad.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline mt-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ink-light uppercase tracking-wide mb-1.5">
            Nombre *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Su nombre completo"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-light uppercase tracking-wide mb-1.5">
            Teléfono *
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+507 6000-0000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-light uppercase tracking-wide mb-1.5">
          Email *
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="correo@ejemplo.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-light uppercase tracking-wide mb-1.5">
          Servicio de interés
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Seleccione un servicio...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-light uppercase tracking-wide mb-1.5">
          Descripción del problema *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describa brevemente el problema o consulta..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Enviando...
          </>
        ) : (
          <>
            <Send size={18} /> Enviar Solicitud
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Error al enviar. Llámenos directamente al{' '}
          <a href="tel:+50763835314" className="underline font-medium">
            +507 6383-5314
          </a>
        </p>
      )}
    </form>
  )
}
