export const metadata = {
  title: 'Contatti - Menti in Fiore',
  description: 'Contattaci per informazioni, collaborazioni o supporto',
}

export default function ContattiPage() {
  return (
    <div className="py-12">
      <div className="container-ear">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 font-heading text-hero text-nero-carbone">
            Contatti
          </h1>
          <p className="mb-12 text-lg text-grigio-medio">
            Hai domande, suggerimenti o vuoi collaborare con noi? Saremo felici di sentirti!
          </p>

          <div className="bg-beige-caldo/30 rounded-lg p-8">
            <p className="text-grigio-medio mb-4">
              Il modulo di contatto sarà disponibile a breve.
            </p>
            <p className="text-sm text-grigio-medio">
              Nel frattempo, puoi seguirci sui social media o iscriverti alla nostra newsletter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
