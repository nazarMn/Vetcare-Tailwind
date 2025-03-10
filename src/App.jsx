import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import AboutPage from './components/AboutPage/AboutPage'
import TeamPage from './components/TeamPage/TeamPage'
import PricingPlanPage from './components/PricingPlanPage/PricingPlanPage'
import CallToActionPage from './components/CallToActionPage/CallToActionPage'
import FooterPage from './components/FooterPage/FooterPage'
function App() {

  return (
    <div className="w-screen h-full bg-[#FFF8F5] flex flex-col overflow-x-hidden">

      <HomePage />

      <ServicesPage />

      <AboutPage />

      <TeamPage />

      <PricingPlanPage />

      <CallToActionPage />

      <FooterPage />

    </div>
  )
}

export default App
