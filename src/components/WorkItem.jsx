import React from 'react'
import Reveal from './Reveal'

const WorkItem = ({ period, company, location, title, details, current = false }) => {
  return (
    <Reveal as='li' className='grid gap-6 border-b border-neutral-700 py-10 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-12 md:py-14 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]'>
      <div>
        <p className='flex items-center gap-3 text-base font-bold text-neutral-100'>
          <span
            className={`h-3 w-3 shrink-0 rounded-full ${current ? 'bg-secondary' : 'border-2 border-neutral-500'}`}
            aria-hidden='true'
          />
          {period}
        </p>
        <p className='mt-4 text-xl font-bold leading-[1.3] text-neutral-100'>{company}</p>
        <p className='mt-1 text-base text-neutral-400'>{location}</p>
        {current && <p className='badge mt-4'>Current role</p>}
      </div>
      <div>
        <h3 className='text-[clamp(1.5rem,1.3rem+0.8vw,2rem)] leading-[1.25]'>{title}</h3>
        <ul className='mt-5 grid gap-3'>
          {details.map((detail) => (
            <li key={detail} className='flex gap-3 text-base leading-[1.7] md:text-lg'>
              <span className='mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-100 md:mt-3' aria-hidden='true' />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default WorkItem
