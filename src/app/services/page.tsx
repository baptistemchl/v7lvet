import { Metadata } from 'next'
import { BarChart3, Scale, Shield, Rocket, Check, ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/data'
import { Button, Card3D, Tag } from '@/components/ui'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services | Expertise Comptable, Conseil Fiscal, Audit',
  description:
    'Découvrez nos services d\'expertise comptable haut de gamme : gestion comptable, conseil fiscal, audit, accompagnement stratégique. Solutions sur-mesure pour entrepreneurs.',
}

const iconMap: Record<string, React.ReactNode> = {
  chart: <BarChart3 className="w-8 h-8" />,
  scale: <Scale className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  rocket: <Rocket className="w-8 h-8" />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <FadeIn>
              <Tag className="mb-6">Nos services</Tag>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.1}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Une expertise complète à votre service
            </TextReveal>
            <FadeIn delay={0.4}>
              <p className="text-xl text-velvet-400 max-w-2xl">
                De la comptabilité quotidienne à la stratégie d&apos;entreprise,
                nous vous accompagnons avec excellence à chaque étape.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient} text-white`}
                      >
                        {iconMap[service.icon]}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-lg text-velvet-400 mb-8 leading-relaxed">
                        {service.longDescription}
                      </p>

                      <ul className="space-y-4 mb-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                              <Check className="w-3.5 h-3.5 text-accent" />
                            </div>
                            <span className="text-velvet-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="primary"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        Demander un devis
                      </Button>
                    </div>
                  </FadeIn>

                  {/* Visual */}
                  <FadeIn
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    delay={0.2}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <Card3D className="aspect-square p-12 flex items-center justify-center">
                        <div
                          className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white opacity-80`}
                        >
                          {iconMap[service.icon]}
                        </div>
                      </Card3D>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-velvet-950">
        <div className="section-container">
          <div className="text-center mb-20">
            <FadeIn>
              <Tag className="mb-6">Notre processus</Tag>
            </FadeIn>
            <TextReveal
              as="h2"
              delay={0.1}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Comment nous travaillons
            </TextReveal>
          </div>

          <StaggerContainer stagger={0.15} className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Découverte',
                description: 'Analyse approfondie de votre situation et de vos objectifs.',
              },
              {
                step: '02',
                title: 'Proposition',
                description: 'Solution sur-mesure adaptée à vos besoins spécifiques.',
              },
              {
                step: '03',
                title: 'Mise en place',
                description: 'Déploiement structuré avec formation de vos équipes.',
              },
              {
                step: '04',
                title: 'Suivi',
                description: 'Accompagnement continu et optimisation permanente.',
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-velvet-800 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-velvet-400">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
