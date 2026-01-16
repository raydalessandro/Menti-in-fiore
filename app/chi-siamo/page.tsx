import { BlobShape } from '@/components/ui/blob-shape'
import { Heart, Sparkles, Users, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Chi Siamo - Menti in Fiore',
  description: 'Ogni bambino è un giardino in fiore. Scopri come coltiviamo insieme intelligenza, creatività e autostima.',
}

export default function ChiSiamoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rosa-pastello-lighter via-viola-sogno-light to-azzurro-cielo-light py-16 md:py-20">
        <BlobShape color="yellow" size="lg" className="absolute -right-20 top-10 opacity-30" />
        <BlobShape color="tosca" size="md" className="absolute -left-16 bottom-10 opacity-40" />

        <div className="container-ear relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 shadow-soft backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-rosa-pastello" />
              <span className="font-accent text-lg text-rosa-pastello">Ogni bambino è un giardino in fiore</span>
              <Sparkles className="h-5 w-5 text-rosa-pastello" />
            </div>

            <h1 className="mb-6 font-heading text-4xl font-bold text-nero-carbone md:text-6xl">
              Chi Siamo
            </h1>

            <p className="text-xl text-grigio-medio md:text-2xl">
              🌈 Coltiviamo insieme intelligenza, creatività e autostima -<br className="hidden md:block" />
              passo dopo passo, età dopo età
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-ear">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-3xl bg-gradient-to-r from-rosa-pastello-lighter to-viola-sogno-light p-8 shadow-card md:p-12">
              <h2 className="mb-6 font-heading text-3xl font-bold text-nero-carbone">
                💝 La Nostra Missione
              </h2>
              <p className="text-lg leading-relaxed text-grigio-medio">
                Menti in Fiore nasce dall'idea che{' '}
                <strong className="text-rosa-pastello">essere genitori è un viaggio fatto di amore, domande e trasformazioni</strong>.
                Accompagniamo mamme, papà ed educatori nel cammino della crescita infantile (0-6 anni), offrendo{' '}
                <strong className="text-viola-sogno">guide pratiche, attività creative e supporto empatico</strong>{' '}
                per nutrire il potenziale unico di ogni bambino.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mb-16">
              <h2 className="mb-10 text-center font-heading text-3xl font-bold text-nero-carbone">
                ✨ I Nostri Valori
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border-2 border-rosa-pastello bg-rosa-pastello-lighter p-6 shadow-soft">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rosa-pastello text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-nero-carbone">
                    Empatia
                  </h3>
                  <p className="text-grigio-medio">
                    Ascoltiamo le sfide quotidiane dei genitori con calore e senza giudizio, offrendo supporto autentico
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-azzurro-cielo bg-azzurro-cielo-light p-6 shadow-soft">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azzurro-cielo text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-nero-carbone">
                    Fondamento Scientifico
                  </h3>
                  <p className="text-grigio-medio">
                    Integriamo neuroscienze, pedagogia (Montessori, Reggio Emilia) e psicologia evolutiva
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-verde-menta bg-verde-menta-light p-6 shadow-soft">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-verde-menta text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-nero-carbone">
                    Praticità
                  </h3>
                  <p className="text-grigio-medio">
                    Attività concrete, consigli applicabili subito nella vita quotidiana con i bambini
                  </p>
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div className="rounded-3xl bg-gradient-to-br from-giallo-sole-light to-verde-menta-light p-8 shadow-card md:p-12">
              <h2 className="mb-6 font-heading text-3xl font-bold text-nero-carbone">
                🌱 Il Nostro Approccio
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-grigio-medio">
                <p>
                  Crediamo in un'educazione che <strong className="text-nero-carbone">rispetti i tempi e le unicità</strong> di ogni bambino.
                  Non esistono ricette magiche, ma esistono <em className="font-accent text-viola-sogno">principi ispiratori</em> e{' '}
                  <em className="font-accent text-rosa-pastello">strumenti pratici</em> che possono trasformare il quotidiano.
                </p>
                <p>
                  Il nostro metodo integra:
                </p>
                <ul className="ml-6 space-y-2">
                  <li className="flex gap-3">
                    <span className="text-rosa-pastello">🌸</span>
                    <span><strong>Montessori:</strong> Autonomia e ambiente preparato</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-viola-sogno">🎨</span>
                    <span><strong>Reggio Emilia:</strong> Linguaggi espressivi e creatività</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-azzurro-cielo">🧠</span>
                    <span><strong>Neuroscienze:</strong> Sviluppo cerebrale e finestre temporali</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-verde-menta">💚</span>
                    <span><strong>Intelligenza Emotiva:</strong> Gestione delle emozioni e relazioni</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-12 text-center">
              <blockquote className="font-accent text-2xl italic text-viola-sogno md:text-3xl">
                "Il bambino è insieme una speranza e una promessa per l'umanità."
              </blockquote>
              <p className="mt-4 text-grigio-medio">— Maria Montessori</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
