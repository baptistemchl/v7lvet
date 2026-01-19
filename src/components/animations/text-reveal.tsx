'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  as: Component = 'p',
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  const words = children.split(' ')

  return (
    <Component ref={ref} className={cn('overflow-hidden', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration,
                  delay: delay + i * 0.05,
                  ease: [0.25, 0.4, 0.25, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  )
}

interface CharRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function CharReveal({
  children,
  className,
  delay = 0,
  stagger = 0.02,
  once = true,
  as: Component = 'p',
}: CharRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  const chars = children.split('')

  return (
    <Component ref={ref} className={cn('overflow-hidden', className)}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: '100%', opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: delay + i * stagger,
                ease: [0.25, 0.4, 0.25, 1],
              },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  )
}

interface LineRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function LineReveal({
  children,
  className,
  delay = 0,
  once = true,
}: LineRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
