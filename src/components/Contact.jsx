import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='py-24' style={{ background: 'linear-gradient(180deg, #030712 0%, #0d1117 100%)' }}>
            <div className='max-w-[1040px] m-auto px-4 md:px-20'>
                <div className="mb-16 text-center">
                    <p className='font-mono text-xs tracking-widest mb-3' style={{ color: '#3b82f6' }}>05 / CONTACT</p>
                    <h2 className='text-4xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9' }}>Get In Touch</h2>
                    <div className='w-16 h-0.5 mx-auto rounded-full mb-4' style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />
                    <p className='text-sm' style={{ color: '#475569' }}>Have a project in mind or want to connect? Drop me a message.</p>
                </div>

                <div className='max-w-2xl mx-auto'>
                    <form
                        action="https://formcarry.com/s/yWiPqmqA_Lp"
                        method='POST'
                        encType="multipart/form-data"
                        className='rounded-2xl p-8'
                        style={{
                            background: 'rgba(15,23,42,0.6)',
                            border: '1px solid rgba(148,163,184,0.08)',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-1.5'>
                                <label className='font-mono text-xs tracking-widest' style={{ color: '#475569' }}>NAME</label>
                                <input
                                    className='input-dark rounded-xl p-3.5 text-sm'
                                    type="text"
                                    name="name"
                                    placeholder="Jestin Gigi"
                                />
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <label className='font-mono text-xs tracking-widest' style={{ color: '#475569' }}>PHONE</label>
                                <input
                                    className='input-dark rounded-xl p-3.5 text-sm'
                                    type="text"
                                    name='phone'
                                    placeholder="+1 234 567 890"
                                />
                            </div>
                            <div className='flex flex-col gap-1.5 md:col-span-2'>
                                <label className='font-mono text-xs tracking-widest' style={{ color: '#475569' }}>EMAIL</label>
                                <input
                                    className='input-dark rounded-xl p-3.5 text-sm w-full'
                                    type="email"
                                    name='email'
                                    placeholder="hello@example.com"
                                />
                            </div>
                            <div className='flex flex-col gap-1.5 md:col-span-2'>
                                <label className='font-mono text-xs tracking-widest' style={{ color: '#475569' }}>SUBJECT</label>
                                <input
                                    className='input-dark rounded-xl p-3.5 text-sm'
                                    type="text"
                                    name='subject'
                                    placeholder="Let's work together"
                                />
                            </div>
                            <div className='flex flex-col gap-1.5 md:col-span-2'>
                                <label className='font-mono text-xs tracking-widest' style={{ color: '#475569' }}>MESSAGE</label>
                                <textarea
                                    className='input-dark rounded-xl p-3.5 text-sm resize-none'
                                    rows='8'
                                    name='message'
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <div className='md:col-span-2'>
                                <button
                                    type='submit'
                                    className='w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]'
                                    style={{
                                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                        color: '#f1f5f9',
                                        boxShadow: '0 4px 24px rgba(6,182,212,0.25)',
                                    }}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <div className='mt-16 text-center'>
                <p className='font-mono text-xs' style={{ color: '#1e293b' }}>
                    Jestin Gigi · DevOps Engineer · {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Contact
