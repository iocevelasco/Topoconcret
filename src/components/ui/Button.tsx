import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react'

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold tracking-wide',
    'transition-all duration-200',
    'active:scale-95',
    'cursor-pointer',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-brand-red hover:bg-brand-red-dark text-white focus-visible:ring-brand-red',
        secondary:
          'bg-teal hover:bg-teal-dark text-white focus-visible:ring-teal',
        outline:
          'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white focus-visible:ring-brand-red',
        ghost:
          'text-brand-red hover:bg-brand-red/10 focus-visible:ring-brand-red',
        white:
          'bg-white text-dark hover:bg-gray-50 shadow-sm focus-visible:ring-gray-300',
        dark:
          'bg-dark hover:bg-dark-800 text-white focus-visible:ring-dark',
      },
      size: {
        sm:  'text-xs px-4 py-2 rounded-md',
        md:  'text-sm px-6 py-3 rounded-lg',
        lg:  'text-base px-8 py-4 rounded-lg',
        xl:  'text-lg px-10 py-5 rounded-xl font-bold uppercase tracking-widest',
        icon: 'h-10 w-10 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

// ─── <button> element ────────────────────────────────────────────────────────
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
)
Button.displayName = 'Button'

// ─── <a> element (link button) ───────────────────────────────────────────────
export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonVariants {}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
)
LinkButton.displayName = 'LinkButton'

export { buttonVariants }
