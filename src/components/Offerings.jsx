import React from 'react'

export default function Offerings() {
  return (
    <section id="offerings" className="bg-[#0b0d12] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Offerings</h2>
          <p className="mt-2 text-gray-400">Choose what fits you best.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent p-6">
            <div className="text-xl font-semibold">Group Sessions</div>
            <p className="mt-2 text-gray-300">Free for handpicked elite coaching centers and schools.</p>
            <div className="mt-4 text-sm text-gray-400">Invite us: <a href="tel:+919999999999" className="text-yellow-300 underline">+91 99999 99999</a></div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-semibold">1:1 Parent-Student Counseling</div>
            <p className="mt-2 text-gray-300">Single session · 45 minutes · ₹1200</p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-yellow-400 text-black font-semibold px-5 py-3 shadow-lg shadow-yellow-500/20 hover:brightness-95 transition"
            >
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
