import React from 'react'

const EducationItem = ({ period, degree, institution, result }) => {
  return (
    <article className='card flex flex-col p-8 md:p-10'>
      <p className='text-base font-bold text-neutral-300'>{period}</p>
      <h3 className='mt-4 text-2xl leading-[1.35]'>{degree}</h3>
      <p className='mt-2 text-base leading-[1.6]'>{institution}</p>
      <p className='mt-auto pt-8 text-base font-bold text-neutral-100'>
        <span className='text-4xl leading-none'>{result.value}</span>
        <span className='ml-3 text-neutral-300'>{result.label}</span>
      </p>
    </article>
  )
}

export default EducationItem
