import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/profile';

const Sidenav = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const progressRef = useRef(null);

    useEffect(() => {
        const ids = ['top', ...navLinks.map((link) => link.href.slice(1))];
        const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
        // A section is active while it crosses the middle band of the viewport.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : `#${entry.target.id}`);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

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
                                <a
                                    href={link.href}
                                    className='nav-link text-lg'
                                    aria-current={active === link.href ? 'location' : undefined}
                                >
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
                                    aria-current={active === link.href ? 'location' : undefined}
                                    className={`block py-4 text-xl font-bold ${active === link.href ? 'text-accent' : 'text-neutral-100'}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <div
                ref={progressRef}
                aria-hidden='true'
                className='absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-secondary'
            />
        </header>
    );
};

export default Sidenav;
