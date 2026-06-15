import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

export default function Footer() {
  return (
    <footer className="bg-brand-red py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={`${BASE}/images/logo-dark.svg`}
            alt="Topoconcret"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="text-white text-sm text-center md:text-right">
            Topoconcret {COMPANY.year}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
