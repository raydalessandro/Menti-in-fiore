'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BlobShape } from '@/components/ui/blob-shape'
import { Mail, Sparkles } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Implement newsletter signup logic
    // For now, just simulate a success
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-viola-sogno-light via-rosa-pastello-lighter to-giallo-sole-light py-16">
      {/* Blob decorativi */}
      <BlobShape color="yellow" size="lg" className="absolute -left-24 top-10 opacity-30" />
      <BlobShape color="pink" size="md" className="absolute -right-16 bottom-10 opacity-40 animate-float-slow" />

      <div className="container-ear relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Icon decorativo */}
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/80 p-4 shadow-soft backdrop-blur-sm">
            <Mail className="h-8 w-8 text-rosa-pastello" />
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-nero-carbone md:text-4xl">
            💌 Ricevi Consigli Settimanali
          </h2>

          <p className="mb-8 text-lg text-grigio-medio">
            Iscriviti alla newsletter per ricevere guide, attività e risorse{' '}
            <span className="font-semibold text-viola-sogno">direttamente nella tua casella</span>
          </p>

          <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="la-tua-email@esempio.com"
              required
              disabled={status === 'loading'}
              className="flex-1 rounded-xl border-2 border-white bg-white/80 px-6 py-3 text-nero-carbone placeholder:text-grigio-medio/60 backdrop-blur-sm transition-all focus:border-rosa-pastello focus:outline-none focus:ring-2 focus:ring-rosa-pastello/30 disabled:opacity-50"
            />
            <Button type="submit" size="lg" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>Iscrizione...</>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Iscriviti Gratis
                </>
              )}
            </Button>
          </form>

          {status === 'success' && (
            <div className="rounded-xl bg-verde-menta-light p-4 text-verde-menta-dark shadow-soft">
              <p className="font-semibold">✨ Grazie per esserti iscritto!</p>
              <p className="text-sm">Controlla la tua email per confermare l'iscrizione</p>
            </div>
          )}

          {status === 'error' && (
            <div className="rounded-xl bg-red-50 p-4 text-red-600 shadow-soft">
              <p className="font-semibold">😔 Qualcosa è andato storto</p>
              <p className="text-sm">Riprova più tardi o contattaci per assistenza</p>
            </div>
          )}

          <p className="mt-4 text-xs text-grigio-medio">
            🔒 I tuoi dati sono al sicuro. Niente spam, solo contenuti di valore.
          </p>
        </div>
      </div>
    </section>
  )
}
