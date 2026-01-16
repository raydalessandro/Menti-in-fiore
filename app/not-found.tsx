import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="py-12 min-h-[60vh] flex items-center justify-center">
      <div className="container-ear">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 font-heading text-hero text-nero-carbone">
            404
          </h1>
          <h2 className="mb-4 font-heading text-2xl font-semibold text-nero-carbone">
            Pagina Non Trovata
          </h2>
          <p className="mb-8 text-lg text-grigio-medio">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Button asChild size="lg">
            <Link href="/">Torna alla Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
