import React from 'react'
import { FaStar } from "react-icons/fa";

function Tape() {
  const words = [
    "Performance", "Accessible", "Secure", "Interactive", "Scalable", "User Friendly", "maintainable", "Search optimized", "usable", "Reliable"
  ]
  return (
    <div className='py-16'>
      <div className='text-black bg-gradient-to-r from-emerald-500 to-sky-500'>
        <div className='flex gap-4'>
          {
            words.map((data, i) => (

              <div key={i} className='inline-flex gap-4' >
                <span>{data}</span>
                <FaStar />
              </div>)

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Tape
