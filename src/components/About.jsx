import React from 'react'
import { ABOUT_TEXT } from '../constants'

function About() {
  return (
    <div className='border-b border-[#d9d9d9] pb-12 lg:mb-35'>
      <h2 className='mt-14 mb-4 text-center text-4xl'>About me</h2>
      <div className='flex justify-center'>
        <div className='flex w-full max-w-4xl p-4 flex-col space-y-6'>
          <p className=' lg:text-justify leading-relaxed tracking-tighter text-justify'>
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
