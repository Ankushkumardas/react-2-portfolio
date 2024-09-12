import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  const footeritems=[
    {
      title:'Youtube',
      href:'#',
    },
    {
      title:'Twitter',
      href:'#',
    },
    {
      title:'Instagram',
      href:'#',
    },
    {
      title:'LinkedIn',
      href:'#',
    },
  ]
  return (
    <div className='relative -z-10 overflow-x-clip'>
    <div className='absolute h-[400px]  w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
      <div className='flex flex-col items-center py-6 mx-16 text-sm border-t border-white/15 '>
        <div className='mb-5 text-white/55 '>&copy; 2024 All Rights Reserved</div>
        <nav className='flex flex-col items-center space-y-8 '>
         {footeritems.map((data)=>(
          <div key={data.title}>
            <a href={data.href} className='flex items-center gap-2 font-semibold fornt'>
              <span>
              {data.title}
              </span><FaArrowRight/>
            </a>
          </div>
         ))}
        </nav>
      </div>
      </div>
    </div>
  )
}

export default Footer
