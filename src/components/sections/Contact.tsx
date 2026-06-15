import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { COMPANY } from '../../constants/data'
import { IconWhatsApp, IconFacebook, IconInstagram, IconMail } from '../svg'
import { Button } from '../ui/Button'

const BASE = '/Topoconcret'

interface FormState {
  name: string
  phone: string
  email: string
  message: string
}

const INITIAL: FormState = { name: '', phone: '', email: '', message: '' }

const inputClass =
  'w-full bg-[#2a2e35] border border-[#3a3f47] focus:border-brand-red focus:outline-none ' +
  'rounded px-4 py-3 text-white placeholder:text-white/40 text-sm transition-colors duration-200'

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section
      id="contacto"
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
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Contáctanos</h2>
            <div className="h-[2px] bg-brand-red mb-8 w-full" />

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Trabaje con nosotros</h3>
                <p className="text-white/70 text-sm mb-1">Envíe su hoja de vida.</p>
                <a
                  href={`mailto:${COMPANY.emailWork}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <IconMail size={16} className="shrink-0" />
                  {COMPANY.emailWork}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Sea nuestro Proveedor</h3>
                <p className="text-white/70 text-sm mb-1">Envíe su información.</p>
                <a
                  href={`mailto:${COMPANY.emailSupplier}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <IconMail size={16} className="shrink-0" />
                  {COMPANY.emailSupplier}
                </a>
              </div>
            </div>

            <div className="h-[1px] bg-white/20 mb-8" />

            {/* Phone + social */}
            <div className="flex items-center justify-between">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}`}
                className="flex items-center gap-3 text-white font-bold text-xl hover:text-white/80 transition-colors"
              >
                <IconWhatsApp size={28} />
                {COMPANY.phone}
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/topoconcret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                  aria-label="Facebook"
                >
                  <IconFacebook size={28} />
                </a>
                <a
                  href="https://www.instagram.com/topoconcret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                  aria-label="Instagram"
                >
                  <IconInstagram size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: quote form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Cotizaciones</h2>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={52} className="text-brand-red" />
                <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="text-white/60">Nos pondremos en contacto a la brevedad.</p>
                <Button onClick={() => setStatus('idle')} variant="primary" className="mt-2">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Mensaje"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-brand-red hover:bg-red-700 text-white font-bold text-sm tracking-widest
                               uppercase px-12 py-4 transition-colors duration-200 disabled:opacity-60
                               disabled:cursor-not-allowed min-w-[180px] flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      'ENVIAR'
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Error al enviar. Llámenos al{' '}
                    <a href={`tel:${COMPANY.phoneRaw}`} className="underline">
                      {COMPANY.phone}
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
