import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        {
          // Sizes
          'text-xs px-2.5 py-1': size === 'sm',
          'text-sm px-3 py-1.5': size === 'md',
          // Variants
          'bg-velvet-800 text-velvet-300': variant === 'default',
          'bg-accent/10 text-accent border border-accent/20': variant === 'accent',
          'bg-transparent border border-velvet-700 text-velvet-400': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  )
}

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs uppercase tracking-wider text-accent font-medium',
        className
      )}
    >
      {children}
    </span>
  )
}
