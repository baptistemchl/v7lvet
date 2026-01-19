'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const factor = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * factor, -100 * speed * factor])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.3,
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', containerClassName)}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={cn('w-full h-full object-cover', className)}
      />
    </div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  bgClassName?: string
}

export function ParallaxSection({
  children,
  className,
  bgClassName,
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={ref} className={cn('relative', className)}>
      <motion.div
        style={{ opacity, scale }}
        className={cn('absolute inset-0', bgClassName)}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
