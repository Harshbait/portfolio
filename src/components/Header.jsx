import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-17 flex items-center justify-end'>
  <a
    href='/H.pdf'
    target='_blank'
    rel='noopener noreferrer'
    download={true}
  >
    <button className='bg-black text-xl px-6 py-3 rounded-full border-4 hover:bg-gray-800'>
      Hire Me
    </button>
  </a>
</div>
  )
}

export default Header
