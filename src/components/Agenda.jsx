import React from 'react'

const topics = [
  {
    title: "Less-known routes to IIIT Hyderabad",
    points: [
      "CLD / CHD exam deep-dive",
      "Profile, portfolio and cutoff insights",
      "Avoiding common mistakes"
    ]
  },
  {
    title: "DASA Quota & ASCA Scholarships",
    points: [
      "Latest rules & eligibility",
      "Application strategy",
      "Timelines and documentation"
    ]
  },
  {
    title: "Choosing your branch wisely",
    points: [
      "Is CS & AI right for you?",
      "Understanding ECE, CE, DS, AIML",
      "Future scope vs interest"
    ]
  },
  {
    title: "Life at Big Tech as a teen",
    points: [
      "Working at Google London & Apple",
      "Mindset, projects, internships",
      "From campus to global impact"
    ]
  }
]

export default function Agenda() {
  return (
    <section id="agenda" className="bg-[#0b0d12] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Master Session Agenda</h2>
          <p className="mt-2 text-gray-400">Curated sessions that open real, practical paths for JEE and beyond.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <div key={t.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <div className="text-xl font-medium">{t.title}</div>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm list-disc list-inside">
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
