import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2021,
    title: 'Senior DevOps Engineer',
    duration: '1 year',
    details: 'Led CI/CD pipeline automation and cloud infrastructure management using AWS and Kubernetes.'
  },
  {
    year: 2019,
    title: 'DevOps Engineer',
    duration: '2 years',
    details: 'Implemented containerization strategies and automated deployment processes using Docker and Jenkins.'
  },
  { 
    year: 2017,
    title: 'Junior Systems Administrator',
    duration: '2 years',
    details: 'Managed server infrastructure and supported development teams with deployment and monitoring tools.'
  }
]
const Work = () => {
  return (
    <div id="Work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx) => (
          <WorkItem 
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
    </div>
  )
}

export default Work
