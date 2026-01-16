export const metadata = {
  title: 'Chi Siamo - Menti in Fiore',
  description: 'Scopri la missione, i valori e il team di Menti in Fiore',
}

export default function ChiSiamoPage() {
  return (
    <div className="py-12">
      <div className="container-ear">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-heading text-hero text-nero-carbone">
            Chi Siamo
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-grigio-medio mb-8">
              Menti in Fiore è un progetto dedicato a genitori ed educatori che desiderano accompagnare
              i bambini dai 0 ai 6 anni in un percorso di crescita consapevole e armonioso.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-nero-carbone mb-4 mt-8">
              La Nostra Missione
            </h2>
            <p className="text-grigio-medio mb-6">
              Accompagniamo genitori e educatori nel viaggio della crescita infantile, offrendo conoscenza
              accessibile, strumenti pratici e supporto empatico per nutrire il potenziale unico di ogni bambino.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-nero-carbone mb-4 mt-8">
              I Nostri Valori
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="text-verde-salvia text-xl">✓</span>
                <div>
                  <strong className="text-nero-carbone">Autenticità:</strong>
                  <span className="text-grigio-medio"> Contenuti basati su evidenze scientifiche e trasparenza assoluta</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-salvia text-xl">✓</span>
                <div>
                  <strong className="text-nero-carbone">Equilibrio:</strong>
                  <span className="text-grigio-medio"> Bilanciamento tra teoria e pratica, rispetto di tutti gli approcci educativi</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-verde-salvia text-xl">✓</span>
                <div>
                  <strong className="text-nero-carbone">Impatto:</strong>
                  <span className="text-grigio-medio"> Consigli immediatamente applicabili per una trasformazione positiva reale</span>
                </div>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-nero-carbone mb-4 mt-8">
              Il Nostro Approccio
            </h2>
            <p className="text-grigio-medio mb-6">
              Crediamo in un'educazione che rispetti i tempi e le unicità di ogni bambino. Il nostro metodo
              si basa sul Framework EAR (Essenza-Armonia-Risonanza), che integra le migliori pratiche
              pedagogiche con un approccio empatico e non giudicante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
