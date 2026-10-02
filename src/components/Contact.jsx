import React from 'react'
import { FiArrowRight, FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const directLinks = [
    { label: 'Email', text: profile.email, href: `mailto:${profile.email}`, icon: FiArrowRight },
    { label: 'LinkedIn', text: 'linkedin.com/in/jestingigi11', href: profile.linkedin, icon: FiArrowUpRight, external: true },
    { label: 'GitHub', text: 'github.com/JestinGigi', href: profile.github, icon: FiArrowUpRight, external: true },
    { label: 'Resume', text: 'Download PDF', href: profile.resume, icon: FiDownload, download: profile.resumeFileName },
]

const Field = ({ id, label, optional = false, children }) => (
    <div>
        <label htmlFor={id} className='block text-base font-bold text-neutral-100'>
            {label}
            {optional && <span className='ml-2 font-normal text-neutral-400'>(optional)</span>}
        </label>
        <div className='mt-1'>{children}</div>
    </div>
)

const Contact = () => {
    return (
        <section id='contact' aria-labelledby='contact-title' className='section bg-neutral-700/40'>
            <div className='container-x grid gap-16 lg:grid-cols-2 lg:gap-20'>
                <Reveal>
                    <span className='hero-rule mb-8 w-24' aria-hidden='true' />
                    <h2 id='contact-title' className='heading-2'>
                        Interested in working together? Let’s{' '}
                        <span className='whitespace-nowrap'>
                            talk
                            <FiArrowRight aria-hidden='true' className='ml-3 inline-block align-[-0.12em] text-secondary' />
                        </span>
                    </h2>
                    <p className='mt-6 max-w-xl'>
                        Reach out about SRE and DevOps roles, reliability work or anything on this page.
                    </p>

                    <ul className='mt-10 grid gap-7 sm:grid-cols-2'>
                        {directLinks.map((link) => {
                            const Icon = link.icon
                            return (
                            <li key={link.label}>
                                <p className='mb-2 text-sm font-bold uppercase tracking-[0.08em] text-neutral-300'>{link.label}</p>
                                <a
                                    href={link.href}
                                    className='arrow-link break-all text-base sm:break-normal'
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    download={link.download}
                                >
                                    {link.text}
                                    <Icon aria-hidden='true' size={18} />
                                    {link.external && <span className='sr-only'>(opens in a new tab)</span>}
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </Reveal>

                <Reveal as='form' delay={150} action='https://formcarry.com/s/yWiPqmqA_Lp' method='POST' encType='multipart/form-data' className='grid gap-9 lg:pt-4'>
                    <Field id='contact-name' label='Your name'>
                        <input id='contact-name' className='field-input' type='text' name='name' autoComplete='name' required />
                    </Field>
                    <Field id='contact-email' label='Your email address'>
                        <input id='contact-email' className='field-input' type='email' name='email' autoComplete='email' required />
                    </Field>
                    <Field id='contact-subject' label='Subject' optional>
                        <input id='contact-subject' className='field-input' type='text' name='subject' />
                    </Field>
                    <Field id='contact-message' label='Message'>
                        <textarea id='contact-message' className='field-input min-h-36 resize-y' name='message' rows='4' required />
                    </Field>
                    <div>
                        <button type='submit' className='btn btn-primary w-full sm:w-auto'>
                            Send message <FiArrowRight aria-hidden='true' size={20} />
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact
