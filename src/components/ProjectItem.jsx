 import React, { useState } from 'react'

const ProjectItem = ({ img, title, subtitle,link, showModal = false, description = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'> 
          <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 w-full h-full object-cover'/>
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
              <p className="pb-4 pt-2 text-white text-center"></p>
              {showModal ? (
                <button onClick={openModal} className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-100 transition-colors">
                    More Info
                </button>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-100 transition-colors">
                    More Info
                  </p>
                </a>
              )}
          </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative" onClick={(e) => e.stopPropagation()}>
            {/* Modal Content */}
            <div className="space-y-4">
              <img src={img} alt={title} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="text-3xl font-bold text-[#001b5e]">{subtitle}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
              
              <div className="pt-4 flex justify-center">
                <button 
                  onClick={closeModal}
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectItem
