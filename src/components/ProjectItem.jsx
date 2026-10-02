import React from 'react'

const DetailLabel = ({ children }) => (
  <dt className='mb-2 text-sm font-bold uppercase tracking-[0.08em] text-neutral-100'>{children}</dt>
)

const ProjectItem = ({ id, categories, title, visual, problem, contribution, outcome, tools }) => {
  return (
    <article aria-labelledby={id} className='card overflow-hidden'>
      <div className='px-6 pt-8 sm:px-8 md:px-10 md:pt-10'>
        <ul className='flex flex-wrap gap-2 sm:justify-end' aria-label='Project categories'>
          {categories.map((category) => (
            <li key={category} className='badge'>{category}</li>
          ))}
        </ul>
        <h3 id={id} className='mt-6 text-[clamp(1.625rem,1.3rem+1.1vw,2.25rem)] leading-[1.25]'>{title}</h3>
      </div>

      <div className='mt-8 px-4 sm:px-6'>{visual}</div>

      <dl className='grid gap-7 px-6 pt-8 pb-10 sm:px-8 md:px-10 md:pb-12'>
        <div>
          <DetailLabel>Problem</DetailLabel>
          <dd className='text-base leading-[1.7]'>{problem}</dd>
        </div>
        <div>
          <DetailLabel>What I did</DetailLabel>
          <dd>
            <ul className='grid gap-2.5'>
              {contribution.map((item) => (
                <li key={item} className='flex gap-3 text-base leading-[1.7]'>
                  <span className='mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-100' aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className='border-l-4 border-primary pl-5'>
          <DetailLabel>Outcome</DetailLabel>
          <dd className='text-lg font-bold leading-[1.5] text-neutral-100'>{outcome}</dd>
        </div>
        <div>
          <DetailLabel>Technologies</DetailLabel>
          <dd>
            <ul className='flex flex-wrap gap-2'>
              {tools.map((tool) => (
                <li key={tool} className='rounded-lg bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300'>{tool}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default ProjectItem
