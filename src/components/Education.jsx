import React from 'react'
import EducationItem from './EducationItem'

const data = [
  {
    year: 'Aug 2019 - Jun 2023',
    duration: '4yrs',
    institution: 'PUNE INSTITUTE OF COMPUTER TECHNOLOGY',
    location: 'India, Pune',
    degree: 'Bachelor of Engineering in Computer Engineering',
    details: [
      'CGPA: 8.5/10',
      'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, Cloud Computing',
      'Member of Technical Club, participated in various hackathons and coding competitions',
      'Final Year Project: Automated CI/CD Pipeline Implementation for Microservices Architecture'
    ]
  },
  {
    year: 'Jun 2017 - Apr 2019',
    duration: '2yrs',
    institution: 'JUNIOR COLLEGE',
    location: 'India, Pune',
    degree: 'Higher Secondary Certificate (HSC)',
    details: [
      'Percentage: 85%',
      'Stream: Science (Physics, Chemistry, Mathematics)',
      'Participated in science exhibitions and technical workshops'
    ]
  },
  {
    year: 'Jun 2007 - May 2017',
    duration: '10yrs',
    institution: 'HIGH SCHOOL',
    location: 'India, Pune',
    degree: 'Secondary School Certificate (SSC)',
    details: [
      'Percentage: 90%',
      'Awarded Best Student in Science and Mathematics',
      'Active participant in school competitions and events'
    ]
  }
]

const Education = () => {
  return (
    <div id="Education" className='bg-gray-50 py-16'>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4'>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Education</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto rounded-full"></div>
        </div>
        {data.map((item, idx) => (
          <EducationItem 
            key={idx}
            year={item.year}
            duration={item.duration}
            institution={item.institution}
            location={item.location}
            degree={item.degree}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
