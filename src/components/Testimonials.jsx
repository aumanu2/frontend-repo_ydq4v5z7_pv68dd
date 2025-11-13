import React, { useState } from 'react'

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

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? testimonials : testimonials.slice(0, 4)

  return (
    <section className="bg-[#0b0d12] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">What students say</h2>
          <p className="mt-2 text-gray-400">Snapshots from our community</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-gray-300">{t.text}</div>
              <div className="mt-3 text-xs text-gray-400">— {t.name}</div>
            </div>
          ))}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-left hover:bg-white/10 transition"
            >
              <div className="text-sm text-gray-300">Show more…</div>
              <div className="mt-2 text-xs text-gray-500">Explore 7–8 more notes</div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
