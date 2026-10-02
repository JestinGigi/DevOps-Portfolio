import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import profilePhoto from '../assets/profile-cutout.png'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn size={20} />, external: true },
  { href: profile.github, label: 'GitHub', icon: <FaGithub size={20} />, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', icon: <FiMail size={20} /> },
]

const HeroAside = ({ title, delay, children }) => (
  <Reveal delay={delay} className='flex flex-col items-start border-b border-neutral-700 py-8 first:pt-0 last:border-0 last:pb-0 md:border-0 md:py-0 lg:border-b lg:py-8 lg:first:pt-0 lg:last:border-0 lg:last:pb-0'>
    <p className='mb-3 text-base font-bold uppercase tracking-[0.06em] text-neutral-100'>{title}</p>
    {children}
  </Reveal>
)

const Main = () => {
  return (
    <section id='top' aria-labelledby='hero-title' className='relative overflow-hidden'>
      <div className='container-x relative z-10 grid gap-14 pt-12 md:pt-20 lg:min-h-[46rem] lg:grid-cols-[minmax(0,27rem)_minmax(0,18rem)] lg:items-center lg:justify-between lg:gap-10 lg:py-20 xl:grid-cols-[minmax(0,30rem)_minmax(0,18rem)]'>

        <div>
          <Reveal as='span' className='hero-rule mb-8 md:mb-10' aria-hidden='true' />
          <Reveal as='h1' delay={100} id='hero-title' className='text-[clamp(2.5rem,1.4rem+3.2vw,4.25rem)] leading-[1.12] tracking-[-0.01em]'>
            I’m Jestin, an SRE &amp; DevOps Engineer
          </Reveal>
          <Reveal as='p' delay={220} className='mt-6 max-w-xl text-lg text-neutral-400 md:text-xl md:leading-[1.6]'>
            I keep AWS production infrastructure reliable, observable and automated, from EKS microservices and Grafana alerting to Terraform-managed cloud and 24/7 on-call response.
          </Reveal>
          <Reveal delay={340} className='mt-10 flex flex-wrap gap-4'>
            <a href='#projects' className='btn btn-primary'>
              View Projects <FiArrowRight aria-hidden='true' size={20} />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className='btn btn-secondary'>
              <FiDownload aria-hidden='true' size={20} /> Download Resume
            </a>
          </Reveal>
        </div>

        <aside aria-label='Quick links' className='grid md:grid-cols-3 md:gap-10 md:border-t md:border-neutral-700 md:pt-12 lg:grid-cols-1 lg:gap-0 lg:border-0 lg:pt-0'>
          <HeroAside title='About me' delay={300}>
            <p className='mb-6 text-base leading-[1.7]'>
              3+ years managing production infrastructure, incident response and automation across AWS microservices and industrial automation.
            </p>
            <a href='#about' className='arrow-link mt-auto text-sm uppercase tracking-[0.06em]'>
              Learn more <FiArrowRight aria-hidden='true' />
            </a>
          </HeroAside>
          <HeroAside title='My work' delay={420}>
            <p className='mb-6 text-base leading-[1.7]'>
              GitLab CI/CD observability and an automated migration of 144 projects to SonarQube Cloud.
            </p>
            <a href='#projects' className='arrow-link mt-auto text-sm uppercase tracking-[0.06em]'>
              Browse projects <FiArrowRight aria-hidden='true' />
            </a>
          </HeroAside>
          <HeroAside title='Follow me' delay={540}>
            <ul className='-ml-3 flex gap-1'>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className='social-link'
                    aria-label={social.label}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </HeroAside>
        </aside>
      </div>

      <div className='relative mx-auto mt-14 w-[88%] max-w-md md:max-w-lg lg:pointer-events-none lg:absolute lg:bottom-0 lg:left-[58%] lg:mt-0 lg:w-[min(50vw,680px)] lg:max-w-none lg:-translate-x-1/2 xl:left-[55%]'>
        <Reveal
          as='img'
          delay={150}
          src={profilePhoto}
          alt='Portrait of Jestin Gigi'
          className='block h-auto w-full'
          width='800'
          height='822'
          fetchPriority='high'
        />
      </div>
    </section>
  )
}

export default Main
