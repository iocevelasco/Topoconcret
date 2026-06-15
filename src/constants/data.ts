import {
  Thermometer,
  Waves,
  Camera,
  ScanLine,
  Wrench,
  Tornado,
  Shield,
  PlaneTakeoff,
  PaintBucket,
  type LucideIcon,
} from 'lucide-react'

export interface FeatureIcon {
  icon: string
  label: string
}

export interface ServiceItem {
  id: string
  icon: LucideIcon
  title: string
  subtitle?: string
  features: string[]
  image?: string
  theme?: 'light' | 'dark'
  featureIcons?: FeatureIcon[]
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'termico',
    icon: Thermometer,
    title: 'Análisis Térmico',
    subtitle: 'Tecnología no invasiva para detectar problemas ocultos en estructuras',
    image: 'images/originals/section-3.png',
    features: [
      'Detección de filtraciones',
      'Detección de humedades',
      'Identificación de tuberías',
      'Detección de problemas ocultos en estructuras',
      'Detección de problemas de climatización / AA',
      'Análisis de techos y terrazas',
      'Análisis de paneles solares',
      'Análisis de distribución de temperatura',
    ],
    featureIcons: [
      { icon: 'images/originals/iconos-01.png', label: 'Detección de filtraciones' },
      { icon: 'images/originals/iconos-06.png', label: 'Detección de humedades' },
      { icon: 'images/originals/iconos-03.png', label: 'Identificación de tuberías' },
      { icon: 'images/originals/iconos-05.png', label: 'Detección de problemas ocultos en las estructuras' },
      { icon: 'images/originals/iconos-08.png', label: 'Detección de problemas de climatización' },
      { icon: 'images/originals/iconos-04.png', label: 'Detección de problemas de AA' },
      { icon: 'images/originals/iconos-09.png', label: 'Análisis de techos y terrazas' },
      { icon: 'images/originals/iconos-07.png', label: 'Análisis de paneles solares' },
      { icon: 'images/originals/iconos-02.png', label: 'Análisis de distribución de la temperatura' },
    ],
  },
  {
    id: 'ultrasonido',
    icon: Waves,
    title: 'Inspección con Ultrasonido',
    subtitle: 'Detección de filtraciones de tuberías de agua potable',
    image: 'images/originals/ultrasonido-2.png',
    features: ['Detección de filtraciones de tuberías de agua potable'],
  },
  {
    id: 'laparoscopia',
    icon: Camera,
    title: 'Inspección Laparoscópica de Tuberías',
    subtitle: 'Inspección interna de tuberías de desagüe y pluviales',
    image: 'images/originals/laparoscopia.png',
    theme: 'dark',
    features: ['Tuberías de desagüe', 'Tuberías pluviales'],
    featureIcons: [
      { icon: 'images/originals/iconos-10.png', label: 'Tuberías de desagüe' },
      { icon: 'images/originals/icon-tuberia.png', label: 'Tuberías pluviales' },
    ],
  },
  {
    id: 'scanner',
    icon: ScanLine,
    title: 'Escáner de Estructuras',
    subtitle: 'Detección de tuberías y elementos estructurales en paredes y losas',
    image: 'images/service-1/01.jpg',
    features: ['Detección de tuberías y elementos estructurales'],
  },
  {
    id: 'plomeria',
    icon: Wrench,
    title: 'Plomería en General',
    subtitle: 'Instalación, reparación y mantenimiento integral de tuberías',
    image: 'images/originals/pipe-bg.png',
    features: [
      'Prueba hidrostática',
      'Reparación de fugas de agua',
      'Instalación y reparación de tuberías',
      'Instalación de piezas sanitarias',
      'Destapes y limpieza de drenajes con trompos eléctricos',
    ],
    featureIcons: [
      { icon: 'images/originals/iconos-02.png', label: 'Prueba hidrostática' },
      { icon: 'images/originals/iconos-01.png', label: 'Reparación de fugas de agua' },
      { icon: 'images/originals/iconos-04.png', label: 'Instalación de tuberías' },
      { icon: 'images/originals/icon-bano.png', label: 'Piezas sanitarias' },
      { icon: 'images/originals/icon-drenaje.png', label: 'Destapes y drenajes' },
    ],
  },
  {
    id: 'destapes',
    icon: Tornado,
    title: 'Destapes con Trompos',
    subtitle: 'Limpieza de drenajes obstruidos con equipo eléctrico especializado',
    image: 'images/service-3/02.jpg',
    features: ['Limpieza y destape de drenajes obstruidos con equipo eléctrico especializado'],
  },
  {
    id: 'impermeabilizacion',
    icon: Shield,
    title: 'Impermeabilización',
    subtitle: 'Protección duradera de baños, terrazas, aleros y maceteros',
    image: 'images/impermeabilizacion.png',
    features: ['Estructuras de baños', 'Terrazas', 'Aleros', 'Maceteros'],
    featureIcons: [
      { icon: 'images/originals/icon-bano.png', label: 'Estructuras de baños' },
      { icon: 'images/originals/icon-terraza.png', label: 'Terrazas' },
      { icon: 'images/originals/icon-techo.png', label: 'Aleros' },
      { icon: 'images/originals/icon-maceta.png', label: 'Maceteros' },
    ],
  },
  {
    id: 'drones',
    icon: PlaneTakeoff,
    title: 'Vuelo con Drones para Inspecciones',
    subtitle: 'Inspecciones aéreas de estructuras, techos y áreas de difícil acceso',
    image: 'images/originals/icon-drone.png',
    features: ['Inspecciones aéreas de estructuras, techos y áreas de difícil acceso'],
    theme: 'dark',
  },
  {
    id: 'pintura',
    icon: PaintBucket,
    title: 'Servicio de Pintura',
    subtitle: 'Aplicación profesional de pinturas para exteriores e interiores',
    image: 'images/obras/header.jpg',
    features: [
      'Exteriores: aplicación de pintura y revestimientos',
      'Interiores: casas, apartamentos, oficinas y depósitos',
    ],
  },
]

