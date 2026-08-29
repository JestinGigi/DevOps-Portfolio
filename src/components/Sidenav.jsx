import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Tooltip } from "react-tooltip";

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    const navItems = [
        { href: '#main', icon: <AiOutlineHome size={18} />, label: 'Home', tooltipId: 'home-tooltip' },
        { href: '#Work', icon: <GrProjects size={18} />, label: 'Work', tooltipId: 'work-tooltip' },
        { href: '#projects', icon: <AiOutlineProject size={18} />, label: 'Projects', tooltipId: 'projects-tooltip' },
        { href: 'https://docs.google.com/document/d/1tv78sG8WVJdtZRE501Nvy4Ev0ss6LGi5SRPM0WqmPdc/edit?usp=sharing', icon: <BsPerson size={18} />, label: 'Resume', tooltipId: 'resume-tooltip', external: true },
        { href: '#contact', icon: <AiOutlineMail size={18} />, label: 'Contact', tooltipId: 'contact-tooltip' },
    ];

    return (
        <div>
            {/* Mobile menu toggle */}
            <button
                onClick={handleNav}
                className='fixed top-4 right-4 z-50 md:hidden p-2 rounded-lg'
                style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(148,163,184,0.15)', backdropFilter: 'blur(12px)' }}
            >
                {nav
                    ? <AiOutlineClose size={20} style={{ color: '#06b6d4' }} />
                    : <AiOutlineMenu size={20} style={{ color: '#94a3b8' }} />
                }
            </button>

            {/* Mobile full-screen nav */}
            {nav && (
                <div
                    className='fixed inset-0 z-40 flex flex-col justify-center items-center gap-3'
                    style={{ background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)' }}
                >
                    <p className='font-mono text-xs mb-6' style={{ color: '#475569', letterSpacing: '0.15em' }}>NAVIGATE</p>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            onClick={handleNav}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className='w-[260px] flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105'
                            style={{
                                background: 'rgba(15,23,42,0.8)',
                                border: '1px solid rgba(148,163,184,0.12)',
                                color: '#94a3b8',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                                e.currentTarget.style.color = '#06b6d4';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.12)';
                                e.currentTarget.style.color = '#94a3b8';
                            }}
                        >
                            <span style={{ color: '#06b6d4' }}>{item.icon}</span>
                            <span className='text-sm font-medium tracking-wide'>{item.label}</span>
                        </a>
                    ))}
                </div>
            )}

            {/* Desktop vertical sidebar */}
            <div className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 z-10 flex-col gap-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        data-tooltip-id={item.tooltipId}
                        className='p-3 rounded-xl transition-all duration-200 hover:scale-110'
                        style={{
                            background: 'rgba(15,23,42,0.85)',
                            border: '1px solid rgba(148,163,184,0.1)',
                            color: '#475569',
                            backdropFilter: 'blur(12px)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
                            e.currentTarget.style.color = '#06b6d4';
                            e.currentTarget.style.boxShadow = '0 0 16px rgba(6,182,212,0.2)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                            e.currentTarget.style.color = '#475569';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {item.icon}
                        <Tooltip
                            id={item.tooltipId}
                            place="right"
                            content={item.label}
                            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidenav;
