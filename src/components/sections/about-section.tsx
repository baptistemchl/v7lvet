'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Star, Lightbulb, Users, Lock } from 'lucide-react'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { Tag, GlassCard } from '@/components/ui'
import { values } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  star: <Star className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  lock: <Lock className="w-6 h-6" />,
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <FadeIn>
              <Tag className="mb-6">Notre approche</Tag>
            </FadeIn>
            <TextReveal
              as="h2"
              delay={0.1}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              L&apos;excellence au service de votre ambition
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-lg text-velvet-400 mb-8 leading-relaxed">
                Chez V7LVET, nous croyons que l&apos;expertise comptable doit être
                un accélérateur de croissance, pas une contrainte administrative.
                Notre mission : transformer les chiffres en leviers stratégiques.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <span className="text-xl font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Analyse approfondie</h4>
                    <p className="text-sm text-velvet-500">Compréhension totale de vos enjeux</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <span className="text-xl font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Stratégie sur-mesure</h4>
                    <p className="text-sm text-velvet-500">Solutions adaptées à vos objectifs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <span className="text-xl font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Accompagnement continu</h4>
                    <p className="text-sm text-velvet-500">Suivi permanent et proactif</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Values Grid */}
          <StaggerContainer stagger={0.1} className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <GlassCard className={index === 1 || index === 2 ? 'mt-8' : ''}>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {iconMap[value.icon]}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-velvet-400 leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
