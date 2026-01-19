'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { TextReveal, FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'
import { stats } from '@/lib/data'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-radial-accent" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        
        {/* Floating orbs */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 section-container w-full pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/50 border border-velvet-700/50 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm text-velvet-300">
                Cabinet d&apos;expertise comptable nouvelle génération
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <div className="mb-8">
            <TextReveal
              as="h1"
              delay={0.3}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-4"
            >
              Drive the
            </TextReveal>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gradient-accent leading-[0.95] tracking-tight"
              >
                future.
              </motion.span>
            </div>
          </div>

          {/* Subtitle */}
          <FadeIn delay={0.7}>
            <p className="text-xl md:text-2xl text-velvet-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Nous accompagnons les entrepreneurs visionnaires avec une expertise
              comptable d&apos;excellence et des solutions innovantes.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.9}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Démarrer maintenant
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Découvrir nos services
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <StaggerContainer
          delay={1.2}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-velvet-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-velvet-500"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
