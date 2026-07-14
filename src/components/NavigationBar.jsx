import React, { useState } from 'react';

const NavigationBar = ({ goProject, setShowEmailModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVIGATION BAR - Fixed Top na may Glassmorphism */}
      <nav className="fixed z-20 w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur-md px-16 pp:px-8 ss:px-4 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <span className="font-black text-xl tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors duration-300">
              Christian Works
            </span>
          </div>
          
          {/* DESKTOP NAV LINKS (Nakatago kapag umabot sa 'pp' breakpoint pababa) */}
          <div className="flex items-center gap-8 text-[14px] font-semibold text-neutral-600 pp:hidden">
            {[
              { name: 'Home', href: '#home', active: true },
              { name: 'Services', href: '#services' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'Work', href: '#work' },
              { name: 'About', href: '#about' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  link.active ? 'text-blue-600' : 'hover:text-neutral-900 group'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  link.active ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
            
            <button 
              onClick={goProject} 
              className="relative py-1 hover:text-neutral-900 group transition-colors duration-300"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* RIGHT BUTTONS (Nakatago kapag umabot sa 'pp' breakpoint pababa) */}
          <div className="flex items-center gap-4 pp:hidden">
            {/* Dark Mode Toggle */}
            <button className="p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
            {/* CTA Button */}
            <button 
              onClick={() => setShowEmailModal?.(true)} 
              className="px-5 py-2.5 bg-[#0f172a] text-white font-medium text-sm rounded-full hover:bg-blue-600 shadow-sm hover:shadow-blue-500/20 active:scale-95 transition-all duration-300"
            >
              Get in touch
            </button>
          </div>

          {/* MOBILE CONTROLS (Lalabas lang kapag pumasok sa 'pp' breakpoint pababa) */}
          <div className="hidden pp:flex items-center gap-2 tt:gap-1">
            {/* Dark Mode Icon sa Mobile */}
            <button className="p-2 text-neutral-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
            
            {/* Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU (Susunod sa 'pp' pababa na setup) */}
        <div className={`hidden pp:block absolute top-full left-0 w-full bg-white border-b border-neutral-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6 px-8 ss:px-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col gap-4 font-medium text-neutral-600">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-blue-600 py-2">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-neutral-900 py-2 transition">Services</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-neutral-900 py-2 transition">Pricing</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="hover:text-neutral-900 py-2 transition">Work</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-neutral-900 py-2 transition">About</a>
            <button 
              onClick={() => { goProject(); setIsOpen(false); }} 
              className="text-left hover:text-neutral-900 py-2 transition"
            >
              Projects
            </button>
            <hr className="border-neutral-100 my-2" />
            <button 
              onClick={() => { setShowEmailModal?.(true); setIsOpen(false); }} 
              className="w-full text-center px-5 py-3 bg-[#0f172a] text-white font-medium text-sm rounded-full hover:bg-neutral-800 transition"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;