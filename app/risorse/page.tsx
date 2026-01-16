export const metadata = {
  title: 'Risorse - Menti in Fiore',
  description: 'Guide scaricabili, printables e strumenti utili per genitori ed educatori',
}

export default function RisorsePage() {
  return (
    <div className="py-12">
      <div className="container-ear">
        <h1 className="mb-6 font-heading text-hero text-nero-carbone">
          Risorse Gratuite
        </h1>
        <p className="mb-12 text-lg text-grigio-medio max-w-3xl">
          Scarica guide, printables e strumenti utili per supportare la crescita dei bambini.
        </p>

        <div className="text-center py-12 bg-beige-caldo/30 rounded-lg">
          <p className="text-grigio-medio mb-4">Le risorse saranno disponibili a breve.</p>
          <p className="text-sm text-grigio-medio">
            Iscriviti alla newsletter per essere informato quando pubblicheremo nuove risorse!
          </p>
        </div>
      </div>
    </div>
  )
}
