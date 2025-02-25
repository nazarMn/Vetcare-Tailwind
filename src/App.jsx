import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import ServicesPage from './components/ServicesPage/ServicesPage'
function App() {

  return (
    <div className="w-screen h-full bg-[#FFF8F5] flex flex-col overflow-x-hidden">

      <HomePage />

      <ServicesPage />

    </div>
  )
}

export default App
