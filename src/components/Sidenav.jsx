import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Tooltip } from "react-tooltip";

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-99 md:hidden' />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#Work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Projects</span>
                    </a>
                    <a href="https://docs.google.com/document/d/1DOYg2nca4o4EaM5I3GsFdASV9qiDuyJT2Y-RGxV-TmE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                        <span className="pl-4">Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) :
                (
                    ''
                )
            }

            <div className="md:block hidden fixed top-[25%] left-0 z-10">
                <div className='flex flex-col'>
                    <a href="#main" data-tooltip-id="home-tooltip" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <Tooltip id="home-tooltip" place="right" content="Home" />
                    </a>
                    <a href="#Work" data-tooltip-id="work-tooltip" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <Tooltip id="work-tooltip" place="right" content="Work" />
                    </a>
                    <a href="#projects" data-tooltip-id="projects-tooltip" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <Tooltip id="projects-tooltip" place="right" content="Projects" />
                    </a>
                    <a href="https://docs.google.com/document/d/1DOYg2nca4o4EaM5I3GsFdASV9qiDuyJT2Y-RGxV-TmE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" data-tooltip-id="resume-tooltip" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                        <Tooltip id="resume-tooltip" place="right" content="Resume" />
                    </a>
                    <a href="#contact"  data-tooltip-id="contact-tooltip" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20} />
                        <Tooltip id="contact-tooltip" place="right" content="Contact" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
