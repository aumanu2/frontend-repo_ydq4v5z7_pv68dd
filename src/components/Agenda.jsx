import React from 'react'
import { Compass, Globe2, GitBranch, Sparkles } from 'lucide-react'

const topics = [
  {
    title: 'Less-known routes to IIIT Hyderabad',
    icon: Compass,
    tone: 'from-sky-400/10 to-blue-500/10',
    points: [
      'CLD / CHD exam deep-dive',
      'Profile, portfolio and cutoff insights',
      'Avoiding common mistakes',
    ],
  },
  {
    title: 'DASA Quota & ASCA Scholarships',
    icon: Globe2,
    tone: 'from-emerald-400/10 to-teal-500/10',
    points: [
      'Latest rules & eligibility',
      'Application strategy',
      'Timelines and documentation',
    ],
  },
  {
    title: 'Choosing your branch wisely',
    icon: GitBranch,
    tone: 'from-violet-400/10 to-fuchsia-500/10',
    points: [
      'Is CS & AI right for you?',
      'Understanding ECE, CE, DS, AIML',
      'Future scope vs interest',
    ],
  },
  {
    title: 'Life at Big Tech as a teen',
    icon: Sparkles,
    tone: 'from-amber-400/10 to-orange-500/10',
    points: [
      'Working at Google London & Apple',
      'Mindset, projects, internships',
      'From campus to global impact',
    ],
  },
]

function AgendaCard({ title, icon: Icon, tone, points }) {
  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tone} opacity-40 blur-xl transition group-hover:opacity-70`} />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-white/5" />
        <div className="flex items-start gap-4">
          <div className={`shrink-0 rounded-xl bg-gradient-to-br ${tone} p-3 border border-white/10`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-medium">{title}</div>
            <ul className="mt-3 space-y-2 text-gray-300 text-sm list-disc list-inside">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-20 text-white">
      {/* Alternating section tone: warmer purple overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0c0f15] to-[#0b0d12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Master Session Agenda</h2>
            <p className="mt-2 text-gray-400">Curated topics that unlock practical pathways</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <AgendaCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
