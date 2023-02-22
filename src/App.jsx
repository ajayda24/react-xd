import topbg from './assets/images/topbg1.png'
import chair from './assets/images/chair.png'
import logo from './assets/images/logo.png'
import logo1 from './assets/images/logo.svg'
import playstore from './assets/images/playstore.png'
import apple from './assets/images/apple.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

function App() {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <div className='relative'>
      <div
        className={` absolute  p-4 z-10 text-center bg-[#f6f6f6] transition-all ${
          isNavOpen ? 'min-w-full min-h-fit' : 'hidden'
        } sm:w-0 sm:h-0 sm:p-0`}
      >
        <div className='flex items-center justify-center sm:hidden'>
          <img src={logo1} alt='logo' className='w-32 p-4 mx-auto' />
          <RxCross2 className='sm:hidden' onClick={() => setNavOpen(false)} />
        </div>
        <div className='flex-col  gap-5 p-4 sm:hidden'>
          <h3 className='font-semibold'>About Us</h3>
          <p>Services</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
        <div className=' flex-col  gap-7 sm:hidden'>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>
      <nav className='flex flex-wrap justify-between items-center p-5 px-8 sm:p-6 sm:px-16 absolute min-w-full text-white text-lg'>
        <img src={logo} alt='logo' className='w-24 md:w-32' />
        <div className='flex flex-wrap gap-28 items-center'>
          <div className='hidden md:flex flex-wrap gap-5'>
            <h3 className='font-semibold'>About Us</h3>
            <p>Services</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className='hidden sm:flex flex-wrap gap-7'>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
          <p onClick={() => setNavOpen(true)} className='z-20 sm:hidden'>
            <RxHamburgerMenu className='' />
          </p>
        </div>
      </nav>
      <img src={topbg} alt='top colour' className='min-w-full ' />
      <img
        src={chair}
        alt='chair image'
        className='absolute right-5 top-1 w-1/3'
      />
      <div className='min-w-full p-4 py-12 md:p-16 md:px-28 text-[#20404a]'>
        <h2 className='font-bold  text-xl md:text-2xl'>Submit Your Resume</h2>
        <h2 className='font-normal text-base md:text-lg'>
          Become discoverable for all of our roles
        </h2>
        <div className='mt-16 '>
          <h2 className='text-base md:text-xl font-bold '>Personal Details</h2>
          <p>Please complete the below form and attach a CV.</p>
        </div>

        <div className='form-control w-full max-w-xs mt-10'>
          <label className='label'>
            <span className='label-text'>Email Address</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='flex flex-wrap gap-3 sm:gap-3'>
          <div className='form-control w-full max-w-xs sm:mt-3'>
            <label className='label'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs sm:mt-3'>
            <label className='label'>
              <span className='label-text'>Last Name</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs sm:mt-3'>
            <label className='label'>
              <span className='label-text'>Telephone</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
            <label className='label'>
              <span className='label-text-alt'>
                Please include your country and area code
              </span>
            </label>
          </div>
        </div>
        <div className='form-control w-full max-w-xs sm:mt-3'>
          <label className='label'>
            <span className='label-text'>Upload CV</span>
          </label>
          <input
            type='file'
            className='file-input w-full max-w-xs'
            accept='.txt .pdf .docx'
          />
          <label className='label'>
            <span className='label-text-alt'>
              Select resume file (TXT, PDF or Word DOC)
            </span>
          </label>
        </div>
        <button className='btn btn-info my-4 w-36 text-white '>Submit</button>
      </div>
      <div className='bg-[#f6f6f6] min-w-full p-8 px-12 sm:p-12 sm:px-16 gap-10 flex flex-col sm:flex-row justify-around'>
        <div className='flex-1'>
          <img src={logo1} alt='Logo' className='w-32' />
          <p className=' mt-6 leading-relaxed'>
            KIVLIK is a mobile steam car wash company, which offers premium car
            wash and detailing services at your doorstep. Conveniently book a
            car wash with a few taps on your phone.
            <br /> KIVLIK has several packages to meet your budget and
            requirements. Conveniently book a carwash with a few taps using the
            KIVLIK App or website.
          </p>
        </div>
        <div className='flex-1'>
          <div className='sm:w-fit sm:mx-auto'>
            <h3 className='text-lg font-semibold'>COMPANY</h3>
            <div className='mt-3 '>
              <p className='p-1'>Who we are</p>
              <p className='p-1'>Blog</p>
              <p className='p-1'>Careers</p>
              <p className='p-1'>Report Fraud</p>
              <p className='p-1'>Contact</p>
              <p className='p-1'>Investor Relations</p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold'>GOT QUESTIONS?</h3>
          <h3 className='text-2xl py-4 font-semibold'>Help Center</h3>
          <h3 className='text-base py-4 '>Follow Us</h3>
          <div className='flex gap-3'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
          <div className='flex gap-3 py-5'>
            <img src={apple} alt='' className='w-36' />
            <img src={playstore} alt='' className='w-36' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
