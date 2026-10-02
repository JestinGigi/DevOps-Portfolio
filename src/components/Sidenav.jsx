import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/profile';

const Sidenav = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <header className='sticky top-0 z-40 border-b border-neutral-700/70 bg-neutral-800/95 backdrop-blur'>
            <div className='container-x flex h-20 items-center justify-between gap-6'>
                <a href='#top' className='flex items-center gap-2.5 text-xl font-bold text-neutral-100' onClick={() => setOpen(false)}>
                    <span aria-hidden='true' className='font-bold text-secondary'>&lt;/&gt;</span>
                    {profile.name}
                </a>

                <nav aria-label='Primary' className='hidden md:block'>
                    <ul className='flex items-center gap-8 lg:gap-10'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className='text-lg text-neutral-100 transition-colors duration-300 hover:text-accent'>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type='button'
                    className='inline-flex h-11 w-11 items-center justify-center rounded-lg text-neutral-100 md:hidden'
                    aria-expanded={open}
                    aria-controls='mobile-menu'
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen((value) => !value)}
                >
                    {open ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {open && (
                <nav id='mobile-menu' aria-label='Mobile' className='border-t border-neutral-700 bg-neutral-800 md:hidden'>
                    <ul className='container-x flex flex-col py-2'>
                        {navLinks.map((link) => (
                            <li key={link.href} className='border-b border-neutral-700 last:border-0'>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className='block py-4 text-xl font-bold text-neutral-100'
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Sidenav;
