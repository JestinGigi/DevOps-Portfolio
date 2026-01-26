import React from 'react'

const WorkItem = ({year, duration, company, location, title, details}) => {
  return (
    <div className="relative pb-12 last:pb-0">
      {/* Mobile Layout */}
      <div className="md:hidden relative border-l-2 border-gray-300 pl-6">
        <div className='absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1 border-2 border-white'/>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{company}</h3>
          <p className="text-xs text-gray-400">{year} · {duration}</p>
          <p className="text-xs text-gray-500">{location}</p>
          <ul className="space-y-2 pt-2">
            {Array.isArray(details) ? (
              details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed flex text-justify">
                  <span className="mr-2 mt-1.5">•</span>
                  <span>{detail}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-600 text-sm leading-relaxed flex text-justify">
                <span className="mr-2 mt-1.5">•</span>
                <span>{details}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Left side - Company and dates */}
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{company}</h3>
          <p className="text-sm text-gray-500 mt-1">{location}</p>
          <p className="text-xs text-gray-400 mt-1">{year} · {duration}</p>
        </div>
        
        {/* Center timeline */}
        <div className="relative flex flex-col items-center">
          <div className='w-4 h-4 bg-gray-800 rounded-full border-4 border-white z-10'/>
          <div className="w-0.5 h-full bg-gray-300 absolute top-4"/>
        </div>
        
        {/* Right side - Title and details */}
        <div className="w-1/2 pl-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
          <ul className="space-y-2">
            {Array.isArray(details) ? (
              details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed flex text-justify">
                  <span className="mr-2 mt-1.5">•</span>
                  <span>{detail}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-600 text-sm leading-relaxed flex text-justify">
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

export default WorkItem
