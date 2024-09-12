import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Grain from '../assets/images/grain.jpg'
const Contact = () => {
  return (
    <div className='py-16 pt-14'>
      <div className='container '>
        <div className='relative z-0 px-10 py-8 overflow-hidden text-center text-black bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl md:text-left lg:mx-[200px]'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{ backgroundImage: `url(${Grain})` }}></div>

          <div className='flex flex-col items-center gap-6 md:flex-row md:gap-20'>
          <div>
          <h2 className='text-xl font-bold'>Let's create something amazing together.</h2>
          <p className='mt-2 font-semibold text-gray-800 text-md'>Ready to bring your next project to life? Let's connect and display how we can achieve  that i can help you achieve your goals.</p>
          </div>
            
            <button className=' items-center gap-1 px-2 py-1.5 text-white bg-black rounded-xl mt-3 md:mr-20'>
              <div className='flex items-center gap-1 md:w-[120px] md:px-2.5 '>
                <span>
                  Contact Me
                </span><FaArrowRight size={12} />
              </div>
            </button>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Contact
