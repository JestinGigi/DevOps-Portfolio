import React from 'react'

const EducationItem = ({ year, duration, institution, location, degree, details }) => {
  return (
    <div className="relative pb-14 last:pb-0">

      {/* Mobile Layout */}
      <div className="md:hidden relative pl-7">
        <div className='absolute left-0 top-2 bottom-0 w-px' style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.5), transparent)' }} />
        <div className='absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2'
          style={{ background: '#10b981', borderColor: '#030712', boxShadow: '0 0 8px rgba(16,185,129,0.6)' }} />

        <div className='card-glow rounded-xl p-5' style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(12px)' }}>
          <h2 className='font-bold text-base mb-1' style={{ color: '#f1f5f9' }}>{degree}</h2>
          <p className='font-mono text-xs font-semibold tracking-wider mb-1' style={{ color: '#10b981' }}>{institution}</p>
          <div className='flex flex-wrap gap-2 mb-3'>
            <span className='font-mono text-xs px-2.5 py-0.5 rounded-full' style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}>
              {year} · {duration}
            </span>
            <span className='font-mono text-xs px-2.5 py-0.5 rounded-full' style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}>
              {location}
            </span>
          </div>
          <ul className='space-y-2'>
            {(Array.isArray(details) ? details : [details]).map((detail, i) => (
              <li key={i} className='flex items-start gap-2 text-sm leading-relaxed text-justify' style={{ color: '#94a3b8' }}>
                <span className='mt-1.5 w-1 h-1 rounded-full flex-shrink-0' style={{ background: '#10b981' }} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-[1fr_40px_1fr] gap-0 items-start">
        {/* Left: institution + meta */}
        <div className='pr-8 text-right pt-5'>
          <p className='font-mono text-xs font-bold tracking-widest mb-1' style={{ color: '#10b981' }}>{institution}</p>
          <p className='text-xs mb-1' style={{ color: '#475569' }}>{location}</p>
          <div className='flex justify-end gap-1.5'>
            <span className='font-mono text-xs px-2.5 py-0.5 rounded-full' style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}>
              {year}
            </span>
            <span className='font-mono text-xs px-2.5 py-0.5 rounded-full' style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}>
              {duration}
            </span>
          </div>
        </div>

        {/* Center: timeline */}
        <div className='relative flex flex-col items-center'>
          <div className='w-3 h-3 rounded-full z-10 mt-6'
            style={{ background: '#10b981', boxShadow: '0 0 10px rgba(16,185,129,0.7)' }} />
          <div className='w-px flex-1 mt-1' style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.4), transparent)' }} />
        </div>

        {/* Right: degree + details */}
        <div className='pl-8'>
          <div className='rounded-xl p-6' style={{
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(148,163,184,0.08)',
            backdropFilter: 'blur(12px)',
            transition: 'border-color 0.3s ease'
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(148,163,184,0.08)'}
          >
            <h2 className='text-lg font-bold mb-4' style={{ color: '#f1f5f9' }}>{degree}</h2>
            <ul className='space-y-2.5'>
              {(Array.isArray(details) ? details : [details]).map((detail, i) => (
                <li key={i} className='flex items-start gap-2 text-sm leading-relaxed text-justify' style={{ color: '#94a3b8' }}>
                  <span className='mt-1.5 w-1 h-1 rounded-full flex-shrink-0' style={{ background: '#10b981' }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationItem
