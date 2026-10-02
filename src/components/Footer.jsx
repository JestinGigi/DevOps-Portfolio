import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiArrowUp, FiMail } from 'react-icons/fi'
import profilePhoto from '../assets/profile-cutout.png'
import { profile } from '../data/profile'

const Footer = () => {
  return (
    <footer className='border-t border-neutral-700'>
      <div className='container-x grid gap-14 py-16 md:py-20 lg:grid-cols-2 lg:items-center'>
        <div>
          <div className='flex items-center gap-5'>
            <div className='h-20 w-20 shrink-0 overflow-hidden rounded-full bg-neutral-700 md:h-24 md:w-24'>
              {/* Face sits at ~46% x / 30% y of the image; scale around it, then shift it to the circle centre. */}
              <img src={profilePhoto} alt='' className='h-full w-full origin-[46%_30%] translate-x-[4%] translate-y-[25%] scale-[1.5] object-cover object-top' loading='lazy' />
            </div>
            <div>
              <p className='text-2xl font-bold text-neutral-100 md:text-[1.75rem]'>{profile.name}</p>
              <p className='mt-1 text-base md:text-lg'>{profile.title} · {profile.location}</p>
            </div>
          </div>
          <ul className='-ml-3 mt-8 flex gap-1'>
            <li>
              <a href={profile.linkedin} className='social-link' aria-label='LinkedIn' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn size={20} />
              </a>
            </li>
            <li>
              <a href={profile.github} className='social-link' aria-label='GitHub' target='_blank' rel='noopener noreferrer'>
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className='social-link' aria-label='Email'>
                <FiMail size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className='flex items-center gap-3 text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.2] text-neutral-100'>
            Get in touch <FiArrowRight aria-hidden='true' className='text-secondary' />
          </p>
          <div className='mt-8 grid gap-8 sm:grid-cols-2'>
            <div>
              <p className='mb-3 text-sm font-bold uppercase tracking-[0.08em] text-neutral-300'>Email me:</p>
              <a href={`mailto:${profile.email}`} className='arrow-link break-all sm:break-normal'>
                {profile.email} <FiArrowRight aria-hidden='true' />
              </a>
            </div>
            <div>
              <p className='mb-3 text-sm font-bold uppercase tracking-[0.08em] text-neutral-300'>Call me:</p>
              <a href={profile.phoneHref} className='arrow-link'>
                {profile.phone} <FiArrowRight aria-hidden='true' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-neutral-700'>
        <div className='container-x flex items-center justify-between gap-6 py-8 text-base'>
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href='#top' className='inline-flex items-center gap-1.5 font-bold text-neutral-100'>
            Back to top <FiArrowUp aria-hidden='true' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
