import React from 'react'
import { EXPERIENCES } from '../constants'
function Experience() {
  return (
    <div className='border-b border-[#d9d9d9] pb-12 lg:mb-35'>
        <h2 className='mt-14 mb-10 text-center text-4xl'>Experience</h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {experience.role} - <span className='text-sm'>{experience.company}</span>
                    </h6>
                    <p className='mb-4 font-light text-navy-800 tracking-tighter text-justify'>{experience.description}</p>
                    {experience.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-[#3ccf4e] px-2 py-1 text-sm font-medium text-white'>{tech}</span>
                    ))}
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}

export default Experience