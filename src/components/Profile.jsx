import React, { useRef,useEffect,useState } from 'react'
import profile from '../assets/profile.png'
import Check from '../assets/check.png'
import Hand from '../assets/hand.png'
import location from '../assets/location.png'
import call from '../assets/call.svg'
import email from '../assets/email.png'
// import useOnlineStatus from '../Hook/useOnlineStatus'
import { useNavigate } from 'react-router-dom'
import sender from '../assets/sender.png'
import emailjs from 'emailjs-com'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Profile = () => {
   
    const navigate = useNavigate();
    const [setEmail, setshowEmail] = useState(false);
    // const isOnline = useOnlineStatus();
    
    // validation alert
    const [showsucess, setshowsucess] = useState(false);
    const [showNameAlert, setshowNameAlert] = useState(false);
    const [showemail, setshowemail] = useState(false);
    const [showSubject, setshowSubject] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    
    const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

   const handleExit = () =>{
    setForm({
    name: "",
    email: "",
    subject: "",
    message: "",
    });
    setshowemail(false);
    setshowNameAlert(false);
    setshowSubject(false);
   }
    
  const goProject = () => {
    navigate("/goProject");
    };

    // server side
    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //  validation
   const { name, email, subject, message } = form;

  if (!name.trim() && !email.trim() && !subject.trim() && !message.trim()) {
    alert("Please fill in all fields before sending.");
    return;
  }


  if (!name.trim()) {
    setshowNameAlert(true);
    return;
  }
  setshowNameAlert(false);
  
  if (!email.trim()) {
    setshowemail(true);
    return;
  }else{
    const gmailRegex =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)){
      setshowemail(true);
      return;
    }
  } setshowemail(false);
  
  if (!subject.trim()) {
    setshowSubject(true);
    return;
  }
  if (!message.trim()) {
    alert("Please input a message.");
    return;
  }

    emailjs
      .send(
        "service_s965vmk",   
        "template_u38q2zc", 
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "GMbcr1GcvW5jFeN4H"   
      )
      .then(
        (result) => {
          // alert("✅ Message sent successfully!");
          // console.log(result.text);
          setshowEmail(false);
          setshowsucess(true);
          
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error.text);
        }
      );
  };

  
   
  // dropdown menu
  const [setcall, setshowcall] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowcall(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
  <>
   <div className='flex items-center gap-5'>
     <img className='w-36 h-36 tt:w-36 tt:h-36 object-contain' src={profile} alt="" />
 
     <div className='flex flex-col tt:gap-0'>
     <div className='flex items-center gap-2 tt:relative tt:top-3'>
      <h1 className='text-2xl xx:text-[17px] tt:text-xl font-bold tt:text-nowrap duration-200'>Christian Pretista Heje</h1>
      <img className='w-6 h-6 ' src={Check} alt="" />
    </div>
    <div className='flex items-center gap-1 tt:relative top-3'>
       <img className='w-4 h-4' src={location} alt="" />
       <p className=' xx:text-[15px] ss:text-[12px]'>Irosin, Sorsogon</p>
        
       {/* user if active */}
      <div className='flex gap-1 items-center xx:left-2  relative left-10'>
        {/* <h1 className=' xx:text-[15px] ss:text-[12px] text-[15px]'>Status : {isOnline ? 'Online' : 'Offline'}</h1> */}
      </div>
     </div>
       <div>
        <p className='relative left-1 font-semibold text-green-500 animate-pulse'>Graduating...</p>
       </div>
       <div className='flex gap-5'>
       <p className='tt:relative xx:text-[18px] xx:top-3 top-2 text-[20px] font-manrope leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 font-bold tt:text-lg tt:duration-200 text-nowrap'>FrontEnd Developer</p> 
      <a target='_blank'  href='https://docs.google.com/document/d/14q0y_qkJVN4aRrdD41YFinforR4oC-dPA4fR_OCH9dE/edit?usp=drive_link' className=' flex items-center relative tt:right-5 tt:top-2 duration-200 underline gap-1 px-3 h-7 font-semibold'><img className='w-5 h-5' src={Hand} alt="" />Resume</a>
        
        </div>
       <div className='flex items-start mt-2 gap-2 pp:flex-wrap relative tt:top-2' ref={dropdownRef}>
         <button onClick={() => setshowcall((prev) => !prev)} className='bg-white relative rounded-lg  xx:flex-grow xx:max-w-[12rem] font-semibold text-black px-8 tt:px-9 py-1 text-[12px] transition-transform duration-200 hover:-translate-y-1'>
         <img className='w-4 h-4 absolute left-3 tt:w-4 tt:h-4 animate-pulse' src={call} alt="" />
          Contact Me</button>
         
        { setcall && (
    <div className='absolute w-full max-w-[250px] z-10 top-9 xx:right-16'>
     <div className='bg-neutral-950 max-w-[23rem] flex-grow relative border border-neutral-600 rounded-lg p-5'>
        <div className='flex items-center justify-center gap-2'>
          <button onClick={() =>setshowcall(false)} className='absolute top-0 right-2 border border-neutral-600 mt-2 text-white rounded-full h-6 w-6 font-bold text-[15px]'>X</button>
        <h1 className='text-lg font-semibold'>Contact Number</h1>
        </div>
        <div className='flex justify-center'>
        <div className='flex flex-col max-w-[15rem] flex-grow relative p-2 justify-center'> 
       <h1 className='text-lg'><li className=' marker:animate-pulse marker:text-green-500'>09919107871</li></h1>
       <h1 className=' absolute top-1 right-0 text-[15px] mt-2 xx:hidden font-semibold'>DITO</h1>
       <h1 className='text-lg'><li className='marker:text-green-500'>09626947248</li></h1>
       <h1 className='absolute bottom-0 right-0 top-8 text-[13px] mt-2 h-6 xx:hidden font-semibold '>SMART</h1>
       </div>
       </div>
     </div>
   </div>  
   )}

   {/* Send Email */}
   {setEmail && !showsucess && (
   <div className='fixed inset-0 z-10 flex justify-center items-center '>
   <div className='bg-white relative flex flex-col gap-5 p-10 rounded-lg w-[30rem]'>
    <button onClick={() => setshowEmail(false)} className='absolute text-black w-8 h-8 rounded-full font-bold bg-neutral-100 shadow-lg text-[15px] -right-2 -top-5 mt-2'>X</button>
    <div className='flex items-center justify-between'>
    <img className='w-12 h-12 drop-shadow-lg' src={email} alt="" />
    <div className='flex items-center'>
    <img className='w-5 h-5' src={sender} alt="" />
    <p className='text-neutral-500 font-semibold text-[14px] '>christianpretistaheje@gmail.com</p>
   </div>
    </div>

    {/* input */}
    <input className='border-b outline-none relative text-sm pb-1 text-gray-400' type="name" name="name" value={form.name} onChange={handleChange} required id="" placeholder='Your Name' />
    { showNameAlert && <h1 className='text-red-600 font-medium text-[14px]'>Please input Your Name!</h1>}
    <input className='border-b  outline-none text-sm pb-1 text-gray-400' type="email" name="email" value={form.email} onChange={handleChange} required id="" placeholder='Email' />
     { showemail && <p className='text-red-600 text-sm font-medium'>Please input a valid Gmail address!</p> }
    <div className='border-b border-gray-300'>
     <textarea rows={2} className=' resize-none outline-none border-none text-sm w-full text-gray-400 ' name='subject' value={form.subject} onChange={handleChange} required  placeholder='Subject'/>
    </div>
    { showSubject && <p className='text-red-600 font-medium text-sm'>Filled this required</p>}
  

    {/* message */}
    <div className=''>
     <textarea rows={5} className=' border-none outline-none resize-none px-2 py-7 rounded-lg text-sm w-full bg-gray-200 text-gray-600 ' name='message' value={form.message} onChange={handleChange} placeholder='Type message here!'/>
    </div>
    <div className='flex justify-between'>
      <button onClick={handleExit} className='text-black/80 font-semibold'>Clear</button>
    <button type='button' onClick={handleSubmit} className='bg-black px-10 py-2 rounded-full font-semibold'>Send</button>
    </div>
   </div>
   </div>
)}
{/* alert message for email sent */}
{showsucess && (
<div className='fixed inset-0 flex justify-center items-center'>
  <div className='bg-white p-5 relative rounded-lg w-[25rem]'>
   <h1 className='text-green-600 font-medium text-2xl text-center'>Email Sent</h1>
   <div className='flex flex-col justify-center items-center mt-5'>
     <DotLottieReact
      src="https://lottie.host/d06ee668-4615-472e-adfe-8b39ca67feb8/3ebttVGrf1.lottie"
      loop={false} 
      autoplay
      className='w-48 h-48'
    />
    <button onClick={() =>setshowsucess(false)} className='text-white px-6 py-2 rounded-full bg-blue-600'>Thank You</button>
    </div>
  </div>
</div>
)}
    <button onClick={() =>setshowEmail(true)} className=' border border-neutral-600 px-8 tt:px-9 pp:px-8 py-1 rounded-lg font-semibold text-[12px] xx:max-w-[12rem] transition-transform duration-200 hover:-translate-y-1 xx:flex-grow '>Send Email</button>
   <div class="grid flex-grow gap-8">
    <div class="relative grid group">
      <div class="absolute  -inset-0.5 animate-pulse bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button onClick={goProject} class="relative pp:justify-center tt:px-1 px-8 py-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span class="flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span class="pr-2 text-gray-100 text-[14px] tt:text-[12px] text-nowrap">View MyProject</span>
        </span>
        <span class="pl-5 text-indigo-400 text-[14px] tt:text-[12px] group-hover:text-gray-100 transition duration-200">All &rarr;</span>
      </button>
    </div>
  </div>
       </div>
    </div>
   </div>
   
  </>
  )
}

export default Profile