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

export interface ServiceItem {
  id: string
  icon: LucideIcon
  title: string
  subtitle?: string
  features: string[]
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'termico',
    icon: Thermometer,
    title: 'Análisis Térmico',
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
  },
  {
    id: 'ultrasonido',
    icon: Waves,
    title: 'Inspección con Ultrasonido',
    features: ['Detección de filtraciones de tuberías de agua potable'],
  },
  {
    id: 'laparoscopia',
    icon: Camera,
    title: 'Inspección Laparoscópica de Tuberías',
    features: ['Tuberías de desagüe', 'Tuberías pluviales'],
  },
  {
    id: 'scanner',
    icon: ScanLine,
    title: 'Escáner de Estructuras',
    features: ['Detección de tuberías y elementos estructurales'],
  },
  {
    id: 'plomeria',
    icon: Wrench,
    title: 'Plomería en General',
    features: [
      'Prueba hidrostática',
      'Reparación de fugas de agua',
      'Instalación y reparación de tuberías',
      'Instalación de piezas sanitarias',
      'Destapes y limpieza de drenajes con trompos eléctricos',
    ],
  },
  {
    id: 'destapes',
    icon: Tornado,
    title: 'Destapes con Trompos',
    features: ['Limpieza y destape de drenajes obstruidos con equipo eléctrico especializado'],
  },
  {
    id: 'impermeabilizacion',
    icon: Shield,
    title: 'Impermeabilización',
    features: ['Estructuras de baños', 'Terrazas', 'Aleros', 'Maceteros'],
  },
  {
    id: 'drones',
    icon: PlaneTakeoff,
    title: 'Vuelo con Drones',
    subtitle: 'Para Inspecciones',
    features: ['Inspecciones aéreas de estructuras, techos y áreas de difícil acceso'],
  },
  {
    id: 'pintura',
    icon: PaintBucket,
    title: 'Servicio de Pintura',
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
