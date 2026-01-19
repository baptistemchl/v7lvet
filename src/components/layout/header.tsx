'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, siteConfig } from '@/lib/data'
import { Button } from '@/components/ui'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500 ease-out-expo'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            isScrolled
              ? 'bg-surface/80 backdrop-blur-xl border-b border-velvet-800/50'
              : 'bg-transparent'
          )}
        />

        <nav className="relative section-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link href="/" className="relative z-10 flex items-center gap-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <span className="text-surface font-bold text-lg">V7</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-accent blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-velvet-500">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    pathname === item.href
                      ? 'text-white bg-velvet-800/50'
                      : 'text-velvet-400 hover:text-white hover:bg-velvet-800/30'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Button variant="primary" size="sm" icon={<ArrowUpRight className="w-4 h-4" />}>
                  Prendre rendez-vous
                </Button>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-50 p-2 -mr-2"
                aria-label="Menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 4 : 0 }}
                    className="block w-5 h-0.5 bg-white origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="block w-5 h-0.5 bg-white"
                  />
                  <motion.span
                    animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -4 : 0 }}
                    className="block w-5 h-0.5 bg-white origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-surface/95 backdrop-blur-xl" />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-6"
            >
              <div className="space-y-2">
                {navigation.main.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block text-4xl font-display font-bold py-3',
                        pathname === item.href ? 'text-accent' : 'text-velvet-300 hover:text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-12"
              >
                <Button variant="primary" size="lg" className="w-full" icon={<ArrowUpRight className="w-5 h-5" />}>
                  Prendre rendez-vous
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
