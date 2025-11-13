import React from 'react'
import { Quote, Play } from 'lucide-react'

// 16 items total: 12 text + 4 video
const items = [
  { type: 'text', name: 'Aarav', text: 'Switched from confusion to a clear 90-day plan. My Physics jumped two grades.' },
  { type: 'text', name: 'Riya', text: 'Loved the mentor clarity session — realistic targets + weekly check-ins kept me honest.' },
  { type: 'video', name: 'Kabir', src: 'https://cdn.coverr.co/videos/coverr-student-smiling-4582/1080p.mp4', poster: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop' },
  { type: 'text', name: 'Meera', text: 'Mock interviews felt like the real deal. Learned how to think out loud under pressure.' },
  { type: 'text', name: 'Ishaan', text: 'Rank improved after focusing on high-yield chapters they shortlisted for me.' },
  { type: 'video', name: 'Ananya', src: 'https://cdn.coverr.co/videos/coverr-smiling-student-typing-1555/1080p.mp4', poster: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop' },
  { type: 'text', name: 'Dev', text: 'DASA strategy saved time and money — exact documents and deadlines in one sheet.' },
  { type: 'text', name: 'Sana', text: '1:1 call gave me a calm, practical roadmap. No fluff.' },
  { type: 'text', name: 'Arjun', text: 'Their weekly review ritual kept me on track. Loved the simple scorecard.' },
  { type: 'video', name: 'Neha', src: 'https://cdn.coverr.co/videos/coverr-happy-student-with-laptop-1778/1080p.mp4', poster: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop' },
  { type: 'text', name: 'Karan', text: 'Got a scholarship lead I would’ve totally missed. Templates helped a ton.' },
  { type: 'text', name: 'Zoya', text: 'Clean separation of study + revision blocks changed everything for me.' },
  { type: 'text', name: 'Vikram', text: 'Chemistry finally clicked with their error log method. Saw patterns instantly.' },
  { type: 'video', name: 'Ayushi', src: 'https://cdn.coverr.co/videos/coverr-young-woman-studying-4322/1080p.mp4', poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop' },
  { type: 'text', name: 'Pranav', text: 'Their sectional tests are tuned to JEE style. Felt well-calibrated before the exam.' },
  { type: 'text', name: 'Mahika', text: 'Best part: honest feedback without sugarcoating. I trusted the process.' },
]

const accents = [
  { border: 'border-slate-200', bg: 'bg-white text-slate-900', icon: 'text-slate-500', glow: 'from-slate-200 to-white' },
  { border: 'border-white/10', bg: 'bg-slate-900/80 text-slate-100', icon: 'text-cyan-200', glow: 'from-cyan-400/20 to-blue-500/20' },
  { border: 'border-slate-200', bg: 'bg-white text-slate-900', icon: 'text-emerald-600', glow: 'from-emerald-300/25 to-teal-300/25' },
  { border: 'border-white/10', bg: 'bg-slate-900/80 text-slate-100', icon: 'text-violet-200', glow: 'from-violet-400/20 to-fuchsia-500/20' },
]

function TextTile({ item, accent }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border ${accent.border} ${accent.bg} p-5 transition duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5`}>
      <div className={`pointer-events-none absolute -inset-24 rounded-[3rem] bg-gradient-to-br ${accent.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-60`} />
      <Quote aria-hidden className={`h-5 w-5 ${accent.icon}`} />
      <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
      <div className="mt-3 text-xs opacity-80">— {item.name}</div>
    </article>
  )
}

function VideoTile({ item }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/10" />
      <video
        className="h-full w-full object-cover"
        src={item.src}
        poster={item.poster}
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
      />
      {/* Overlay content */}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 text-xs text-white drop-shadow">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 backdrop-blur">
          <Play size={14} />
        </div>
        <span className="font-medium">{item.name}</span>
        <span className="opacity-80">• Student story</span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  // Masonry-like bento grid using fixed spans for rhythm
  // On large screens: 4 columns. We map each index to a span recipe.
  const spanMap = [
    'lg:col-span-2', // 0 wide text
    '', // 1 normal
    'lg:row-span-2', // 2 tall video
    '', // 3 normal
    '', // 4 normal
    'lg:col-span-2', // 5 wide video
    '', // 6 normal
    '', // 7 normal
    'lg:col-span-2', // 8 wide text
    '', // 9 video normal
    '', // 10 normal
    '', // 11 normal
    'lg:row-span-2', // 12 tall text
    '', // 13 video normal
    '', // 14 normal
    '', // 15 normal
  ]

  return (
    <section className="relative py-20">
      {/* Light slate backdrop with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What students say</h2>
          <p className="mt-2 text-slate-600">16 real snapshots — 12 text notes and 4 short video clips</p>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const accent = accents[idx % accents.length]
            const span = spanMap[idx] || ''
            return (
              <div key={idx} className={`${span} min-h-[180px]`}> 
                {item.type === 'video' ? (
                  <VideoTile item={item} />
                ) : (
                  <TextTile item={item} accent={accent} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
