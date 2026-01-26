import React from 'react'
import ProjectItem from './ProjectItem'
import image1 from '../assets/img-1.jpg'
import image2 from '../assets/img-2.jpg'
import image3 from '../assets/img-3.jpg'
import image4 from '../assets/img-4.jpg'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={image1} title='StockVis'></ProjectItem>
            <ProjectItem img={image2} title='Data Visualizer'></ProjectItem>
            <ProjectItem img={image3} title='AWS EC2 Setup'></ProjectItem>
            <ProjectItem img={image4} title='Tableau'></ProjectItem>
        </div>
    </div>
  )
}

export default Projects  