import React, {useRef, useState} from "react";
import { LoaderCircle, X } from "lucide-react";
import emailjs from 'emailjs-com';
const ServicesModal = ({ isOpen, onClose }) => {
  const form = useRef();
   const [loading, setLoading] = useState(false);
   const [isValid, setIsValid] = useState(false);
   const [success, setSuccess] = useState(false);
   const [errorMessage, setErrorMessage] = useState(false);
  
   const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  emailjs
    .sendForm(
      "service_s965vmk",
      "template_6v6a7hi",
      form.current,
      "GMbcr1GcvW5jFeN4H"
    )
    .then(
      () => {
        setSuccess(true);
        form.current.reset();
        setLoading(false);

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2500);
      },
      (error) => {
        console.log(error);
        setLoading(false);
        setErrorMessage(true);
      }
    );
};

//  check form
const checkForm = () => {
  const formData = new FormData(form.current);

  const name = formData.get("user_name");
  const contact = formData.get("contact_number");
  const email = formData.get("user_email");
  const project = formData.get("project_type");
  const details = formData.get("project_details");

  if (
    name &&
    contact &&
    email &&
    project &&
    details
  ) {
    setIsValid(true);
  } else {
    setIsValid(false);
  }
};
  
  if (!isOpen) return null;
  return (
    <>
  {success && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm">
    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-200">
      
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        Message Sent!
      </h2>

      <p className="text-sm text-gray-500 text-center">
        Thank you for contacting me. I will get back to you soon.
      </p>

    </div>
  </div>
)}
   
   {errorMessage && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-200">

      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        Message Failed
      </h2>

      <p className="text-sm text-gray-500 text-center">
        Something went wrong. Please try again later.
      </p>

    </div>
  </div>
)}
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Main Glass Card Wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex pp:w-full pp:flex-col gap-5 bg-white relative p-5 rounded-xl shadow-sm"
      >
        {/* Background Decorative Ambient Glow inside the modal */}
      
        {/* Header */}
        <div className=" flex w-full flex-col justify-between">
          <div className=" flex flex-col gap-3 items-start w-full">
            <span className="text-2xl pp:text-lg text-blue-600 font-semibold">
              / Commission Setup
            </span>
            <h2 className="text-4xl font-semibold pp:text-lg tracking-tight mt-1">
              Start a Project
            </h2>
            <p className="text-slate-400 pp:text-sm">
              Tell me a little about what you're building. Let's make it real.
            </p>
          </div>

 <div className="flex gap-2.5 items-center">
  {[
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      ),
      style: 'bg-[#1877f2] border-[#1877f2] text-white shadow-blue-500/10'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      style: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-transparent text-white shadow-pink-500/10'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      style: 'bg-[#0077b5] border-[#0077b5] text-white shadow-blue-700/10'
    }
  ].map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className={`rounded-lg p-3 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${social.style}`}
    >
      {social.icon}
    </a>
  ))}
</div>
          
              
          </div>
       

          <button
            onClick={onClose}
            className=" absolute pp:right-2 pp:top-3 -right-9 -top-4 bg-blue-400 text-white rounded-full px-2 py-2"
          >
            <X size={20} />
          </button>
        

        {/* Content Body */}
        <div className="relative w-full z-10  gap-10">
          
          {/* Right Side: Form (Occupies 3 columns) */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="text-xs flex uppercase tracking-wider text-slate-500 font-semibold mb-2">Name</label>
              <input
                name="user_name"
                type="text"
                placeholder="Your name"
                required
                onChange={checkForm}
                className="w-full rounded-xl border border-white/10 bg-gray-100 px-4 py-3 text-sm text-neutral-400 outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] transition shadow-inner"
              />
              </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="text-xs flex uppercase tracking-wider text-slate-500 font-semibold mb-2">Contact number</label>
                <input
                  name="contact_number"
                  type="number"
                  placeholder="09123456789"
                  required
                  onChange={checkForm}
                  className="w-full rounded-xl border border-white/10 bg-gray-100 px-4 py-3 text-sm text-neutral-400 outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] transition shadow-inner"
                />
              </div>

              <div className="w-full">
                <label className="text-xs flex uppercase tracking-wider text-slate-500 font-semibold mb-2">Email</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your email"
                  onChange={checkForm}
                  className="w-full rounded-xl border border-white/10 bg-gray-100 px-4 py-3 text-sm text-neutral-400 outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] transition shadow-inner"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-full">
                <label className="text-xs flex font-semibold uppercase tracking-wider text-slate-500 mb-2">Services</label>
                <div className="relative">
                  <select defaultValue="" onChange={checkForm} required name="project_type" className="w-full rounded-xl bg-gray-100 border border-white/10 bg px-4 py-3 text-sm text-neutral-500 outline-none focus:border-cyan-500/80 transition cursor-pointer appearance-none">
                    <option value="" disabled>Select Services</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Capstone">Capstone</option>
                    <option value="AI Automations">AI Automations</option>
                    <option value="UIUX">UIUX</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Computer Services">Laptop Cleaning</option>
                    <option value="Microsoft Office Installation & Setup">Microsoft Office Installation & Setup</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-xs">▼</div>
                </div>
              </div>

              <div className="w-full">
                <label className="text-xs flex font-semibold uppercase tracking-wider text-slate-500 mb-2">Budget (Optional)</label>
                <div className="relative">
                 <input
                  onChange={checkForm}
                  required
                  name="budget"
                  type="number"
                  placeholder="5,000 Php-10,000 Php"
                  className="w-full rounded-xl border bg-gray-100 border-white/10 px-4 py-3 text-sm text-neutral-400 outline-none focus:border-cyan-500/80 focus:bg-white/[0.06transition shadow-inner"
                />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-xs">▼</div>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Project Details</label>
              <textarea
                onChange={checkForm}
                required
                name="project_details"
                rows={4}
                placeholder="Tell me about your project specs, timeline, goals..."
                className="w-full resize-none rounded-xl border border-white/10 bg-gray-100 px-4 py-3 text-sm text-neutral-400  outline-none focus:border-cyan-500/80  transition shadow-inner"
              />
            </div>

            {/* Glowing Action Button */}
          <button
            type="submit"
          className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-xs uppercase tracking-widest text-white transition active:scale-[0.99]
          ${
            !isValid || loading
              ? "bg-gray-400 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-lg shadow-cyan-500/20"
          }`}
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </button>
          </form>
        </div>
      </div>
    </div>  
      </>
  );
};

export default ServicesModal;