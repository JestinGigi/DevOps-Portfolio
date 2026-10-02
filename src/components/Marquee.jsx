import React, { useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'

const skills = ['AWS', 'EKS', 'Terraform', 'GitLab CI/CD', 'Flux CD', 'Grafana', 'Prometheus', 'Python', 'Bash', 'Jenkins', 'Docker', 'SonarQube']

const impact = [
  '99.8% / 99.6% SLO & SLA targets',
  '10+ incidents resolved weekly',
  '200+ gateways supported',
  '144 SonarQube projects automated',
  '50+ Jenkins pipelines owned',
  '24/7 on-call',
]

const Track = ({ items, variant }) => (
  <ul className='marquee-track'>
    {items.map((item, index) => (
      <li key={item} className='flex items-center gap-8 md:gap-12'>
        <span className={variant === 'large' && index % 2 === 1 ? 'marquee-outline' : undefined}>{item}</span>
        <span className='text-secondary' aria-hidden='true'>/</span>
      </li>
    ))}
  </ul>
)

const Row = ({ items, variant, reverse, paused }) => (
  <div
    className={`marquee ${reverse ? 'marquee-reverse' : ''} ${paused ? 'is-paused' : ''} ${
      variant === 'large'
        ? 'text-[clamp(2rem,1.4rem+2.6vw,3.75rem)] font-bold leading-[1.2] text-neutral-100'
        : 'text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] font-bold uppercase tracking-[0.06em] text-neutral-400'
    }`}
  >
    <Track items={items} variant={variant} />
    <Track items={items} variant={variant} />
  </div>
)

const Marquee = () => {
  const [paused, setPaused] = useState(false)

  return (
    <section aria-label='Skills and impact highlights' className='relative border-y border-neutral-700 py-8 md:py-10'>
      {/* Decorative repeat of content listed in Expertise and Experience. */}
      <div aria-hidden='true' className='grid gap-5'>
        <Row items={skills} variant='large' paused={paused} />
        <Row items={impact} reverse paused={paused} />
      </div>
      <button
        type='button'
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={paused ? 'Play scrolling highlights' : 'Pause scrolling highlights'}
        className='marquee-toggle absolute right-4 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-700 text-neutral-100 transition-colors duration-300 hover:bg-primary md:right-6'
      >
        {paused ? <FiPlay size={16} aria-hidden='true' /> : <FiPause size={16} aria-hidden='true' />}
      </button>
    </section>
  )
}

export default Marquee
