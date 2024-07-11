import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBoarders'

const OtherSkills = () => {
  return (
    <div id='OtherSkills'>
        <h2 className='heading-2'>
        My <span className='text-purple'>
        Hobbies
        </span> and {' '}
        <span className='text-purple'>
             Other
        </span>
    </h2>
        <div className='w-full mt-12 grid lg:grid-col-4 gird-cols-1 gap-10'>

            {workExperience.map((card)=>(
               <Button>
                    <div>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-3 md:w-16' />
                    </div>
               </Button>
            ))}
            
        </div>
    </div>
  )
}

export default OtherSkills