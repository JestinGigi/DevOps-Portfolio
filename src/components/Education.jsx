import React from 'react'
import EducationItem from './EducationItem'

const data = [
  {
    year: '2020 - 2024',
    duration: '4yrs',
    institution: 'DR. VISHWANATH KARAD MIT WORLD PEACE UNIVERSITY (MIT-WPU)',
    location: 'Pune, Maharashtra',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    details: [
      'CGPA: 9.2',
      'Specialized in Computer Science and Engineering with focus on modern software development',
      'Core Skills: Machine Learning, Python, Linux System Administration',
      'Web Technologies: HTML, CSS, Bootstrap',
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
    year: '2016 - 2018',
    duration: '2yrs',
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
    <div id="Education" className='py-24' style={{ background: 'linear-gradient(180deg, #030712 0%, #0d1117 100%)' }}>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-16 text-center">
          <p className='font-mono text-xs tracking-widest mb-3' style={{ color: '#10b981' }}>03 / EDUCATION</p>
          <h2 className='text-4xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9' }}>Education</h2>
          <div className='w-16 h-0.5 mx-auto rounded-full' style={{ background: 'linear-gradient(90deg, #10b981, #06b6d4)' }} />
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
