import React, { Fragment } from 'react'
import memo from "../assets/images/memoji-computer.png";
import Sectionheader from './Sectionheader';
import grain from "../assets/images/grain.jpg";
import Card from './Card';
function Testimonials() {
  const testimonials = [
    {
      name: "Alex Farnendes",
      position: 'Marketing manager @ Teskstart ',
      text: "Alex was an instrumental in transfeoming ouw website into a powerfull website marks all the functionality",
      avatar: memo,
    },
    {
      name: "Mark Jam",
      position: 'Marketing manager @ Teskstart ',
      text: "I just wanted to share a quick note and let you know that you guys do a really good job. I am glad I decided to work with you. ",
      avatar: memo,
    },
    {
      name: "Gam Jam",
      position: 'Marketing manager @ Teskstart ',
      text: "My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.",
      avatar: memo,
    },
    {
      name: "Sam Jam",
      position: 'Marketing manager @ Teskstart ',
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      avatar: memo,
    },
    {
      name: "Kam Jam",
      position: 'Marketing manager @ Teskstart ',
      text: "Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!",
      avatar: memo,
    },
    {
      name: "Ram Jam",
      position: 'Marketing manager @ Teskstart ',
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      avatar: memo,
    },



  ]
  return (
    <div className='py-16'>
      <div className='container'>
        <Sectionheader title="Happy Clients" next=" What Clients say about Me" description=" Don't just take my word for it. See what my Clients have to say about my work." />

        {/* masking of image is been done her in tailwinf=d npm  we can finf the docs */}
        <div className='flex px-6 mt-16 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4'>

          <div className='flex flex-none gap-8 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]'>
            {[...new Array(4)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {
                  testimonials.map((data) => (
                    <Card key={data.name} className="max-w-[300px] hover:-rotate-3 transition duration-300">
                      <div className='flex items-center gap-4'>
                        <img src={data.avatar} alt={data.name} className='bg-gray-800 rounded-full w-14' />
                        <div className=''>
                          <div className='font-semibold '>{data.name}</div>
                          <div className='text-sm '>{data.position}</div>
                        </div>
                      </div>

                      <p className='mt-2 text-sm md:text-md'>{data.text}</p>

                    </Card>

                  ))
                }
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
