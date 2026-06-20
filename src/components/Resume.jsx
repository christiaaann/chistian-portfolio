import { useRef } from "react";
import resume from "../assets/Christian_Pretista_Heje.pdf";
const Resume = () => {

  const iframeRef = useRef(null);    
  const pdfSrc = `${resume}#toolbar=0&navpanes=0&scrollbar=150`;
 
const handlePrint = () => {
  const printWindow = window.open(resume, "_blank");
  if (printWindow) {
    printWindow.onload = () => {
      printWindow.print();
    };
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex  items-center justify-center p-4 lg:p-12 relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="w-full justify-evenly flex pp:flex-col items-center gap-2">
        
        {/* LEFT COLUMN: Landing Info & Download Action (40% Width sa Desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-center lg:text-left px-4">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Available for Opportunities
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Christian Pretista Heje
            </h1>
            <p className="text-lg flex flex-col font-medium bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to my resume showcasing my skills and projects.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0 w-full">
            {/* Primary Download Button */}
            <a
              href={resume}
              download="Christian_Pretista_Heje_Resume.pdf"
              className="flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-2xl border border-slate-800 hover:border-slate-700 active:scale-[0.98] transition-all duration-200 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-14.326 0C3.768 7.44 3 8.375 3 9.456v6.294a2.25 2.25 0 0 0 2.25 2.25h1.091M12 10.125h.008v.008H12v-.008Z" />
              </svg>
              Print Document
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Document Viewer (60% Width sa Desktop) */}
        <div className="w-[50rem] pp:w-full ">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-3 md:p-4 shadow-2xl relative group transition-all duration-300 hover:border-slate-700/60">
            
            {/* Top Window Bar Mac-style dots para maging mukhang modern dashboard component */}
            <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-800/60 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/40" />
                <span className="w-3 h-3 rounded-full bg-amber-500/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
              </div>
              <span className="text-xs text-slate-500 font-mono tracking-wider">PREVIEW_MODE.PDF</span>
            </div>

            {/* The Actual PDF Document Frame */}
        <div className="rounded-2xl overflow-hidden bg-slate-950/50 p-1.5 border border-slate-950 shadow-inner relative h-[550px] md:h-[680px]">
  <iframe
    src={pdfSrc}
    title="Resume PDF Frame"
    /* MGA PINALITANG UTOS:
      1. absolute top-0 left-0 w-full h-full - para nakalapat ang iframe sa buong box.
      2. scale-[1.4] - Dito mo kokontrolin ang laki! (1.4 = 140% ang laki ng resume mo). Pwede mong gawing 1.3 o 1.5 depende sa trip mo.
      3. origin-top - Para siguradong nakapako sa itaas ang simula ng resume at hindi lumutang sa gitna.
    */
    className="absolute top-0 left-0 w-full h-full scale-[1.0] origin-top border-none block"
    style={{ colorScheme: 'light' }}
  />
</div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;