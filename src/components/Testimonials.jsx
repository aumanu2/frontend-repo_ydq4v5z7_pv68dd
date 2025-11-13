import React, { useState } from 'react'
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

// Apple-style card treatments
const tones = {
  light: 'bg-white text-slate-900 ring-1 ring-black/5 shadow-md shadow-black/5',
  dark: 'bg-slate-950 text-slate-50 ring-1 ring-white/10 shadow-lg shadow-black/40',
}

function Glow() {
  return (
    <div className="pointer-events-none absolute -inset-24 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(15,23,42,0.08),transparent_60%)]" />
  )
}

function TextCard({ item, variant = 'light' }) {
  const tone = tones[variant]
  return (
    <article
      className={`relative overflow-hidden rounded-3xl ${tone} transition-transform duration-300 will-change-transform hover:-translate-y-0.5`}
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_130%)]">
        <div className="absolute -inset-24 rounded-[3rem] bg-gradient-to-br from-white/40 to-white/0 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
      </div>
      <div className="relative p-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 text-slate-700 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            <Quote size={16} />
          </div>
          <span className="text-xs/6 font-medium opacity-70">{item.name}</span>
        </div>
        <p className="text-sm leading-relaxed tracking-tight">
          {item.text}
        </p>
      </div>
    </article>
  )
}

function VideoCard({ item, variant = 'light' }) {
  const tone = tones[variant]
  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl ${tone} transition-transform duration-300 hover:-translate-y-0.5`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
      </div>
      <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 text-white drop-shadow">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md ring-1 ring-white/20">
          <Play size={14} />
        </span>
        <span className="text-xs/6 font-medium">{item.name}</span>
        <span className="text-xs/6 opacity-80">• Student story</span>
      </figcaption>
    </figure>
  )
}

// Map each index to a bento layout class for responsive sizes
const layoutClasses = [
  // row 1
  'md:col-span-2 md:row-span-2',
  'md:row-span-1',
  'md:row-span-2',
  'md:row-span-1',
  // row 2
  'md:row-span-1',
  'md:col-span-2 md:row-span-2',
  'md:row-span-1',
  'md:row-span-1',
  // row 3
  'md:row-span-1',
  'md:row-span-2',
  'md:row-span-1',
  'md:row-span-1',
  // row 4
  'md:row-span-1',
  'md:row-span-2',
  'md:row-span-1',
  'md:row-span-1',
]

// Utility to wrap card with sizing container for grid row-span via fixed row height
function GridItem({ className = '', children }) {
  return (
    <div className={`group relative ${className}`}>
      <div className="grid auto-rows-[1fr]">
        <div className="[--h:14rem] md:[--h:10rem] lg:[--h:11rem] xl:[--h:12rem]">
          <div className="min-h-[var(--h)]">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? items : items.slice(0, 8)

  return (
    <section className="relative py-24">
      {/* Subtle light backdrop with Apple-like depth */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,#f8fafc,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Loved by JEE learners</h2>
          <p className="mt-2 text-slate-600">A clean, balanced bento of real notes and short clips</p>
        </header>

        {/* Apple-style bento: responsive CSS grid with intentional asymmetry */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[10rem]">
          {visible.map((item, i) => {
            const isDark = [2, 5, 9, 13].includes(i) // make some tiles dark for rhythm
            const variant = isDark ? 'dark' : 'light'
            const sizeClass = layoutClasses[i % layoutClasses.length]

            return (
              <GridItem key={i} className={sizeClass}>
                {item.type === 'video' ? (
                  <VideoCard item={item} variant={variant} />
                ) : (
                  <TextCard item={item} variant={variant} />
                )}
              </GridItem>
            )
          })}

          {!expanded && (
            <div className="md:col-span-2">
              <button
                onClick={() => setExpanded(true)}
                className="relative w-full overflow-hidden rounded-3xl bg-white text-slate-900 ring-1 ring-black/5 shadow-md shadow-black/5 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(2,6,23,0.06),transparent_70%)]" />
                <div className="relative px-6 py-5 text-left">
                  <div className="text-sm font-medium">Show more…</div>
                  <div className="mt-1 text-xs text-slate-600">Reveal all 16 stories</div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
