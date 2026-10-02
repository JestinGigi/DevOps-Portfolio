import React from 'react'
import EducationItem from './EducationItem'
import Reveal from './Reveal'

const degree = {
  period: '2020 – 2024',
  degree: 'Bachelor of Technology, Computer Science & Engineering',
  institution: 'Dr. Vishwanath Karad MIT World Peace University (MIT-WPU)',
  result: { value: '9.2/10', label: 'CGPA' },
}

const courses = [
  { name: 'GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners', provider: 'Udemy' },
  { name: 'Introduction to Linux (LFS101)', provider: 'Linux Foundation' },
]

const Education = () => {
  return (
    <section id='education' aria-labelledby='education-title' className='section pt-0 md:pt-0'>
      <div className='container-x'>
        <Reveal>
          <p className='section-label mb-5'>Education &amp; courses</p>
          <h2 id='education-title' className='mb-10 text-[clamp(1.75rem,1.4rem+1.4vw,2.375rem)] leading-[1.25]'>Foundations in computer science and Linux</h2>
        </Reveal>
        <div className='grid gap-6 md:grid-cols-2'>
          <Reveal className='flex *:w-full'><EducationItem {...degree} /></Reveal>
          <Reveal as='article' delay={150} className='card p-8 md:p-10'>
            <p className='text-base font-bold text-neutral-300'>Certifications &amp; courses</p>
            <ul className='mt-4 grid gap-6'>
              {courses.map((course) => (
                <li key={course.name} className='border-b border-neutral-600 pb-6 last:border-0 last:pb-0'>
                  <h3 className='text-xl leading-[1.4]'>{course.name}</h3>
                  <p className='mt-1 text-base'>{course.provider}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Education
