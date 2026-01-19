import { Metadata } from 'next'
import { Linkedin, Award, Building, Users, Target } from 'lucide-react'
import { team, values, stats } from '@/lib/data'
import { Button, Card3D, GlassCard, Tag, StatCard } from '@/components/ui'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Le Cabinet | Équipe & Valeurs',
  description:
    'Découvrez V7LVET, cabinet d\'expertise comptable nouvelle génération. Notre équipe d\'experts accompagne les entrepreneurs visionnaires vers le succès.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <FadeIn>
              <Tag className="mb-6">Le Cabinet</Tag>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.1}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              L&apos;excellence comptable, réinventée
            </TextReveal>
            <FadeIn delay={0.4}>
              <p className="text-xl text-velvet-400 max-w-2xl">
                V7LVET réunit une équipe d&apos;experts passionnés, unis par une vision :
                faire de l&apos;expertise comptable un véritable levier de croissance.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <Tag className="mb-6">Notre histoire</Tag>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Nés de l&apos;ambition de faire autrement
                </h2>
                <div className="space-y-4 text-velvet-400 leading-relaxed">
                  <p>
                    V7LVET est né d&apos;un constat simple : l&apos;expertise comptable
                    traditionnelle ne répond plus aux attentes des entrepreneurs modernes.
                  </p>
                  <p>
                    En 2019, notre équipe fondatrice a décidé de réinventer l&apos;accompagnement
                    comptable en combinant excellence technique, technologies de pointe
                    et approche résolument humaine.
                  </p>
                  <p>
                    Aujourd&apos;hui, nous accompagnons plus de 500 entreprises qui partagent
                    notre ambition : transformer la gestion financière en avantage compétitif.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card3D className="p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-6">
                    <Building className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-6xl font-display font-bold text-white mb-2">2019</div>
                  <div className="text-velvet-500">Année de création</div>
                </div>
              </Card3D>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-velvet-950">
        <div className="section-container">
          <div className="text-center mb-20">
            <FadeIn>
              <Tag className="mb-6">Nos valeurs</Tag>
            </FadeIn>
            <TextReveal
              as="h2"
              delay={0.1}
              className="text-4xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto"
            >
              Les principes qui guident chacune de nos actions
            </TextReveal>
          </div>

          <StaggerContainer stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Excellence',
                description: 'Nous visons la perfection dans chaque mission.',
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Innovation',
                description: 'Les meilleures technologies au service de votre gestion.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Proximité',
                description: 'Un interlocuteur dédié, disponible et à l\'écoute.',
              },
              {
                icon: <Building className="w-6 h-6" />,
                title: 'Intégrité',
                description: 'Transparence et éthique au cœur de notre pratique.',
              },
            ].map((value, index) => (
              <StaggerItem key={value.title}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-velvet-400">{value.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-32">
        <div className="section-container">
          <div className="text-center mb-20">
            <FadeIn>
              <Tag className="mb-6">L&apos;équipe</Tag>
            </FadeIn>
            <TextReveal
              as="h2"
              delay={0.1}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Les experts à vos côtés
            </TextReveal>
          </div>

          <StaggerContainer stagger={0.15} className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card3D className="overflow-hidden">
                  <div className="aspect-[4/5] bg-velvet-800 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-velvet-700 flex items-center justify-center text-3xl font-display font-bold text-velvet-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm mb-3">{member.role}</p>
                    <p className="text-velvet-400 text-sm mb-4">{member.bio}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-velvet-500 hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </Card3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
