import React, { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'Aarav', text: 'Got into IIITH CHD after their CLD session clarified the path.' },
  { name: 'Riya', text: 'Their roadmap for CS vs ECE helped me pick confidently.' },
  { name: 'Kabir', text: 'DASA strategy session saved my application season.' },
  { name: 'Meera', text: 'Mentorship felt honest and practical. Huge clarity boost.' },
  { name: 'Ishaan', text: 'Mock interview + resume review was gold.' },
  { name: 'Ananya', text: 'Real stories from Apple/Google inspired me to aim higher.' },
  { name: 'Dev', text: 'Scholarship insights I found nowhere else.' },
  { name: 'Sana', text: 'Great 1:1 session with actionable next steps.' },
]

function Tile({ t, accent }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border ${accent.border} ${accent.bg} p-5 transition hover:-translate-y-0.5`}>
      <div className={`pointer-events-none absolute -inset-24 rounded-[3rem] ${accent.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-60`} />
      <Quote className={`h-5 w-5 ${accent.icon}`} />
      <p className="mt-3 text-sm leading-relaxed">{t.text}</p>
      <div className="mt-3 text-xs opacity-80">— {t.name}</div>
    </div>
  )
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? testimonials : testimonials.slice(0, 4)

  const accents = [
    { border: 'border-white/10', bg: 'bg-white/5 text-gray-100', glow: 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20', icon: 'text-cyan-200' },
    { border: 'border-slate-200', bg: 'bg-white text-slate-900', glow: 'bg-gradient-to-br from-emerald-300/25 to-teal-300/25', icon: 'text-emerald-600' },
    { border: 'border-white/10', bg: 'bg-white/5 text-gray-100', glow: 'bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20', icon: 'text-violet-200' },
    { border: 'border-slate-200', bg: 'bg-white text-slate-900', glow: 'bg-gradient-to-br from-amber-300/25 to-orange-300/25', icon: 'text-amber-600' },
  ]

  return (
    <section className="relative py-20">
      {/* Alternate to a lighter slate backdrop to prevent monotony */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What students say</h2>
          <p className="mt-2 text-slate-600">Snapshots from our community</p>
        </div>

        {/* Bento-like responsive grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, idx) => (
            <Tile key={idx} t={t} accent={accents[idx % accents.length]} />
          ))}

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-900 transition hover:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute -inset-24 rounded-[3rem] bg-gradient-to-br from-slate-200 to-white opacity-0 blur-2xl transition duration-500 group-hover:opacity-60" />
              <div className="text-sm font-medium">Show more…</div>
              <div className="mt-2 text-xs text-slate-600">Explore 7–8 more notes</div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
