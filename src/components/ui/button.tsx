'use client'

import { forwardRef, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  magnetic?: boolean
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      className,
      magnetic = true,
      onClick,
      disabled,
      type = 'button',
      icon,
      iconPosition = 'right',
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const magneticRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!magnetic || !magneticRef.current) return

        const rect = magneticRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) * 0.3
        const deltaY = (e.clientY - centerY) * 0.3

        magneticRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      },
      [magnetic]
    )

    const handleMouseLeave = useCallback(() => {
      if (!magneticRef.current) return
      magneticRef.current.style.transform = 'translate(0, 0)'
    }, [])

    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-medium',
      'transition-all duration-500 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        // Sizes
        'text-sm px-5 py-2.5 rounded-full gap-2': size === 'sm',
        'text-sm px-7 py-3.5 rounded-full gap-2.5': size === 'md',
        'text-base px-9 py-4 rounded-full gap-3': size === 'lg',
      }
    )

    const variantStyles = {
      primary: cn(
        'bg-accent text-surface',
        'hover:bg-accent-light hover:shadow-glow',
        'active:scale-[0.98]'
      ),
      secondary: cn(
        'bg-velvet-800 text-velvet-100',
        'hover:bg-velvet-700',
        'active:scale-[0.98]'
      ),
      ghost: cn(
        'bg-transparent text-velvet-200',
        'hover:bg-velvet-800/50 hover:text-white',
        'active:scale-[0.98]'
      ),
      outline: cn(
        'bg-transparent border border-velvet-700 text-velvet-200',
        'hover:border-accent hover:text-accent',
        'active:scale-[0.98]'
      ),
    }

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </>
    )

    const buttonElement = (
      <motion.div
        ref={magneticRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
        style={{ transition: 'transform 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)' }}
      >
        {href ? (
          <Link
            href={href}
            className={cn(baseStyles, variantStyles[variant], className)}
          >
            {content}
          </Link>
        ) : (
          <button
            ref={ref || buttonRef}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(baseStyles, variantStyles[variant], className)}
          >
            {content}
          </button>
        )}
      </motion.div>
    )

    return buttonElement
  }
)

Button.displayName = 'Button'

// Arrow button variant
interface ArrowButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  onClick?: () => void
}

export function ArrowButton({
  children,
  href,
  className,
  onClick,
}: ArrowButtonProps) {
  const content = (
    <span className={cn('group inline-flex items-center gap-2', className)}>
      <span className="link-underline">{children}</span>
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </span>
  )

  if (href) {
    return (
      <Link href={href} className="text-velvet-300 hover:text-white transition-colors">
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className="text-velvet-300 hover:text-white transition-colors">
      {content}
    </button>
  )
}
