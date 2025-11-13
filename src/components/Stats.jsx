import React from 'react'
import { Users, GraduationCap, Presentation, Building2 } from 'lucide-react'

const items = [
  { value: '3', label: 'Veteran mentors', Icon: Users, accent: 'from-cyan-400/60 to-blue-500/60' },
  { value: '2k+', label: 'Students guided', Icon: GraduationCap, accent: 'from-emerald-400/60 to-teal-500/60' },
  { value: '150+', label: 'Master sessions', Icon: Presentation, accent: 'from-violet-400/60 to-fuchsia-500/60' },
  { value: '30+', label: 'Elite institutes', Icon: Building2, accent: 'from-amber-400/60 to-orange-500/60' },
]

function StatCard({ value, label, Icon, accent }) {
  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-40 blur-xl transition group-hover:opacity-70`} />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/5" />
        <div className="flex items-start gap-4">
          <div className={`shrink-0 rounded-xl bg-gradient-to-br ${accent} p-3 border border-white/10`}> 
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-3xl font-semibold tracking-tight">{value}</div>
            <div className="mt-1 text-sm text-gray-400">{label}</div>
          </div>
        </div>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mt-3 text-[11px] text-gray-500">Growing through referrals from toppers and elite schools</div>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 text-white">
      {/* Alternating section tone: cooler bluish gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1118] via-[#0b0d12] to-[#0a0c11]" />
      {/* Subtle grid/lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Results at a glance</h2>
            <p className="mt-2 text-gray-400">Numbers that reflect focused mentoring</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it) => (
            <StatCard key={it.label} value={it.value} label={it.label} Icon={it.Icon} accent={it.accent} />
          ))}
        </div>
      </div>
    </section>
  )
}
