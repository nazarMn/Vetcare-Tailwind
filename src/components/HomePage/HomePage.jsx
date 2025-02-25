import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import HeroBanner from './HeroBanner/HeroBanner'

export default function () {
  return (
    <div className="w-screen h-screen  flex-col ">

      <MenuBar />

      <HeroBanner />

    </div>
  )
}
