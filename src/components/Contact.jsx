import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='py-16'>
          <div className='max-w-[1040px] m-auto px-4 md:px-20'>
            <div className="mb-12">
              <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-2'>
                Contact
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#001b5e] to-blue-400 mx-auto rounded-full"></div>
            </div>
            <form action="https://formcarry.com/s/yWiPqmqA_Lp" method='POST' encType="multipart/form-data">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
                    </div>  
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                    </div>
                    <div className='flex flex-col md:col-span-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="email" name='email' />
                    </div>
                    <div className='flex flex-col md:col-span-2'><label className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
                    </div>
                    <div className='flex flex-col md:col-span-2'><label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10'name='message' />
                    </div>
                    <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg md:col-span-2'>Send Message</button> 
                </div>
            </form>
          </div>
        </div>
    )
}

export default Contact