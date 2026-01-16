import { BlobShape } from '@/components/ui/blob-shape'
import { Download, Palette, BookHeart, CalendarDays, Lightbulb, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Risorse Gratuite - Menti in Fiore',
  description: 'Guide scaricabili, printables e strumenti utili per genitori ed educatori',
}

const risorse = [
  {
    icon: Palette,
    title: 'Attività Creative 0-6 Anni',
    description: '50+ idee di gioco sensoriale, arte e costruzione divise per fascia d\'età',
    color: 'rosa-pastello',
    status: 'coming-soon'
  },
  {
    icon: BookHeart,
    title: 'Guida alle Emozioni',
    description: 'Come riconoscere e gestire le emozioni dei bambini con strategie pratiche',
    color: 'viola-sogno',
    status: 'coming-soon'
  },
  {
    icon: CalendarDays,
    title: 'Routine Visive Stampabili',
    description: 'Cartelloni colorati per aiutare i bambini a gestire le routine quotidiane',
    color: 'azzurro-cielo',
    status: 'coming-soon'
  },
  {
    icon: Lightbulb,
    title: 'Milestone dello Sviluppo',
    description: 'Checklist mensile per monitorare lo sviluppo del bambino 0-6 anni',
    color: 'giallo-sole',
    status: 'coming-soon'
  },
  {
    icon: Music,
    title: 'Canzoncine e Filastrocche',
    description: 'Raccolta di canzoni educative per ogni età e occasione',
    color: 'verde-menta',
    status: 'coming-soon'
  }
]

export default function RisorsePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-giallo-sole-light via-verde-menta-light to-azzurro-cielo-light py-16 md:py-20">
        <BlobShape color="pink" size="lg" className="absolute -right-24 top-10 opacity-30" />
        <BlobShape color="yellow" size="md" className="absolute -left-16 bottom-10 opacity-40" />

        <div className="container-ear relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/80 p-4 shadow-soft backdrop-blur-sm">
              <Download className="h-8 w-8 text-verde-menta" />
            </div>

            <h1 className="mb-6 font-heading text-4xl font-bold text-nero-carbone md:text-6xl">
              🎁 Risorse Gratuite
            </h1>

            <p className="text-xl text-grigio-medio">
              Guide, printables e strumenti pratici per supportare la crescita dei tuoi bambini
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container-ear">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {risorse.map((risorsa, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl border-2 p-6 shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-playful ${
                    risorsa.color === 'rosa-pastello' ? 'border-rosa-pastello bg-rosa-pastello-lighter' :
                    risorsa.color === 'viola-sogno' ? 'border-viola-sogno bg-viola-sogno-light' :
                    risorsa.color === 'azzurro-cielo' ? 'border-azzurro-cielo bg-azzurro-cielo-light' :
                    risorsa.color === 'giallo-sole' ? 'border-giallo-sole bg-giallo-sole-light' :
                    'border-verde-menta bg-verde-menta-light'
                  }`}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-soft">
                    <risorsa.icon className={`h-7 w-7 ${
                      risorsa.color === 'rosa-pastello' ? 'text-rosa-pastello' :
                      risorsa.color === 'viola-sogno' ? 'text-viola-sogno' :
                      risorsa.color === 'azzurro-cielo' ? 'text-azzurro-cielo' :
                      risorsa.color === 'giallo-sole' ? 'text-giallo-sole' :
                      'text-verde-menta'
                    }`} />
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-semibold text-nero-carbone">
                    {risorsa.title}
                  </h3>

                  <p className="mb-4 text-grigio-medio">
                    {risorsa.description}
                  </p>

                  {risorsa.status === 'coming-soon' && (
                    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-grigio-medio shadow-soft">
                      🔜 Disponibile a breve
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="rounded-3xl bg-gradient-to-br from-rosa-pastello-lighter to-viola-sogno-light p-8 text-center shadow-card md:p-12">
              <h2 className="mb-4 font-heading text-3xl font-bold text-nero-carbone">
                💌 Ricevi le Risorse in Anteprima
              </h2>
              <p className="mb-6 text-lg text-grigio-medio">
                Iscriviti alla newsletter per essere il primo a ricevere le nuove risorse gratuite appena pubblicate!
              </p>
              <Button asChild size="lg" className="bg-gradient-playful">
                <Link href="/#newsletter">
                  Iscriviti alla Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
