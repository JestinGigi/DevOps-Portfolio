import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ProjectItem = ({ img, title, subtitle, link, showModal = false, description = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className='group relative rounded-2xl overflow-hidden cursor-pointer'
        style={{
          background: 'rgba(15,23,42,0.8)',
          border: '1px solid rgba(148,163,184,0.1)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
          e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image */}
        <div className='relative h-52 overflow-hidden'>
          <img
            src={img}
            alt={title}
            className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50'
          />
          {/* Overlay gradient always present */}
          <div className='absolute inset-0' style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 60%)' }} />
        </div>

        {/* Card body */}
        <div className='p-5'>
          <h3 className='font-bold text-base mb-1' style={{ color: '#f1f5f9' }}>{title}</h3>
          <p className='text-sm mb-4' style={{ color: '#475569' }}>{subtitle}</p>

          {showModal ? (
            <button
              onClick={openModal}
              className='font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105'
              style={{
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.3)',
                color: '#06b6d4',
              }}
            >
              View Details →
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className='font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 inline-block'
              style={{
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.3)',
                color: '#06b6d4',
              }}
            >
              View on GitHub →
            </a>
          )}
        </div>

        {/* Hover center overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
          <p className='font-mono text-xs tracking-widest mb-2' style={{ color: '#06b6d4' }}>OPEN PROJECT</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{
              background: '#0f172a',
              border: '1px solid rgba(6,182,212,0.25)',
              boxShadow: '0 0 60px rgba(6,182,212,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className='relative h-56'>
              <img src={img} alt={title} className='w-full h-full object-cover brightness-75' />
              <div className='absolute inset-0' style={{ background: 'linear-gradient(to top, #0f172a 0%, transparent 60%)' }} />
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 p-2 rounded-xl transition-all duration-200 hover:scale-110'
                style={{
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(148,163,184,0.15)',
                  color: '#94a3b8',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <AiOutlineClose size={16} />
              </button>
            </div>

            {/* Modal content */}
            <div className='p-8'>
              <p className='font-mono text-xs tracking-widest mb-2' style={{ color: '#06b6d4' }}>PROJECT</p>
              <h2 className='text-2xl font-bold mb-4' style={{ color: '#f1f5f9' }}>{subtitle}</h2>
              <p className='text-sm leading-relaxed mb-8' style={{ color: '#94a3b8' }}>{description}</p>
              <button
                onClick={closeModal}
                className='font-mono text-xs px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105'
                style={{
                  background: 'rgba(148,163,184,0.08)',
                  border: '1px solid rgba(148,163,184,0.15)',
                  color: '#94a3b8',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectItem
