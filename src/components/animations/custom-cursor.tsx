'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
    }
    
    checkTouchDevice()
    
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover' ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      if (isInteractive) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [cursorX, cursorY, isTouchDevice])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 500, damping: 28 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{ width: 20, height: 20 }}
        >
          <div
            className={`absolute inset-0 rounded-full transition-colors duration-200 ${
              isHovering ? 'bg-accent' : 'bg-white'
            }`}
          />
        </div>
      </motion.div>

      {/* Cursor trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.3 },
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{ width: 40, height: 40 }}
        >
          <div className="absolute inset-0 rounded-full border border-white/30" />
        </div>
      </motion.div>
    </>
  )
}
