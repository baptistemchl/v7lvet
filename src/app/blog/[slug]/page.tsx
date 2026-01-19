import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Badge, Tag, Button, GlassCard } from '@/components/ui'
import { FadeIn, TextReveal } from '@/components/animations'
import { CTASection } from '@/components/sections'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 section-container">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-velvet-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Link>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <Badge variant="accent" className="mb-6">
                {post.category}
              </Badge>
            </FadeIn>

            <TextReveal
              as="h1"
              delay={0.2}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8"
            >
              {post.title}
            </TextReveal>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 text-velvet-400">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} de lecture
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <FadeIn>
              <article className="prose prose-invert prose-lg max-w-none">
                {/* Featured Image Placeholder */}
                <div className="aspect-[16/9] rounded-2xl bg-velvet-800 mb-12 not-prose" />

                {/* Article Content - Would be populated by CMS */}
                <p className="lead text-xl text-velvet-300 mb-8">
                  {post.excerpt}
                </p>

                <h2>Introduction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris.
                </p>

                <h2>Les points clés à retenir</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <blockquote>
                  &ldquo;L&apos;expertise comptable moderne doit être un accélérateur de
                  croissance, pas une contrainte administrative.&rdquo;
                </blockquote>

                <h2>Conclusion</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </article>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.2}>
              <aside className="space-y-8">
                {/* Share */}
                <GlassCard>
                  <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Partager
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="p-3 rounded-full bg-velvet-800 text-velvet-400 hover:bg-accent hover:text-surface transition-all"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-velvet-800 text-velvet-400 hover:bg-accent hover:text-surface transition-all"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </GlassCard>

                {/* Author */}
                <GlassCard>
                  <h3 className="text-lg font-display font-semibold text-white mb-4">
                    À propos de l&apos;auteur
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-velvet-700 flex items-center justify-center text-white font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-white">{post.author}</div>
                      <div className="text-sm text-velvet-500">Expert-Comptable</div>
                    </div>
                  </div>
                </GlassCard>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <GlassCard>
                    <h3 className="text-lg font-display font-semibold text-white mb-4">
                      Articles similaires
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h4 className="text-velvet-200 group-hover:text-accent transition-colors line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h4>
                          <span className="text-sm text-velvet-500">
                            {relatedPost.readTime}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </GlassCard>
                )}
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
