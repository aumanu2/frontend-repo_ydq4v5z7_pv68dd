import React from 'react'

const Stat = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-sm text-gray-400">{label}</div>
  </div>
)

export default function Stats() {
  return (
    <section className="bg-[#0b0d12] text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="3" label="Veteran mentors" />
          <Stat value="2k+" label="Students guided" />
          <Stat value="150+" label="Master sessions" />
          <Stat value="30+" label="Elite institutes" />
        </div>
      </div>
    </section>
  )
}
