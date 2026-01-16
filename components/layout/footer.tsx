import Link from 'next/link'
import { Container } from '@/components/ui/container'

const footerLinks = {
  navigazione: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Risorse', href: '/risorse' },
  ],
  categorie: [
    { name: '0-2 Anni', href: '/categoria/0-2-anni' },
    { name: '2-4 Anni', href: '/categoria/2-4-anni' },
    { name: '4-6 Anni', href: '/categoria/4-6-anni' },
    { name: 'Attività', href: '/categoria/attivita' },
  ],
  legale: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie' },
    { name: 'Contatti', href: '/contatti' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-beige-caldo/30 mt-12">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🌸</div>
                <span className="font-heading text-xl font-semibold text-nero-carbone">
                  Menti in Fiore
                </span>
              </Link>
              <p className="text-sm text-grigio-medio mb-4">
                Guide, attività e supporto per genitori ed educatori nel viaggio della crescita infantile 0-6 anni.
              </p>
            </div>

            {/* Navigazione */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-nero-carbone mb-4">
                Navigazione
              </h3>
              <ul className="space-y-2">
                {footerLinks.navigazione.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-grigio-medio hover:text-verde-salvia transition-ear"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorie */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-nero-carbone mb-4">
                Categorie
              </h3>
              <ul className="space-y-2">
                {footerLinks.categorie.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-grigio-medio hover:text-verde-salvia transition-ear"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legale */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-nero-carbone mb-4">
                Informazioni
              </h3>
              <ul className="space-y-2">
                {footerLinks.legale.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-grigio-medio hover:text-verde-salvia transition-ear"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-grigio-medio/20 pt-8">
            <p className="text-center text-sm text-grigio-medio">
              {new Date().getFullYear()} Menti in Fiore. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
