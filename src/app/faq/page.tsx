import { Metadata } from 'next'
import { faqs } from '@/lib/data'
import { Accordion, Tag, Button } from '@/components/ui'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ | Questions Fréquentes',
  description:
    'Retrouvez les réponses à toutes vos questions sur nos services d\'expertise comptable, nos tarifs, notre accompagnement et nos outils.',
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <FadeIn>
              <Tag className="mb-6">FAQ</Tag>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.1}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Questions fréquentes
            </TextReveal>
            <FadeIn delay={0.4}>
              <p className="text-xl text-velvet-400 max-w-2xl">
                Retrouvez les réponses aux questions les plus courantes sur nos services,
                notre fonctionnement et notre accompagnement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer stagger={0.15}>
              {faqs.map((category) => (
                <StaggerItem key={category.category} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-display font-bold text-white mb-8">
                    {category.category}
                  </h2>
                  <Accordion items={category.questions} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center bg-velvet-900/50 rounded-3xl p-12 border border-velvet-800/50">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Vous n&apos;avez pas trouvé votre réponse ?
              </h2>
              <p className="text-velvet-400 mb-8">
                Notre équipe est là pour répondre à toutes vos questions.
                N&apos;hésitez pas à nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Nous contacter
                </Button>
                <Button variant="outline" href="tel:+33123456789">
                  +33 1 23 45 67 89
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
