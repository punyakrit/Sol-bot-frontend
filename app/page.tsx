import React from 'react'
import Navebar from '@/components/main/Navbar'
import Hero from '@/components/landing/Hero'
import LogoTicker from '@/components/landing/LogoTicker'
import Introduction from '@/components/landing/Introduction'

function page() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <LogoTicker/>
      <Introduction/>
    </div>
  )
}

export default page
