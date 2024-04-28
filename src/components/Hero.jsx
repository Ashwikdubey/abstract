import { ArrowBigRight, ArrowRight, MoveRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#DADBF1] text-center'>
      <div className='py-32'>
      <h1 className='text-black lg:text-7xl font-medium md:text-6xl text-4xl'>How can we help?</h1>
      <div className='flex items-center justify-center mt-10'>
      <input type="text" placeholder='Search' className='border lg:w-[679px] sm:w-[420px]  border-black rounded-sm p-4'/>
       <ArrowRight className='-translate-x-9' strokeWidth={2}/>
      </div>
      </div>
    </div>
  )
}

export default Hero