export interface BenefitItem {
  id: string
  text: string
}

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b1',
    text: 'Generamos confianza en el negocio de bienes raíces, realizamos inspecciones antes de una operación de compra, venta o alquiler.',
  },
  { id: 'b2', text: 'Somos la solución para administradoras de edificios y disputas de vecinos.' },
  {
    id: 'b3',
    text: 'Ubicamos la fuente de filtraciones y humedades en inmuebles comerciales con alto tráfico de personas, de manera rápida y efectiva.',
  },
  { id: 'b4', text: 'Protegemos tu inversión.' },
  {
    id: 'b5',
    text: 'Diagnósticos rápidos, no destructivos y efectivos con tecnología avanzada.',
  },
  { id: 'b6', text: 'Ahorros en gastos de destrucción y reparación.' },
  { id: 'b7', text: 'Informes profesionales detallados con recomendaciones.' },
]

export const COMPANY = {
  name: 'Topoconcret S.A.',
  shortName: 'Topoconcret',
  tagline: 'Nuestra prioridad es tu tiempo',
  phone: '+507 6383-5314',
  phoneRaw: '+50763835314',
  emailWork: 'info@topoconcret.com',
  emailSupplier: 'proveedores@topoconcret.com',
  address: 'Ave Ricardo J. Alfaro, The Century Tower, Mezzanine Oficina M-78, Ciudad de Panamá',
  whatsappMessage:
    'Hola, me gustaría solicitar una cotización para los servicios de Topoconcret.',
  description:
    'Proveemos soluciones en la detección de problemas en inmuebles y obras civiles con tecnología avanzada no destructiva. Desarrollamos proyectos de remodelación, cumpliendo con los requisitos del cliente y manteniendo nuestro compromiso de calidad. Nuestros servicios se basan en optimizar el tiempo de nuestros clientes, facilitándole información detallada y efectiva para la identificación de los problemas presentes y transformando sus requerimientos en una única solución a corto plazo.',
  mission:
    'Solucionar y mejorar la calidad de vida de nuestros clientes, diferenciándonos del mercado por nuestra respuesta inmediata y de alta calidad, conformada por un equipo de profesionales multidisciplinarios altamente capacitados.',
  vision:
    'Contribuir con el desarrollo del país, implementando innovaciones en el desarrollo de nuestros trabajos, comprometidos siempre con el cumplimiento de los estándares de calidad, confiabilidad y normas de conservación del medio ambiente.',
  year: 2024,
} as const
