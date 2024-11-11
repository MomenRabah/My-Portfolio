import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/wiseProfile.png'
import profileImage from '../assets/profile-image.jpg'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

function Hero() {
  return (
    <div className='border-b border-[#d9d9d9] pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='flex flex-col items-center lg:ml-20 lg:items-start'>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-12 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Moamen Rabah</motion.h1>
          <motion.span
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-[#4fdf60] via-[#039016] to-[#3ccf4e] bg-clip-text text-4xl tracking-tight text-transparent'>
            Software Developer
          </motion.span>
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tight text-justify'>{HERO_CONTENT}
          </motion.p>
        </div>

        <div className='w-full lg:w-1/2 lg:p-4 flex items-center justify-center '>
          <div className="relative z-10">
            <img
              width="250"
              className='rounded-full mt-7 mb-12'
              src={profileImage}
              alt='personal profile img'
            />
          </div>

          <div className="absolute opacity-45">
            <img
              src={profilePic}
              alt='wise profile img'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
