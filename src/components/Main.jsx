import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img src="https://images.unsplash.com/photo-1677174771926-f98912ca0460?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-screen object-cover object-left scale-x-[-1]' />
      <div className="w-full h-screen bg-white/50 absolute top-0 left-0">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:iterm-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jestin Gigi</h1>
          <h2 className='sm:text-2xl text-1xl font-medium text-gray-800 mt-4 flex pt-1'>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' DevOps Engineer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' K8s Administrator',
                1000,
                ' AWS Specialist',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between max-w-[125px] w-full pt-6'>
          <FaInstagram className='cursor-pointer' size={20}/>
          <FaLinkedin className='cursor-pointer' size={20}/>
          <FaGithub className='cursor-pointer' size={20}/>  
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default Main
