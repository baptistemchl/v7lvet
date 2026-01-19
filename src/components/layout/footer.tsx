'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig, navigation } from '@/lib/data'
import { FadeIn } from '@/components/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-velvet-950 border-t border-velvet-800/50">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative section-container">
        {/* Top Section - CTA */}
        <div className="py-20 lg:py-32 border-b border-velvet-800/50">
          <FadeIn>
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Prêt à transformer{' '}
                <span className="text-gradient-accent">votre gestion</span> ?
              </h2>
              <p className="text-xl text-velvet-400 mb-10 max-w-2xl">
                Discutons de vos ambitions et construisons ensemble une stratégie
                financière à la hauteur de vos objectifs.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-surface font-medium rounded-full hover:bg-accent-light transition-colors"
              >
                <span>Demander un rendez-vous gratuit</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </FadeIn>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <FadeIn delay={0.1}>
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <span className="text-surface font-bold text-lg">V7</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display font-bold text-white">
                    {siteConfig.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-velvet-500">
                    {siteConfig.tagline}
                  </span>
                </div>
              </Link>
              <p className="text-velvet-400 text-sm leading-relaxed mb-6">
                Cabinet d&apos;expertise comptable nouvelle génération.
                L&apos;excellence au service de votre réussite.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-velvet-800/50 text-velvet-400 hover:bg-accent hover:text-surface transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-velvet-800/50 text-velvet-400 hover:bg-accent hover:text-surface transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Navigation */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-velvet-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-velvet-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-velvet-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-velvet-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-velvet-400">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{siteConfig.contact.address}</span>
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-velvet-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-velvet-500">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-velvet-500 hover:text-velvet-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
