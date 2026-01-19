'use client'

import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'

interface UseMagneticOptions {
  strength?: number
  ease?: string
  duration?: number
}

export function useMagnetic<T extends HTMLElement = HTMLElement>(
  options: UseMagneticOptions = {}
) {
  const { strength = 0.3, ease = 'power3.out', duration = 0.5 } = options
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration,
        ease,
      })
    },
    [strength, duration, ease]
  )

  const handleMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return

    gsap.to(element, {
      x: 0,
      y: 0,
      duration,
      ease,
    })
  }, [duration, ease])

  const magneticProps = {
    onMouseMove: handleMouseMove as unknown as React.MouseEventHandler,
    onMouseLeave: handleMouseLeave,
  }

  return { ref, magneticProps }
}
