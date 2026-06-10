import React from 'react'

const EducationItem = ({year, duration, institution, location, degree, details}) => {
  return (
    <div className="relative pb-12 last:pb-0">
      {/* Mobile Layout */}
      <div className="md:hidden relative border-l-2 border-emerald-200 pl-6">
        <div className='absolute w-3 h-3 bg-emerald-600 rounded-full -left-[7px] top-1 border-2 border-white shadow-md'/>
        
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">{degree}</h2>
          <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wide">{institution}</h3>
          <p className="text-xs text-gray-400">{year} · {duration}</p>
          <p className="text-xs text-gray-500">{location}</p>
          <ul className="space-y-2 pt-2">
            {Array.isArray(details) ? (
              details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed flex items-start text-justify">
                  <span className="mr-2 mt-0.5 flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-600 text-sm leading-relaxed flex items-start text-justify">
                <span className="mr-2 mt-0.5 flex-shrink-0">•</span>
                <span>{details}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Left side - Institution and dates */}
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wide">{institution}</h3>
          <p className="text-sm text-gray-500 mt-1">{location}</p>
          <p className="text-xs text-gray-400 mt-1">{year} · {duration}</p>
        </div>
        
        {/* Center timeline */}
        <div className="relative flex flex-col items-center">
          <div className='w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10'/>
          <div className="w-0.5 h-full bg-emerald-200 absolute top-4"/>
        </div>
        
        {/* Right side - Degree and details */}
        <div className="w-1/2 pl-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{degree}</h2>
          <ul className="space-y-2">
            {Array.isArray(details) ? (
              details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed flex items-start text-justify">
                  <span className="mr-2 mt-0.5 flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-600 text-sm leading-relaxed flex items-start text-justify">
                <span className="mr-2 mt-1.5">•</span>
                <span>{details}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EducationItem
