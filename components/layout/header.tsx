'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Risorse', href: '/risorse' },
  { name: 'Contatti', href: '/contatti' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl">🌸</div>
            <span className="font-heading text-xl font-semibold text-nero-carbone">
              Menti in Fiore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-nero-carbone hover:text-verde-salvia transition-ear"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-nero-carbone hover:bg-beige-caldo transition-ear"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Apri menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-nero-carbone hover:text-verde-salvia transition-ear"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
