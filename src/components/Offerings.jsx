import React from 'react'
import { Users, CalendarClock } from 'lucide-react'

export default function Offerings() {
  return (
    <section id="offerings" className="relative py-20 text-white">
      {/* Neutral dark-to-slate gradient to bridge light Mentors and dark Testimonials */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0b0d12] to-slate-900" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'radial-gradient(60rem 20rem at 10% 10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(60rem 20rem at 90% 20%, rgba(251,191,36,0.12), transparent 60%)'
      }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Offerings</h2>
          <p className="mt-2 text-gray-400">Choose what fits you best.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card A - Group Sessions */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="pointer-events-none absolute -inset-28 rounded-[3rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 blur-3xl transition group-hover:opacity-60" />
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 p-3">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-semibold">Group Sessions</div>
                <p className="mt-2 text-gray-300">Free for handpicked elite coaching centers and schools.</p>
                <div className="mt-4 text-sm text-gray-400">
                  Invite us: <a href="tel:+919999999999" className="text-cyan-300 underline">+91 99999 99999</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card B - 1:1 Counseling */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-300/15 to-orange-500/10 p-6">
            <div className="pointer-events-none absolute -inset-24 rounded-[3rem] bg-gradient-to-br from-amber-400/30 to-orange-500/30 opacity-0 blur-2xl transition group-hover:opacity-70" />
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-amber-400/50 to-orange-500/50 p-3 text-black">
                <CalendarClock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-semibold">1:1 Parent-Student Counseling</div>
                <p className="mt-2 text-gray-100">Single session · 45 minutes · ₹1200</p>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-300 text-black font-semibold px-5 py-3 shadow-lg shadow-amber-500/20 ring-1 ring-black/10 hover:brightness-95 transition"
                >
                  Book on Calendly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
