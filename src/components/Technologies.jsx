import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { SiFigma } from 'react-icons/si'; 
import { FaPython } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import { motion } from "framer-motion"

const iconVariants = (duration)=>({
  initial: { y: -5},
  animate: {
    y:[5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

function Technologies() {
  return (
    <div className='border-b border-[#d9d9d9] pb-4 lg:mb-35'>
      <h2 className='mt-14 mb-10 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4 pb-12'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <RiReactjsLine className='text-5xl text-cyan-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <SiMongodb className='text-5xl text-green-500'/>
        </motion.div>

        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" 
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <FaNodeJs className='text-5xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <SiTailwindcss className='text-5xl text-cyan-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <FaPython className='text-5xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <SiFigma className='text-5xl'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-[#0a283d] p-2'>
          <SiAdobe className='text-5xl  text-red-600'/>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
