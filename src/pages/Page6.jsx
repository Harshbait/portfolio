import React from 'react'
import Myproject from '../components/Myproject'
import Projects from '../components/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page6 = () => {
    useGSAP(function(){
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.rota',{
      transform: 'rotateX(-90deg)',
      duration: 6,
      opacity: 0,
      ease: 'linear',
      stagger: 1,
      scrollTrigger:{
        trigger: '.rotat',
        start: 'top 15%',
        end: 'top -65%',
        scrub: 2,
      }
    })
  })
    return (
        <div>
            <div className=' h-screen w-full bg-amber-50 p-4'>
                <div className="rota khota relative h-full shadow-2xl shadow-gray-700 w-full bg-black rounded-[34px] px-[5vw] flex ">
                    <Myproject/>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default Page6
