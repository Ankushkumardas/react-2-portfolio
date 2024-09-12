
import Sectionheader from './Sectionheader'
import Card from './Card'
import bookimage from "../assets/images/book-cover.png";
import Javascript from "../assets/icons/square-js.svg";
import Html from "../assets/icons/html5.svg";
import Css from "../assets/icons/css3.svg";
import Github from "../assets/icons/github.svg";
import Chrome from "../assets/icons/chrome.svg";
import React from "../assets/icons/react.svg";
import mapimage from '../assets/images/map.png'
import smile from '../assets/images/memoji-smile.png'
import Toolboxitems from './Toolboxitems';
const toolboxitems = [
  {
    title: 'Javascript',
    icon: Javascript,
  },
  {
    title: 'HTML5',
    icon: Html,
  },
  {
    title: 'CSS3',
    icon: Css,
  },
  {
    title: 'React',
    icon: React,
  },
  {
    title: 'Github',
    icon: Github,
  },
  {
    title: 'Chrome',
    icon: Chrome,
  },

]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photogtraphy',
    emoji: '🎨',
  },
  {
    title: 'Gamming',
    emoji: '🎨',
  },
  {
    title: 'Hiking',
    emoji: '🎨',
  },
  {
    title: 'Music',
    emoji: '🎨',
  },
  {
    title: 'Fitness',
    emoji: '🎨',
  },
  {
    title: 'Reading',
    emoji: '🎨',
  },

]
const About = () => {

  return (
    <div className='px-16 py-16'>
      <div className='container mx-auto lg:mx-auto lg:px-40'>
        <Sectionheader title="About Me" next="A Glimps into my World" description="Learn more about me, what I do ,what I am and what inspires me." />
        <div className='flex flex-col gap-8 mt-20'>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 md:grid lg:grid-cols-3'>

            <Card className='h-[300px] md:col-span-2 lg:col-span-1'>
              <div className='flex flex-col'>
                <div className='items-center '>
                  <h3 className='text-xl font-semibold'>My Reads</h3>
                  <p className='text-sm font-semibold text-white/70'>Explore the books shaping my prespective</p>
                </div>
              </div>
              <div className='w-40 mx-auto'>
                <img src={bookimage} alt="" srcset="" className='mt-2' />
              </div>
            </Card>

            <Card className='h-[300px] p-0 md:col-span-3 lg:col-span-2'>
              <div className='px-6 mt-4 mb-4'>
                <h3 className='text-lg font-semibold'>My Toolbox</h3>
                <p className='text-sm font-semibold text-white/70'>Explore the tools that are been used to make exceptional and amaizing digital experiences.</p>
              </div>
              <div className=''>
                <Toolboxitems toolboxitems={toolboxitems} className='mt-6' />
                <Toolboxitems toolboxitems={toolboxitems} className='mt-4 '
                  itemwrapper="-translate-x-1/2"
                />
              </div>

            </Card>
          </div>
        </div>
        
        <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-5 lg:grid-cols-3' >
        <Card className='h-[300px] lg:col-span-2 md:col-span-3'>
          <div>
            <h3 className='text-xl font-semibold'>Beyond The Code</h3>
            <p className='text-sm font-semibold text-white/60'>Explore my hobbies and interests beyound my digital life</p>
          </div>
          <div className='mt-2 space-x-2 space-y-2'>
            {hobbies.map((data) => (
              <div key={data.title} className='inline-flex gap-1 px-2.5 py-1 font-semibold text-black rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-600'>
                <span className=''>{data.title}</span>
                <span className=''>{data.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className='h-[300px] p-0 relative col-span-2 lg:col-span-1'>
          <img src={mapimage} alt="" srcset="" className='object-cover w-full h-full' />

          <div className='absolute items-center -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-sky-400'>
            <img src={smile} alt="" srcset="" className=' size-20' />
          </div>
        </Card>
        </div>
        

      </div>

    </div>
  )
}

export default About
