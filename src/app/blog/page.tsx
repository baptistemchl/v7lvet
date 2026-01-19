import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Card3D, Badge, Tag, Button } from '@/components/ui'
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Blog | Actualités & Conseils Expert-Comptable',
  description:
    'Découvrez nos articles sur la comptabilité, la fiscalité, la création d\'entreprise et les dernières actualités du monde de l\'entrepreneuriat.',
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <FadeIn>
              <Tag className="mb-6">Blog</Tag>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.1}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Insights & Actualités
            </TextReveal>
            <FadeIn delay={0.4}>
              <p className="text-xl text-velvet-400 max-w-2xl">
                Conseils d&apos;experts, actualités fiscales et stratégies pour
                développer votre entreprise sereinement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="section-container">
            <FadeIn>
              <h2 className="text-sm font-semibold text-velvet-500 uppercase tracking-wider mb-8">
                À la une
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <Card3D className="h-full overflow-hidden">
                      <div className="aspect-[16/9] bg-velvet-800 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-velvet-950 to-transparent" />
                        <Badge
                          variant="accent"
                          size="sm"
                          className="absolute top-4 left-4"
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-velvet-400 mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-velvet-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-velvet-500 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                    </Card3D>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-velvet-950">
        <div className="section-container">
          <FadeIn>
            <h2 className="text-sm font-semibold text-velvet-500 uppercase tracking-wider mb-8">
              Tous les articles
            </h2>
          </FadeIn>

          <StaggerContainer stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full p-6 rounded-2xl bg-velvet-900/50 border border-velvet-800/50 hover:border-velvet-700 transition-all duration-300">
                    <Badge variant="outline" size="sm" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-velvet-400 text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-velvet-500">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Restez informé
              </h2>
              <p className="text-velvet-400 mb-8">
                Recevez nos conseils et actualités directement dans votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 rounded-full bg-velvet-900/50 border border-velvet-800 text-velvet-100 placeholder:text-velvet-600 focus:outline-none focus:border-accent/50"
                />
                <Button
                  type="submit"
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  S&apos;inscrire
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
