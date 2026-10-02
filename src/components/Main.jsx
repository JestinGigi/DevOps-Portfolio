import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import profilePhoto from '../assets/profile-portrait.jpg'
import { profile } from '../data/profile'

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn size={20} />, external: true },
  { href: profile.github, label: 'GitHub', icon: <FaGithub size={20} />, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', icon: <FiMail size={20} /> },
]

const HeroAside = ({ title, children }) => (
  <div className='flex flex-col items-start border-b border-neutral-700 py-8 first:pt-0 last:border-0 last:pb-0 md:border-0 md:py-0 xl:border-b xl:py-8 xl:first:pt-0 xl:last:border-0 xl:last:pb-0'>
    <p className='mb-3 text-base font-bold uppercase tracking-[0.06em] text-neutral-100'>{title}</p>
    {children}
  </div>
)

const Main = () => {
  return (
    <section id='top' aria-labelledby='hero-title' className='overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28'>
      <div className='container-x grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:grid-cols-[1.15fr_0.85fr_0.72fr] xl:gap-12'>

        <div>
          <span className='hero-rule mb-8 md:mb-10' aria-hidden='true' />
          <h1 id='hero-title' className='text-[clamp(2.5rem,1.4rem+3.2vw,4.25rem)] leading-[1.12] tracking-[-0.01em]'>
            I’m Jestin, an SRE &amp; DevOps Engineer
          </h1>
          <p className='mt-6 max-w-xl text-lg text-neutral-400 md:text-xl md:leading-[1.6]'>
            I keep AWS production infrastructure reliable, observable and automated, from EKS microservices and Grafana alerting to Terraform-managed cloud and 24/7 on-call response.
          </p>
          <div className='mt-10 flex flex-wrap gap-4'>
            <a href='#projects' className='btn btn-primary'>
              View Projects <FiArrowRight aria-hidden='true' size={20} />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className='btn btn-secondary'>
              <FiDownload aria-hidden='true' size={20} /> Download Resume
            </a>
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-sm md:max-w-none'>
          <div className='card relative aspect-[4/5] overflow-hidden'>
            <img
              src={profilePhoto}
              alt='Portrait of Jestin Gigi'
              className='h-full w-full object-cover object-[50%_20%]'
              width='1200'
              height='675'
              fetchPriority='high'
            />
            <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-800/80 to-transparent' aria-hidden='true' />
            <p className='absolute bottom-5 left-5 right-5 rounded-[10px] bg-neutral-800/90 px-4 py-3 text-sm font-bold text-neutral-100 backdrop-blur'>
              Based in {profile.location}
            </p>
          </div>
        </div>

        <aside aria-label='Quick links' className='grid gap-0 md:col-span-2 md:grid-cols-3 md:gap-10 md:border-t md:border-neutral-700 md:pt-12 xl:col-span-1 xl:grid-cols-1 xl:gap-0 xl:border-0 xl:pt-0'>
          <HeroAside title='About me'>
            <p className='mb-6 text-base leading-[1.7]'>
              3+ years managing production infrastructure, incident response and automation across AWS microservices and industrial automation.
            </p>
            <a href='#about' className='arrow-link mt-auto text-sm uppercase tracking-[0.06em]'>
              Learn more <FiArrowRight aria-hidden='true' />
            </a>
          </HeroAside>
          <HeroAside title='My work'>
            <p className='mb-6 text-base leading-[1.7]'>
              GitLab CI/CD observability and an automated migration of 144 projects to SonarQube Cloud.
            </p>
            <a href='#projects' className='arrow-link mt-auto text-sm uppercase tracking-[0.06em]'>
              Browse projects <FiArrowRight aria-hidden='true' />
            </a>
          </HeroAside>
          <HeroAside title='Follow me'>
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
    </section>
  )
}

export default Main
