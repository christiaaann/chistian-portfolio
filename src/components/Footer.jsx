import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-12 px-6 border-t border-slate-100 font-sans">
      {/* 
        Default: flex-row (Desktop)
        pp (max-width: 838px): flex-col (Mobile & Tablet stack)
      */}
      <div className="max-w-7xl mx-auto flex flex-row pp:flex-col justify-between items-start gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-3 flex-1 min-w-[250px]">
          <h2 className="text-xl font-bold   text-slate-900 tracking-wide">
            Christian Pretista Heje
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            Thank you for visiting. I am open to new opportunities and collaborations. Feel free to reach out for any projects or inquiries.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Contact Details</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:christianheje001@gmail.com" className="hover:text-blue-600 transition duration-200">
                christianheje001@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:09919107871" className="hover:text-blue-600 transition duration-200">
                09919107871
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-tight">Purok 1, Brgy. Tabon-tabon, Irosin, Sorsogon, 4707</span>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Connect</h3>
          <p className="text-sm text-slate-500">Find me on my social media accounts:</p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-transparent text-slate-500 transition duration-200" aria-label="Facebook">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-transparent text-slate-500 transition duration-200" aria-label="GitHub">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-100 flex flex-row pp:flex-col justify-between items-center pp:items-start gap-4 text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Christian Heje. All rights reserved.</p>
        <p className="hover:text-slate-600 transition">Designed with precision</p>
      </div>
    </footer>
  )
}

export default Footer