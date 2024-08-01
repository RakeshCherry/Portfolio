'use client'
import dynamic from 'next/dynamic';
import { Boxes, BoxesCore } from '@/components/ui/Background-boxs';
import { TextGenerateEffectLinkedIn } from '@/components/ui/TextGenerateEffectLinkedIn';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';

const LinkedIn = () => {
  const [isTextEffectComplete, setIsTextEffectComplete] = useState(false);

  const handleTextEffectComplete = () => {
    setIsTextEffectComplete(true);
  };

  return (
    <>
    <div className='flex flex-col items-center'>
      <TextGenerateEffectLinkedIn
        className='lg:max-w-[70vw] font-Stylish text-center md:tracking-wider custom-sm:text-[1rem] md:text-lg lg:text-2xl mb-4 relative z-20'
        words="Thank you for stopping by my LinkedIn profile! I&apos;m currently taking a brief hiatus from LinkedIn but will be back shortly. In the meantime, I&apos;d love to hear from you via email."
        onComplete={handleTextEffectComplete}
      />
      {isTextEffectComplete && (
        <p className='lg:max-w-[70vw] font-Dancing_Script text-center md:tracking-wider custom-sm:text-[1rem] md:text-lg lg:text-2xl mb-4 dark:text-white relative z-20'>
          Have a <span className='text-yellow-500 text-[1rem] uppercase'>fantastic day</span>, filled with joy and inspiration!
        </p>
      )}
      </div>
      </>
  );
};

export default dynamic(() => Promise.resolve(LinkedIn), { ssr: false });
