import React from 'react';
import logo from "../assets/Logo-icon.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className=' items-center gap-8 hidden md:flex'>
      <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#3ccf4e]"
        >
          About
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#3ccf4e]"
        >
          Experience
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#3ccf4e]"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#3ccf4e]"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/momen-rabah-16463b223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MomenRabah?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
