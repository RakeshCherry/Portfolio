import React, { useEffect } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-5 py-10">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="flex flex-col items-baseline w-full relative mt-40 mb-10 z-10">
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          Dynamic Web Magic with Next.js
        </h2>
        <TextGenerateEffect
        className='text-center text-[40px] md:text-5xl'
        words='Ready to take your digital presence to the Next Level'
        />
        <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4">
            Hi I&apos;m <span className="text-orange-500 font-bold uppercase">Rakesh</span>, a Full Stack Developer based in Bengaluru.
        </p>
        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow/>}
            position='right'
          />
        </a>
      </div>
      <div className='my-10'>
        <img src="/MyProfileDP.jpg" alt="photo" className=' w-full h-auto lg:hidden md:inline-block md:w-full rounded-full'/>
      </div>
    </div>

    </div>
  )
}

export default Hero