import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Agenda from './components/Agenda'
import Mentors from './components/Mentors'
import Offerings from './components/Offerings'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <Hero />
      <Stats />
      <Agenda />
      <Mentors />
      <Offerings />
      <Testimonials />
      <footer className="border-t border-white/10 bg-[#0b0d12] py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Elite Mentor Collective · Guidance for JEE & Class 11–12
      </footer>
    </div>
  )
}

export default App
