import React from 'react'
import Navebar from '@/components/main/Navbar'
import Hero from '@/components/landing/Hero'
import LogoTicker from '@/components/landing/LogoTicker'

function page() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <LogoTicker/>
    </div>
  )
}

export default page
