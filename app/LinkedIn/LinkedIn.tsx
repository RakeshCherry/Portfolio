import { TextGenerateEffectLinkedIn } from '@/components/ui/TextGenerateEffectLinkedIn'
import React from 'react'

const LinkedIn = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
    <TextGenerateEffectLinkedIn
                  className='lg:max-w-[70vw] font-Dancing_Script text-center md:tracking-wider custom-sm:text-[1rem] md:text-lg lg:text-2xl mb-4'
                  words='Thank you for stopping by my LinkedIn profile! I&apos;m currently taking a brief hiatus from LinkedIn but will be back shortly. In the meantime, I&apos;d love to hear from you via email.'
            />
    <p className='lg:max-w-[70vw] font-Dancing_Script text-center md:tracking-wider custom-sm:text-[1rem] md:text-lg lg:text-2xl mb-4 dark:text-white'>
        Have a fantastic day, filled with joy and inspiration!</p>
    </div>
    </>
  )
}

export default LinkedIn