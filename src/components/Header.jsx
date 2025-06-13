import React from 'react'
// import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='hie fixed w-[100vw] z-10 px-3 py-11 sm:px-17 sm:py-17 flex items-center justify-end'>
      
  <a
    href='/Hresume(1).pdf'
    target='_blank'
    rel='noopener noreferrer'
    download={true}
  >
    <button className='hire bg-black text-[14px] sm:text-xl px-6 py-3 rounded-full border-4 hover:bg-gray-800'>
      Hire Me
    </button>
  </a>
</div>
  )
}

export default Header
