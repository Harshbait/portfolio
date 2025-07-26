import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const page4 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const islaptop = window.matchMedia("(max-width: 1800px)").matches;
    if (isMobile) {
      gsap.from('.rotate', {
        transform: 'rotateX(-90deg)',
        duration: 3,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.rotate',
          start: 'top 100%',
          end: 'top -50%',
          scrub: 1,
        },
      });
    } else if (islaptop){

      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.rotate', {
        

        rotateX: -90,

        duration: 2,
        opacity: 0,
        ease: 'linear',
        stagger: 1,
        scrollTrigger: {
          trigger: '.rotate',
          start: 'top 170%',
          end: 'top -250%',
          scrub: 2,
        }
      })
    }
    else {
      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.rotate', {
        rotateX: -90,
        duration: 2,
        opacity: 0,
        ease: 'linear',
        stagger: 1,
        scrollTrigger: {
          trigger: '.rotate',
          start: 'top 260%',
          end: 'top -150%',
          scrub: 2,
        }
      })
    }
  });

  return (
    <div id='secion3' className='page-4 bg-amber-50 p-9 text-black text-center'>
      <div className='rotate'>
        <h3 className='text-[42vw] font-[Potfilo2] leading-[35vw]'>MY</h3>
      </div>
      <div className='rotate'>
        <h3 className='text-[42vw] font-[Potfilo2] leading-[35vw]'>PORTFOLIO
        </h3>
      </div>
      <div className='rotate'>
        <h1 className='text-[42vw] font-[Potfilo2] leading-[35vw] uppercase'>is made</h1>
      </div>
      <div className='rotate'>
        <h1 className='text-[42vw] font-[Potfilo2] leading-[35vw] uppercase'>with</h1>
      </div>
      <div className='rotate'>
        <h1 className='text-[42vw] font-[Potfilo2] leading-[35vw] uppercase'>React</h1>
      </div>


      <div className='h-1 w-1/2 relative left-1/2 -translate-x-1/2 sm:mt-25 bg-black'></div>
    </div>
  )
}

export default page4
