import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={`${BASE}/logo-dark.svg`} alt="Topoconcret" className="h-10 w-auto brightness-0 invert" />
          <p className="text-white/60 text-sm text-center md:text-right">
            © {COMPANY.year} {COMPANY.name}. Todos los derechos reservados.
            <span className="block md:inline md:ml-2">Ciudad de Panamá, República de Panamá.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
