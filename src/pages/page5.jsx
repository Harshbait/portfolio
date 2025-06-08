import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Skills from '../components/skills'
import K from '../components/k'

const Page5 = () => {
  useGSAP(function(){
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.rotat',{
      transform: 'rotateY(-90deg)',
      duration: 6,
      opacity: 0,
      ease: 'linear',
      stagger: 1,
      scrollTrigger:{
        trigger: '.rotat',
        start: 'top 105%',
        end: 'top -5%',
        scrub: 2,
      }
    })
  })

  return (
    <div className=" page-5 bg-amber-50 w-full h-screen p-4 flex flex-wrap">
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
