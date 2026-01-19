'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Scale, Shield, Rocket } from 'lucide-react'
import { Card3D, ArrowButton, Tag } from '@/components/ui'
import { FadeIn, StaggerContainer, StaggerItem, TextReveal } from '@/components/animations'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  chart: <BarChart3 className="w-6 h-6" />,
  scale: <Scale className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
}

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-velvet-950/50 to-surface" />

      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <FadeIn>
            <Tag className="mb-6">Nos expertises</Tag>
          </FadeIn>
          <TextReveal
            as="h2"
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Une expertise complète pour votre réussite
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-xl text-velvet-400">
              De la gestion quotidienne à la stratégie long terme, nous vous accompagnons
              à chaque étape de votre développement.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer
          stagger={0.15}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Card3D
                className="h-full p-8 lg:p-10"
                glowColor={`rgba(167, 139, 250, 0.1)`}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
                    'bg-gradient-to-br',
                    service.gradient,
                    'text-white'
                  )}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-velvet-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Preview */}
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-velvet-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <ArrowButton href={`/services#${service.id}`}>
                  En savoir plus
                </ArrowButton>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-velvet-400 mb-6">
              Vous avez un besoin spécifique ?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <span className="font-medium">Parlons de votre projet</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
