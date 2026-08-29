import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import profilePhoto from '../assets/profile.jpg'

const Main = () => {
  return (
    <div id="main" className='relative min-h-screen flex items-center overflow-hidden'
      style={{ background: 'linear-gradient(135deg, #030712 0%, #0d1117 60%, #0f172a 100%)' }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Subtle radial glow behind photo side */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] rounded-full pointer-events-none'
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className='relative z-10 max-w-[1040px] w-full mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center py-24 md:py-0'>

        {/* LEFT — text content */}
        <div className='flex flex-col items-start order-2 md:order-1'>

          {/* Status badge */}
          <div className='flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest'
            style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.25)',
              color: '#06b6d4',
            }}>
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Name */}
          <h1 className='text-5xl sm:text-6xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9', lineHeight: 1.1 }}>
            Hi, I'm <br />
            <span className='text-gradient'>Jestin Gigi</span>
          </h1>

          {/* Type animation */}
          <div className='flex items-center gap-2 text-lg font-medium mb-5' style={{ color: '#94a3b8' }}>
            <span className='font-mono' style={{ color: '#475569' }}>&gt;_</span>
            <TypeAnimation
              sequence={[
                'Site Reliability Engineer',
                1200,
                'DevOps Engineer',
                1200,
                'CI/CD & Containers',
                1200,
                'AWS & Kubernetes',
                1200,
                'Infrastructure as Code',
                1200,
              ]}
              wrapper="span"
              cursor={true}
              style={{ color: '#06b6d4', fontFamily: "'JetBrains Mono', monospace" }}
              repeat={Infinity}
            />
          </div>

          {/* Short bio line */}
          <p className='text-sm leading-relaxed mb-8 max-w-sm' style={{ color: '#475569' }}>
            SRE with 2+ years managing production infrastructure on AWS (EKS, RDS, IoT Core) and driving observability through Grafana, Prometheus, and Terraform-based automation.
          </p>

          {/* CTA buttons */}
          <div className='flex gap-3 mb-10'>
            <a href="#contact"
              className='px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                color: '#f1f5f9',
                boxShadow: '0 4px 20px rgba(6,182,212,0.3)',
              }}>
              Hire Me
            </a>
            <a href="#projects"
              className='px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105'
              style={{
                background: 'transparent',
                border: '1px solid rgba(6,182,212,0.35)',
                color: '#06b6d4',
              }}>
              See Projects
            </a>
          </div>

          {/* Social icons */}
          <div className='flex gap-3'>
            {[
              { href: 'https://www.instagram.com/j_prof_x/', icon: <FaInstagram size={18} />, label: 'Instagram' },
              { href: 'https://www.linkedin.com/in/jestingigi11/', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'https://github.com/JestinGigi', icon: <FaGithub size={18} />, label: 'GitHub' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className='p-2.5 rounded-xl transition-all duration-200 hover:scale-110'
                style={{
                  background: 'rgba(15,23,42,0.7)',
                  border: '1px solid rgba(148,163,184,0.12)',
                  color: '#475569',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
                  e.currentTarget.style.color = '#06b6d4';
                  e.currentTarget.style.boxShadow = '0 0 14px rgba(6,182,212,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.12)';
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — profile photo */}
        <div className='flex justify-center md:justify-end order-1 md:order-2'>
          <div className='relative'>
            {/* Glow ring behind photo */}
            <div className='absolute inset-0 rounded-full'
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                transform: 'scale(1.15)',
                filter: 'blur(20px)',
              }}
            />

            {/* Photo container */}
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full overflow-hidden'
              style={{
                border: '2px solid rgba(6,182,212,0.25)',
                boxShadow: '0 0 40px rgba(6,182,212,0.1), inset 0 0 40px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={profilePhoto}
                alt="Jestin Gigi — DevOps Engineer"
                className='w-full h-full object-cover object-center'
              />
              {/* Subtle inner gradient to blend bottom into dark bg */}
              <div className='absolute inset-0 rounded-full'
                style={{
                  background: 'radial-gradient(ellipse at bottom, rgba(3,7,18,0.3) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating badge — years of experience */}
            <div className='absolute bottom-6 -left-4 px-4 py-2.5 rounded-xl'
              style={{
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(6,182,212,0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <p className='font-mono text-xs' style={{ color: '#475569' }}>Experience</p>
              <p className='text-lg font-bold text-gradient'>2+ Years</p>
            </div>

            {/* Floating badge — role */}
            <div className='absolute top-6 -right-4 px-4 py-2.5 rounded-xl'
              style={{
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(59,130,246,0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <p className='font-mono text-xs' style={{ color: '#475569' }}>Role</p>
              <p className='text-sm font-bold' style={{ color: '#3b82f6' }}>DevOps Eng.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className='absolute bottom-0 left-0 right-0 h-20 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, transparent, #030712)' }} />
    </div>
  )
}

export default Main
