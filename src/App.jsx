import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import AboutPage from './components/AboutPage/AboutPage'
function App() {

  return (
    <div className="w-screen h-full bg-[#FFF8F5] flex flex-col overflow-x-hidden">

      <HomePage />

      <ServicesPage />

      <AboutPage />

    </div>
  )
}

export default App
