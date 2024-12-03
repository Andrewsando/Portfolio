import React from 'react';
import { Helmet } from 'react-helmet';
import Landing from '../../components/container/landing';
import Navbar from '../../components/core-ui/navbar/navbar-ui';
import Projects from '../../components/container/projects';
import About from '../../components/core-ui/about/about';
import Education from '../../components/core-ui/education/education';
import Experience from '../../components/core-ui/experience/experience';
import Skills from '../../components/core-ui/skills/skills';
import Footer from '../../components/core-ui/footer/footer';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Andrés Torres - Portfolio</title>
        <link href="./output.css" rel="stylesheet"/>

      </Helmet>
      <div className='relative flex h-full flex-col'>
        <div className="relative isolate mb-24  w-full">
          <svg className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 radial-mask sm:block h-screen" aria-hidden="true"><defs><pattern id="55d3d46d-692e-45f2-becd-d8bdc9344f45" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern></defs>
            <svg x="50%" y="0" className="overflow-visible fill-gray-50">
              <path d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z" strokeWidth="0"></path>
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"></rect>
          </svg>
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
              <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style={{clipPath: 
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
              </div>
            </div>
            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true">
              <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Landing />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <div class="w-9/10 justify-self-center">
      <Footer contact={"Contact"} resume={"Resume"}/>
      </div>
    </div>
  );
}

export default HomePage;
