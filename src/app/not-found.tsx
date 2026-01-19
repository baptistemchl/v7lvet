import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui'
import { FadeIn, TextReveal } from '@/components/animations'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-accent" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 section-container text-center">
        <FadeIn>
          <div className="text-[12rem] md:text-[16rem] font-display font-bold text-velvet-800 leading-none select-none">
            404
          </div>
        </FadeIn>

        <TextReveal
          as="h1"
          delay={0.2}
          className="text-3xl md:text-4xl font-display font-bold text-white mb-4 -mt-8"
        >
          Page introuvable
        </TextReveal>

        <FadeIn delay={0.4}>
          <p className="text-xl text-velvet-400 max-w-md mx-auto mb-10">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              href="/"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Retour à l&apos;accueil
            </Button>
            <Button variant="outline" href="/contact">
              Nous contacter
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
