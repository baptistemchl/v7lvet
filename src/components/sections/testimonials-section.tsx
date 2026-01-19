'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote } from 'lucide-react'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { Tag, GlassCard } from '@/components/ui'

const testimonials = [
  {
    quote: "V7LVET a transformé notre gestion financière. Leur approche proactive nous a permis d'économiser 30% sur notre charge fiscale.",
    author: 'Marie Dupont',
    role: 'CEO, TechStart',
    image: '/images/testimonials/marie.jpg',
  },
  {
    quote: "Un accompagnement d'exception. Ils comprennent vraiment les enjeux des startups en forte croissance.",
    author: 'Thomas Martin',
    role: 'Fondateur, ScaleUp',
    image: '/images/testimonials/thomas.jpg',
  },
  {
    quote: "Professionnalisme et réactivité au rendez-vous. Je recommande sans hésitation.",
    author: 'Sophie Bernard',
    role: 'Directrice, Innov Corp',
    image: '/images/testimonials/sophie.jpg',
  },
]

const logos = [
  { name: 'TechCorp', logo: 'TechCorp' },
  { name: 'Innovate', logo: 'Innovate' },
  { name: 'ScaleUp', logo: 'ScaleUp' },
  { name: 'Growth', logo: 'Growth' },
  { name: 'Startup', logo: 'Startup' },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velvet-950" />

      <div className="relative z-10">
        {/* Header */}
        <div className="section-container mb-16">
          <FadeIn>
            <Tag className="mb-6">Ils nous font confiance</Tag>
          </FadeIn>
          <TextReveal
            as="h2"
            delay={0.1}
            className="text-4xl md:text-5xl font-display font-bold text-white max-w-3xl"
          >
            Des entrepreneurs satisfaits témoignent
          </TextReveal>
        </div>

        {/* Testimonials Scroll */}
        <motion.div style={{ x }} className="flex gap-6 px-6 lg:px-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[400px] lg:w-[450px]"
            >
              <GlassCard className="h-full flex flex-col">
                <Quote className="w-10 h-10 text-accent/30 mb-6" />
                <p className="text-lg text-velvet-200 mb-8 leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-velvet-700 flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-velvet-500">{testimonial.role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos */}
        <div className="section-container mt-20">
          <FadeIn>
            <p className="text-center text-sm text-velvet-500 uppercase tracking-wider mb-8">
              Ils ont choisi l&apos;excellence
            </p>
          </FadeIn>
          <StaggerContainer
            stagger={0.05}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
          >
            {logos.map((logo) => (
              <StaggerItem key={logo.name}>
                <div className="text-2xl font-display font-bold text-velvet-700 hover:text-velvet-500 transition-colors">
                  {logo.logo}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
