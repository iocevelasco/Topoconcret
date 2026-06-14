import { Check, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  features: string[]
}

export default function ServiceCard({ icon: Icon, title, subtitle, features }: ServiceCardProps) {
  return (
    <div className="card p-6 group hover:-translate-y-1">
      <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors duration-300">
        <Icon size={24} className="text-teal" strokeWidth={1.5} />
      </div>

      <h3 className="text-base font-bold text-dark mb-1 leading-snug">{title}</h3>
      {subtitle && <p className="text-teal text-sm font-medium mb-2">{subtitle}</p>}

      <div className="w-8 h-0.5 bg-teal/40 mb-4" />

      <ul className="space-y-1.5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-ink-light text-sm">
            <Check size={13} className="text-teal mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
