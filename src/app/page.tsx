import { FeaturesSectionDemo } from '@/components/global/Features'
import Footer from '@/components/global/Footer'
import { WobbleCardDemo } from '@/components/global/Landing'
import { Navbar } from '@/components/global/Navbar'
import { AnimatedModalDemo } from '@/components/global/ServiceDisplay'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

import { testimonials } from '@/lib/data'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen w-full bg-black text-white dark:bg-black overflow-y-scroll'>
      <div className='z-50'>
      <Navbar />
      </div>
      <main className='pt-32 mt-24'>
        <WobbleCardDemo />
      </main>
      <div className='z-50'>
        <AnimatedModalDemo/>
      </div>
      <div className='w-full h-full mt-[-120px]'>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
      </div>
      <div className='w-full h-full mt-10'>
        <FeaturesSectionDemo />
      </div>
      <div className='h-full w-full mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Home

