'use client'

import { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Card3D({
  children,
  className,
  containerClassName,
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring for 3D rotation
  const rotateX = useSpring(0, { stiffness: 200, damping: 25 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    // 3D tilt effect
    rotateX.set(-percentY * 12)
    rotateY.set(percentX * 12)

    // Mouse position for spotlight
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  // Spotlight gradient that follows the mouse
  const spotlightGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(167, 139, 250, 0.12),
      transparent 40%
    )
  `

  // Subtle border glow that follows mouse
  const borderGlow = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.03) 50%,
      transparent 80%
    )
  `

  return (
    <div className={cn('perspective-[1200px]', containerClassName)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={cn(
          'relative rounded-3xl overflow-hidden',
          'transition-shadow duration-500 ease-out',
          className
        )}
      >
        {/* Glass background */}
        <div 
          className={cn(
            'absolute inset-0 rounded-3xl',
            'bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.08]',
            'backdrop-blur-xl',
            'transition-all duration-500'
          )}
        />

        {/* Border - subtle glass edge */}
        <div 
          className={cn(
            'absolute inset-0 rounded-3xl',
            'border border-white/[0.08]',
            'transition-colors duration-500',
            isHovered && 'border-white/[0.15]'
          )}
        />

        {/* Top edge highlight - glass reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Spotlight glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ background: spotlightGradient }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Border glow following mouse */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ background: borderGlow }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner shadow for depth */}
        <div 
          className={cn(
            'absolute inset-0 rounded-3xl pointer-events-none',
            'shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]',
            'transition-shadow duration-500',
            isHovered && 'shadow-[inset_0_0_80px_rgba(0,0,0,0.1)]'
          )}
        />

        {/* Content with 3D transform */}
        <motion.div 
          className="relative z-10"
          style={{ transform: 'translateZ(20px)' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl p-8 overflow-hidden',
        // Glass background
        'bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.08]',
        'backdrop-blur-xl',
        // Border
        'border border-white/[0.08]',
        // Shadow
        'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
        // Hover effects
        hover && [
          'transition-all duration-500 ease-out',
          'hover:border-white/[0.15]',
          'hover:shadow-[0_16px_48px_rgba(0,0,0,0.15),0_0_0_1px_rgba(167,139,250,0.1)]',
          'hover:bg-gradient-to-br hover:from-white/[0.1] hover:via-white/[0.05] hover:to-white/[0.1]'
        ],
        className
      )}
    >
      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

interface StatCardProps {
  value: string
  label: string
  className?: string
  delay?: number
}

export function StatCard({ value, label, className, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn('text-center', className)}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-accent mb-2">
        {value}
      </div>
      <div className="text-velvet-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}
