import React, { useRef, useEffect, useState } from 'react'
import call from '../assets/call.svg'
import email from '../assets/email.png'
import sender from '../assets/sender.png'
import emailjs from 'emailjs-com'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useNavigate } from 'react-router-dom'
import { BiLogoVisualStudio } from 'react-icons/bi'
import { FiFigma } from 'react-icons/fi'
import { BsGithub, BsJavascript } from 'react-icons/bs'

import ServicesModal from './ServicesModal'
import NavigationBar from './NavigationBar'
const Profile = () => {

  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [ismodalOpen, setIsModalOpen] = useState(false);
  // Validation states
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNameAlert, setShowNameAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showSubjectAlert, setShowSubjectAlert] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const dropdownRef = useRef(null);

  const handleExit = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setShowEmailAlert(false);
    setShowNameAlert(false);
    setShowSubjectAlert(false);
  };

  const goProject = () => {
    navigate("/goProject");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    if (!name.trim() && !email.trim() && !subject.trim() && !message.trim()) {
      alert("Please fill in all fields before sending.");
      return;
    }

    if (!name.trim()) return setShowNameAlert(true);
    setShowNameAlert(false);

    if (!email.trim()) return setShowEmailAlert(true);
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) return setShowEmailAlert(true);
    setShowEmailAlert(false);

    if (!subject.trim()) return setShowSubjectAlert(true);
    if (!message.trim()) return alert("Please input a message.");

    emailjs
      .send("service_s965vmk", "template_u38q2zc", {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, "GMbcr1GcvW5jFeN4H")
      .then(
        () => {
          setShowEmailModal(false);
          setShowSuccess(true);
          handleExit();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCallDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f8fafc] text-[#090d16] font-sans overflow-x-hidden relative selection:bg-blue-500/20">
      
      {/* 1. GRID BACKGROUND & LALONG PINALAKING BLUE BLUR AURA */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_65%,transparent_100%)] z-0 pointer-events-none" />
      
      {/* Soft Giant Glowing Orbs */}
      <div className="absolute top-[15%] left-[5%] w-[650px] h-[650px] bg-blue-300/25 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[0%] w-[700px] h-[700px] bg-sky-200/35 rounded-full blur-[160px] pointer-events-none z-0" />
      

      {/*Navigation Bar  */}
     <NavigationBar
     goProject={goProject}
     setShowEmailModal={() => setShowEmailModal(true)}    
     />
     
      {/* 3. HERO BODY WITH MONUMENTAL TYPOGRAPHY */}
    <section className="relative flex justify-center z-10 max-w-7xl mx-auto w-full text-center px-4">
        
{/* Floating Crystals */}
<div>
  

<div
  className="absolute left-4 top-[35%] p-5 bg-gradient-to-br from-white/[0.12] to-white/[0.01] rounded-2xl border-t border-l border-white/30 border-b border-r border-white/10 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] shadow-blue-950/20 flex items-center justify-center animate-bounce"
  style={{ animationDuration: "4s" }}
>
  {/* Glass Reflection Highlight Overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
  
  {/* Icon na may Neon Glow effect sa salamin */}
  <BiLogoVisualStudio className="text-6xl text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.65)] relative z-10" />
</div>
  <div className=" animate-bounce absolute right-8 top-[18%] w-20 h-20 bg-gradient-to-br from-white/[0.12] to-white/[0.01] rounded-xl border-t border-l border-white/30 border-b border-r border-white/10 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] shadow-indigo-950/20 flex items-center justify-center -rotate-12" 
  style={{ animationDuration: '3s' }}>
  {/* Glass Reflection Highlight Overlay */}
  <div className="absolute inset-0 rounded-x bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none"
  />
  
  {/* Figma Icon na may Neon Glass Glow */}
  <FiFigma className="text-4xl text-[#F24E1E] drop-shadow-[0_0_15px_rgba(242,78,30,0.5)] relative z-10" />
</div>
<div className="block absolute right-20 bottom-[25%] w-16 h-16 bg-gradient-to-br from-white/[0.12] to-white/[0.01] rounded-lg border-t border-l border-white/30 border-b border-r border-white/10 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] shadow-slate-950/20 flex items-center justify-center animate-bounce" style={{ animationDuration: '5s' }}>
  {/* Glass Reflection Highlight Overlay */}
  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
  
  {/* JavaScript Icon - May itim na background shadow para lumabas ang hugis kahit transparent ang salamin */}
  <div className="relative w-9 h-9 bg-[#000000] rounded flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(247,223,30,0.4)]">
    <BsJavascript className="text-4xl text-[#f7df1e] absolute scale-[1.15] translate-y-[2px] translate-x-[1px]" />
  </div>
</div>

<div className="absolute left-[80%] top-[3%] p-5 bg-gradient-to-br from-white/[0.12] to-white/[0.01] rounded-2xl border-t border-l border-white/30 border-b border-r border-white/10 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] shadow-blue-500/10 flex items-center justify-center animate-bounce" style={{ animationDuration: "4s" }}>
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
  
  {/* Calendar / Organization Icon */}
  <BsGithub className="text-6xl text-black drop-shadow-[0_0_15px_rgba(37,99,235,0.65)] relative z-10" />
</div>
  <div className="flex items-center justify-center w-full px-4">
  {/* HIGANTENG TEXT LAYOUT */}
  <h1 className="text-[12rem] pp:text-[6.5rem] tt:text-[5rem] xx:text-[4rem] ss:text-[4.2rem] font-[1000] tracking-tighter text-[#0f172a] pp:leading-[6rem] ss:leading-[4rem] leading-[0.85] uppercase select-none font-sans w-full text-center pp:text-left flex flex-col">
    
    {/* DESIGN */}
    <span className="bg-gradient-to-r relative right-56 pp:right-20 from-black to-blue-400 bg-clip-text text-transparent transition-all duration-300">
      DESIGN
    </span>
    
    {/* BUILD */}
    <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#3b82f6] bg-clip-text text-transparent pp:pl-4 transition-all duration-300">
      BUILD
    </span>
    
    {/* CREATE */}
    <span className="relative left-48 pp:left-20 pp:text-right pp:w-full transition-all duration-300">
      CREATE
    </span>
    
  </h1> 
</div>

        {/* Action Controls */}
        <div 
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 w-full relative" ref={dropdownRef}>
          {/* Solid Blue Button */}
          <button
                       
            onClick={() => setIsModalOpen(true)}
            style={{ animationDuration: '5s' }}
            className="px-8 absolut animate-bounce py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-extrabold text-sm rounded-full hover:opacity-95 transition flex items-center gap-2 shadow-xl shadow-blue-600/25 group"
      
          >
            <span>Start a Project</span>
          </button>

          <ServicesModal
          isOpen={ismodalOpen}
          onClose={() =>setIsModalOpen(false)}
          />

          {/* Contact Dropdown Card */}
          {showCallDropdown && (
            <div className="absolute top-full mt-3 z-30 w-full max-w-xs bg-white border border-gray-200 rounded-2xl p-4 shadow-xl text-left animate-in fade-in slide-in-from-top-2 duration-150">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Direct Line</span>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                <span className="text-sm font-mono font-bold text-neutral-900 select-all">09919107871</span>
                <span className="text-[9px] font-extrabold tracking-widest text-blue-600 px-2 py-0.5 bg-blue-50 rounded">DITO</span>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 select-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-neutral-400">&darr; Scroll</span>
        </div> */}

    </div>
      </section>

      <section>
                 {/* 4. INFINITE MARQUEE RUNNING TEXT BANNER */}
      <div className="w-full bg-white border-y border-black/20 py-5 overflow-hidden relative flex select-none">
        
        {/* Isang solong DIV wrapper na gumagamit ng array repetition para sa seamless flow */}
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-4xl font-semibold uppercase tracking-wider text-[#0f172a] w-max flex-shrink-0 pr-12">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-3">Web Development <span className="text-blue-600 text-lg">•</span></span>
              <span className="flex items-center gap-3">Database & Architecture<span className="text-blue-600 text-lg">•</span></span>
              <span className="flex items-center gap-3">UI/UX<span className="text-blue-600 text-lg">•</span></span>
              <span className="flex items-center gap-3">Video Editing <span className="text-blue-600 text-lg">•</span></span>
              <span className="flex items-center gap-3">Virtual Assistance <span className="text-blue-600 text-lg">•</span></span>
            </React.Fragment>
          ))}
        </div>

      </div>
      </section>

      {/* EMAIL OVERLAY & MODAL */}
      {showEmailModal && !showSuccess && (
        <div
        
         className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-neutral-950/20">
          <div 
          className="bg-white border border-gray-200 relative flex flex-col gap-5 p-6 sm:p-8 rounded-2xl w-full max-w-lg shadow-2xl">  
            <button onClick={() => setShowEmailModal(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black">✕</button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 border border-gray-100 rounded-xl"><img className="w-5 h-5" src={email} alt="" /></div>
              <div>
                <h3 className="text-neutral-950 font-bold text-base">Get In Touch</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1"><img className="w-3 h-3" src={sender} alt="" /> christianpretistaheje@gmail.com</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='flex gap-2'>
               <div className='w-full'>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-blue-500 transition" 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Your Name" />
                 {showNameAlert && <p className="text-red-500 mt-1 relative left-1 text-xs">Name is required.</p>}
              </div>
               

            <div className='w-full'>
             <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-blue-500 transition" 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email Address" />
                 {showEmailAlert && <p className="text-red-500 text-xs">Valid Gmail required.</p>}                      
               </div>
              </div>

             
              <input 
                className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-blue-500 transition"
                type="text" 
                name="subject" 
                value={form.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
                />
               {showSubjectAlert && <p className="text-red-500 text-xs">Subject is required.</p>}
              
              <textarea 
                rows={4} 
                className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-blue-500 transition resize-none" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                placeholder="Message Details..." 
                />
              <button 
                type="submit" 
                className="w-full bg-neutral-950 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition"
              >
                Send
             </button>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-neutral-950/20 backdrop-blur-md">
          <div className="bg-white border border-gray-100 p-8 rounded-2xl w-full max-w-sm shadow-2xl text-center flex flex-col items-center">
            <h1 className="text-xl font-black text-neutral-950">Message Sent!</h1>
            <DotLottieReact src="https://lottie.host/d06ee668-4615-472e-adfe-8b39ca67feb8/3ebttVGrf1.lottie" loop={false} autoplay className="w-32 h-32" />
            <button onClick={() => setShowSuccess(false)} className="w-full bg-gray-100 text-neutral-900 py-2.5 rounded-xl text-xs font-bold uppercase transition">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile