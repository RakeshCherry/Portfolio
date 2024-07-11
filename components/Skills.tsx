'use client'

import React from 'react'
import {motion, useInView} from 'framer-motion'
import { MySkills } from '@/data';

interface SkillProps {
  img: string;
  className: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ img, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{once:true}}
    >
      <img src={img} alt="Skill" className="w-6 h-6 md:w-16 md:h-16 sm:w-16 sm:h-16" />
    </motion.div>
  )
}


const Skills = () => {

  const positions = [
    { x: '-22vw', y: '-3vw' }, //MaterialUi
    { x: '30vw', y: '-10vw' }, //javascript
    { x: '20vw', y: '14vw' }, //reactjs
    { x: '0vw', y: '18vw' }, //postman
    { x: '-20vw', y: '-15vw' }, //springboot
    { x: '15vw', y: '-11vw' }, //MySql
    { x: '-0vw', y: '-10vw' }, //Docker
    { x: '0vw', y: '-20vw' }, //github
    { x: '-28vw', y: '10vw' }, //intellij
    { x: '-15vw', y: '10vw' }, //Saas
    { x: '25vw', y: '3vw' }, //AWS
    { x: '34vw', y: '10vw' }, //Mangodb
    { x: '-10vw', y: '0vw' }, //html
    { x: '11vw', y: '-2vw' }, //Nextjs
    { x: '3vw', y: '10vw' }, //CSS
    { x: '-35vw', y: '0vw' }, //Redis
  ];
  return (
    <>
    <h2 className='heading mb-[25px]' id='Skills'>Skills</h2>
    <div className='md:w-full md:h-screen sm:w-full sm:h-screen w-[350px] h-[25vh] relative flex items-center justify-center rounded-full md:bg-circularDark sm:bg-circularDark'>
    
      <motion.div className='flex items-center justify-center rounded-full cursor-pointer'
      >
        {MySkills.map(({ id, img, className}, index) => (
        <Skill 
            key={id} 
            img={img}
            className={className}
            x={positions[index % positions.length].x} 
            y={positions[index % positions.length].y} 
          />
        ))}
        <img src="./web-developer.svg" className='w-6 h-6 md:w-16 md:h-16 sm:w-16 sm:h-16' alt="img" />
      </motion.div>
    </div>
    </>
  )
}

export default Skills
