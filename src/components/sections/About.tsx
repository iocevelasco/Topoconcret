import { Target, Eye } from 'lucide-react'
import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-dark text-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 block">
            Quiénes somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">NOSOTROS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-white/70 leading-relaxed text-lg">{COMPANY.description}</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={`${BASE}/images/about/01.jpg`}
              alt="Equipo Topoconcret"
              className="w-full h-72 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, label: 'Misión', text: COMPANY.mission },
            { icon: Eye, label: 'Visión', text: COMPANY.vision },
          ].map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="border border-white/10 rounded-2xl p-8 hover:border-teal/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-5">
                <Icon size={24} className="text-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{label}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
