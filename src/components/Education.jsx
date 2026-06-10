import React from 'react'
import EducationItem from './EducationItem'

const data = [
  {
    year: '2020 - 2024',
    duration: '4yrs',
    institution: 'MIT WORLD PEACE UNIVERSITY',
    location: 'India, Pune',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    details: [
      'Specialized in Computer Science and Engineering with focus on modern software development',
      'Core Skills: Machine Learning, Python, Linux System Administration',
      'Web Technologies: HTML, CSS, Bootstrap',
      'Developed strong foundation in Linux and system-level programming',
      'Participated in technical projects and collaborative learning initiatives'
    ]
  },
  {
    year: '2018 - 2020',
    duration: '2yrs',
    institution: 'MNR SCHOOL OF EXCELLENCE',
    location: 'India',
    degree: 'All India Senior School Certificate Examination (AISSCE) - Science',
    details: [
      'Grade: 91.4%',
      'Stream: Science with Computer Science',
      'Technical Skills: Data Structures, C++, Database Management System (DBMS), SQL, Statistics',
      'Strong foundation in DSA and algorithmic problem solving',
      'Completed advanced coursework in programming and database systems'
    ]
  },
  {
    year: '2008 - 2018',
    duration: '10yrs',
    institution: 'DAV INTERNATIONAL SCHOOL, KHARGHAR',
    location: 'India, Navi Mumbai',
    degree: 'All India Secondary School Examination (AISSE)',
    details: [
      'Grade: 89.4%',
      'Activities: Drawing and Craft',
      'Developed strong collaboration and presentation skills',
      'Active participant in co-curricular activities',
      'Built foundational academic and interpersonal competencies'
    ]
  }
]

const Education = () => {
  return (
    <div id="Education" className='bg-gray-50 py-16'>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
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
