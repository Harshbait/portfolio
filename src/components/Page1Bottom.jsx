import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {

  useGSAP(function() {
    gsap.to('#banne img', {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: 'linear', 
    })
  })
  return (
    <div className='absolute left-0 bottom-0 flex items-center justify-end w-full p-15'>
      <div id='banne'>
        <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom
