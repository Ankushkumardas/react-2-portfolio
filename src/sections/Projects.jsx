import React from "react";
import dark from "../assets/images/dark-saas-landing-page.png";
import light from "../assets/images/light-saas-landing-page.png";
import ai from "../assets/images/ai-startup-landing-page.png";
import { FaRegCheckCircle } from "react-icons/fa";
import Grain from '../assets/images/grain.jpg'
function Projects() {
  const projects = [
    {
      company: "Acme Corp",
      year: 2022,
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40's" },
        { title: "Improved site speed by 50%" },
        { title: "Incresed mobile traffic by 35%" },
      ],
      link: "https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDkyBggDEEUYOTIGCAQQRRg5MgYIBRBFGDwyBggGEEUYPDIGCAcQLhhA0gEIMzE4MmowajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
      image: dark,
    },
    {
      company: "Innovation Corp",
      year: 2021,
      title: "Light Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40's" },
        { title: "Improved site speed by 50%" },
        { title: "Incresed mobile traffic by 35%" },
      ],
      link: "https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDkyBggDEEUYOTIGCAQQRRg5MgYIBRBFGDwyBggGEEUYPDIGCAcQLhhA0gEIMzE4MmowajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
      image: light,
    },
    {
      company: "Quantum Dynamics Corp",
      year: 2023,
      title: " Ai StartUp Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40's" },
        { title: "Improved site speed by 50%" },
        { title: "Incresed mobile traffic by 35%" },
      ],
      link: "https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDkyBggDEEUYOTIGCAQQRRg5MgYIBRBFGDwyBggGEEUYPDIGCAcQLhhA0gEIMzE4MmowajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
      image: ai,
    },
  ];

  return (
    <div className="pb-16">
      <div className=" text-center mt-60">
        <div className="flex justify-center">
          <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 text-xl">
            REAL-WORLD RESULTS
          </p>
        </div>
        <h2 className="text-center text-4xl font-semibold mt-3 md:text-4xl">
          Featured Projects
        </h2>
        <p className="text-white/70 md:text-lg md:max-w-md mx-auto">
          See How I transform concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 mx-5 gap-20 md:mt-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-700 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-10 lg:mx-40"
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage:`url(${Grain})`}}></div>

              <div className="lg:grid lg:grid-cols-2">
            <div>
             
              <div className="flex justify-center lg:justify-start lg:mb-2">
                <div className="bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text font-bold uppercase inline-flex gap-1">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold md:text-3xl lg:flex">{project.title}</h3>

              <hr className="text-white m-3 border-white/5 border-2 lg:w-[80%]  " />
              <ul className="flex flex-col gap-2 mb-3 ">
                {project.results.map((data, i) => (
                  <div key={i}>
                    <li className="md:flex lg:flex gap-3 text-white/70 ">
                      <span className="mt-1.5"><FaRegCheckCircle size={13} className="text-white/50"/></span>
                      <span>{data.title}</span>
                    </li>
                  </div>
                ))}
              </ul>
              <a href={project.link} className="cursor-pointer">
                <button className="bg-white text-black px-5 py-2 rounded-lg font-medium text-sm mb-3 md:flex  ">
                  View Live site
                </button>
              </a>
              </div>
              <div>
              <img src={project.image} className="mt-4 "/>
              </div>
              
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
