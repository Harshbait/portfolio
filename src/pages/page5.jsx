import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Skills from '../components/skills'
import K from '../components/k'

const Page5 = () => {
   useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      gsap.from('.rotat',{
      transform: 'rotateY(-90deg)',
      duration: 4,
      opacity: 0,
      ease: 'linear',
      stagger: 1,
      scrollTrigger:{
        trigger: '.rotat',
        start: 'top 30%',
        end: 'top -1%',
        scrub: 2,
        },
      });
    } else {

      gsap.registerPlugin(ScrollTrigger)
        gsap.from('.rotat',{
      transform: 'rotateY(-90deg)',
      duration: 20,
      opacity: 0,
      ease: 'linear',
      stagger: 1,
      scrollTrigger:{
        trigger: '.rotat',
        start: 'top 80%',
        end: 'top 25%',
        scrub: 2,
        }
      })
    }
  });

  return (
    <div id='secion2' className=" page-5 bg-amber-50 h-screen w-full p-4 flex flex-wrap">
      <div className="pa relative h-full w-full rounded-[34px] shadow-2xl shadow-gray-700  bg-white px-[5vw] flex justify-center items-center">
          <K/>
          <div className="sm:ml-30">
            <Skills/>
          </div>
          
       
      </div>
    </div>
  );
};

export default Page5;
