import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {

  useGSAP(function() {
    gsap.to('#banne img', {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: 'linear', 
    })
  })
  return (
    <div className='absolute left-0 bottom-0 flex items-center justify-end w-full p-15'>
      <div id='banne' className='phouu w-[8vw]'>
        <img className='rounded-full object-cover' src="https://images-workbench.99static.com/zWUOSs_qH98XmDMkt1h2DFqUrGA=/99designs-contests-attachments/139/139945/attachment_139945363" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom
