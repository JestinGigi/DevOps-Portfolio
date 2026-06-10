import React from 'react'
import { FaDocker, FaJenkins, FaAws } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiJfrog } from 'react-icons/si'

const TechStack = () => {
  const skills = [
    {
      name: 'Kubernetes',
      experience: '2 years',
      level: 85,
      icon: <SiKubernetes size={40} className="text-blue-600" />,
      color: 'bg-blue-600'
    },
    {
      name: 'Docker',
      experience: '2 years',
      level: 85,
      icon: <FaDocker size={40} className="text-sky-500" />,
      color: 'bg-sky-500'
    },
    {
      name: 'Jenkins',
      experience: '2 years',
      level: 85,
      icon: <FaJenkins size={40} className="text-red-600" />,
      color: 'bg-red-600'
    },
    {
      name: 'AWS',
      experience: '1.5 years',
      level: 75,
      icon: <FaAws size={40} className="text-orange-500" />,
      color: 'bg-orange-500'
    },
    {
      name: 'Terraform',
      experience: '1 year',
      level: 70,
      icon: <SiTerraform size={40} className="text-purple-600" />,
      color: 'bg-purple-600'
    },
    {
      name: 'Artifactory (JFrog)',
      experience: '2 years',
      level: 85,
      icon: <SiJfrog size={40} className="text-green-600" />,
      color: 'bg-green-600'
    }
  ]

  return (
    <div id="TechStack" className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Tech Stack</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 mt-4">Core DevOps tools and technologies I work with</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon and Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                    <p className="text-xs text-gray-500">{skill.experience}</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Proficiency Label */}
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">Proficiency</span>
                <span className="text-xs font-semibold text-gray-800">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-[#001b5e]">2+</p>
              <p className="text-gray-600 text-sm mt-1">Years Total IT Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#001b5e]">1.5+</p>
              <p className="text-gray-600 text-sm mt-1">Years Full-Time Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#001b5e]">6+</p>
              <p className="text-gray-600 text-sm mt-1">Core Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
