import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import mainImage from '../assets/main-image.png'

const Main = () => {
  return (
    <div id="main">
      {/* <img src="https://images.unsplash.com/photo-1677174771926-f98912ca0460?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-screen object-cover object-left scale-x-[-1]' /> */}
      <img src={mainImage} alt="DevOps portfolio hero background featuring technology and coding elements in a professional workspace setting" className='w-full h-screen object-cover object-left scale-x-[-1]' />
      <div className="w-full h-screen bg-white/50 absolute top-0 left-0">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:iterm-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jestin Gigi</h1>
          <h2 className='sm:text-2xl text-1xl font-medium text-gray-800 mt-4 flex pt-1'>
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' a DevOps Engineer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' into CI/CD & Containers',
                1000,
                ' into AWS & Kubernetes',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between max-w-[125px] w-full pt-6'>
          <a href="https://www.instagram.com/j_prof_x/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='cursor-pointer' size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/jestingigi11/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='cursor-pointer' size={30}/>
          </a>
          <a href="https://github.com/JestinGigi" target="_blank" rel="noopener noreferrer">
            <FaGithub className='cursor-pointer' size={30}/>
          </a>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default Main
