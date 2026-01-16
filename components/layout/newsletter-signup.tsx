'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

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
    <div className="bg-verde-salvia/10 py-12">
      <div className="container-ear">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold">
            Ricevi Consigli Settimanali
          </h2>
          <p className="mb-6 text-grigio-medio">
            Iscriviti alla newsletter per ricevere guide, attività e risorse direttamente nella tua casella
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              required
              disabled={status === 'loading'}
              className="flex-1 rounded-md border border-grigio-medio/30 px-4 py-2 focus:border-verde-salvia focus:outline-none focus:ring-2 focus:ring-verde-salvia/50 disabled:opacity-50"
            />
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Iscrizione...' : 'Iscriviti'}
            </Button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm text-verde-salvia">
              Grazie per esserti iscritto! Controlla la tua email.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600">
              Qualcosa è andato storto. Riprova più tardi.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
