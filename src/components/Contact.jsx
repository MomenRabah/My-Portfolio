import React from 'react'
import {CONTACT} from '../constants/index'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Contact() {
  return (
    <div className='border-b border-[#d9d9d9] pb-12 lg:mb-35'>
        <h1 className='mt-14 mb-4 lg:mb-14 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='my-4 border-b'>{CONTACT.email}</a>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/momen-rabah-16463b223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MomenRabah?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
        </div>
        </div>
    </div>
  )
}

export default Contact