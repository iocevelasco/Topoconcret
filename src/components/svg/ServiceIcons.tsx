const BASE = '/Topoconcret'

interface IconProps {
  className?: string
  size?: number
  alt?: string
  invert?: boolean
}

function makeIcon(path: string, defaultAlt: string) {
  return function ServiceIcon({ className = '', size = 64, alt, invert = false }: IconProps) {
    return (
      <img
        src={`${BASE}/${path}`}
        alt={alt ?? defaultAlt}
        width={size}
        height={size}
        className={`object-contain ${invert ? 'invert' : ''} ${className}`}
      />
    )
  }
}

// ─── Numbered service icons (iconos-01 to iconos-10) ─────────────────────────
export const IconFiltraciones   = makeIcon('images/originals/iconos-01.png', 'Filtraciones')
export const IconPruebaHidro    = makeIcon('images/originals/iconos-02.png', 'Prueba hidrostática')
export const IconInspecTuberias = makeIcon('images/originals/iconos-03.png', 'Inspección de tuberías')
export const IconTuberiaGeneral = makeIcon('images/originals/iconos-04.png', 'Tuberías general')
export const IconTermico        = makeIcon('images/originals/iconos-05.png', 'Cámara térmica')
export const IconHumedades      = makeIcon('images/originals/iconos-06.png', 'Detección de humedades')
export const IconSolares        = makeIcon('images/originals/iconos-07.png', 'Paneles solares')
export const IconClimatizacion  = makeIcon('images/originals/iconos-08.png', 'Climatización / AA')
export const IconTechos         = makeIcon('images/originals/iconos-09.png', 'Análisis de techos')
export const IconTemperatura    = makeIcon('images/originals/iconos-02.png', 'Distribución de temperatura')

// ─── Specific service icons ───────────────────────────────────────────────────
export const IconBano           = makeIcon('images/originals/icon-bano.png', 'Baño / piezas sanitarias')
export const IconDrenaje        = makeIcon('images/originals/icon-drenaje.png', 'Drenaje / destapes')
export const IconTerraza        = makeIcon('images/originals/icon-terraza.png', 'Terrazas')
export const IconMaceta         = makeIcon('images/originals/icon-maceta.png', 'Maceteros')
export const IconTecho          = makeIcon('images/originals/icon-techo.png', 'Techos / aleros')
export const IconBanoPublico    = makeIcon('images/originals/icon-bano-publico.png', 'Baño público')
export const IconTuberia        = makeIcon('images/originals/icon-tuberia.png', 'Tuberías pluviales')
export const IconLupa           = makeIcon('images/originals/icon-lupa.png', 'Inspección laparoscópica')
export const IconTuberiaRota    = makeIcon('images/originals/icon-tuberia-rota.png', 'Tubería rota')
export const IconDrone          = makeIcon('images/originals/icon-drone.png', 'Dron de inspección')
