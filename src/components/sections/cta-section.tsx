'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { TextReveal, FadeIn } from '@/components/animations'

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="section-container"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-600 to-accent-dark" />
          
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-noise bg-repeat animate-grain" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-10" />

          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 lg:px-24 lg:py-32 text-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-8">
                Prêt à passer au niveau supérieur ?
              </span>
            </FadeIn>

            <TextReveal
              as="h2"
              delay={0.1}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 max-w-4xl mx-auto"
            >
              Transformez votre vision en réalité financière
            </TextReveal>

            <FadeIn delay={0.4}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Rejoignez les entrepreneurs qui ont choisi l&apos;excellence.
                Premier rendez-vous offert, sans engagement.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90"
                  icon={<ArrowUpRight className="w-5 h-5" />}
                >
                  Réserver mon appel découverte
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                  href="tel:+33123456789"
                >
                  Ou appelez-nous
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
