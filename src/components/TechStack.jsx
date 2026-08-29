import React from 'react'
import { FaDocker, FaJenkins, FaAws } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiJfrog } from 'react-icons/si'

const TechStack = () => {
  const skills = [
    {
      name: 'Kubernetes',
      experience: '2 years',
      level: 85,
      icon: <SiKubernetes size={36} />,
      iconColor: '#326CE5',
      accentColor: '#326CE5',
    },
    {
      name: 'Docker',
      experience: '2 years',
      level: 85,
      icon: <FaDocker size={36} />,
      iconColor: '#2496ED',
      accentColor: '#2496ED',
    },
    {
      name: 'Jenkins',
      experience: '2 years',
      level: 85,
      icon: <FaJenkins size={36} />,
      iconColor: '#D33833',
      accentColor: '#D33833',
    },
    {
      name: 'AWS',
      experience: '1.5 years',
      level: 75,
      icon: <FaAws size={36} />,
      iconColor: '#FF9900',
      accentColor: '#FF9900',
    },
    {
      name: 'Terraform',
      experience: '1 year',
      level: 70,
      icon: <SiTerraform size={36} />,
      iconColor: '#7B42BC',
      accentColor: '#7B42BC',
    },
    {
      name: 'Artifactory (JFrog)',
      experience: '2 years',
      level: 85,
      icon: <SiJfrog size={36} />,
      iconColor: '#40BE46',
      accentColor: '#40BE46',
    },
  ]

  const stats = [
    { value: '2+', label: 'Years Total IT Experience' },
    { value: '2+', label: 'Years Full-Time Experience' },
    { value: '6+', label: 'Core Technologies' },
  ]

  return (
    <div id="TechStack" className='py-24 bg-grid' style={{ background: 'linear-gradient(180deg, #030712 0%, #0d1117 100%)' }}>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className='font-mono text-xs tracking-widest mb-3' style={{ color: '#06b6d4' }}>01 / EXPERTISE</p>
          <h2 className='text-4xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9' }}>Tech Stack</h2>
          <div className='w-16 h-0.5 mx-auto rounded-full section-underline mb-4' />
          <p className='text-sm' style={{ color: '#475569' }}>Core DevOps tools and technologies I work with</p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className='card-glow rounded-2xl p-6'
              style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(12px)' }}
            >
              {/* Icon + name row */}
              <div className="flex items-center gap-4 mb-5">
                <div className='p-2.5 rounded-xl' style={{
                  background: `${skill.iconColor}12`,
                  border: `1px solid ${skill.iconColor}25`,
                  color: skill.iconColor
                }}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className='font-semibold text-sm' style={{ color: '#f1f5f9' }}>{skill.name}</h3>
                  <p className='font-mono text-xs mt-0.5' style={{ color: '#475569' }}>{skill.experience}</p>
                </div>
                <span className='ml-auto font-mono text-sm font-semibold' style={{ color: skill.accentColor }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className='w-full h-1.5 rounded-full overflow-hidden' style={{ background: 'rgba(148,163,184,0.08)' }}>
                <div
                  className='h-full rounded-full transition-all duration-1000 ease-out'
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.accentColor}aa, ${skill.accentColor})`,
                    boxShadow: `0 0 8px ${skill.accentColor}55`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {stats.map((s, i) => (
            <div
              key={i}
              className='card-glow rounded-2xl p-6 text-center'
              style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(12px)' }}
            >
              <p className='text-3xl font-extrabold text-gradient mb-1'>{s.value}</p>
              <p className='text-xs font-mono' style={{ color: '#475569' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
