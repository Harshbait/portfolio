import React from 'react'
import Canvas from './Canvas'


const Page3 = () => {
  return (
    <div className='h-screen w-full bg-amber-50 p-4'>
      <div className="relative h-full w-full">
        <h1 className='text-white top-6 left-6 absolute text-[30vh] font-[Potfilo2] font-bold px-25 py-10 z-30'>About</h1>
        <h1 className='text-white top-6 left-6 absolute text-2xl font-[Potfilo1] font-bold px-25 py-10 z-100 leading-[38vw]'>I'm a <span className='text-amber-200'> 3rd Year Engineering Student at <a href="https://www.sakec.ac.in/" className='text-blue-500 hover:underline'>SAKEC </a></span></h1>
        <h1 className='text-white top-6 left-6 absolute text-2xl font-[Potfilo1] font-bold z-30 px-25 py-10 leading-[43vw]'> Aspiring for <span className='text-amber-400'>MERN</span> Stack Developer</h1>
        <h1 className='text-white top-6 left-6 absolute text-2xl font-[Potfilo1] font-bold px-25 py-10 z-30 leading-[48vw]'>Passionate About <span className='text-green-500'>Node.js</span> & <span className='text-orange-600'>Express.js</span> </h1>
        <h1 className='text-white top-6 left-6 absolute text-2xl font-[Potfilo1] font-bold px-25 py-10 z-30 leading-[53vw]'>Always eager to learn and grow in the web development space.</h1>

        <video loop muted autoPlay className="absolute top-0 left-0 h-full w-full object-cover rounded-[34px] z-10 shadow-2xl shadow-gray-700 p-11 bg-black" src="/src/Video/file1.mp4"/>
        <Canvas className="absolute top-0 left-0 h-full w-full z-30 pointer-events-none" />
      </div>
    </div>
  )
}

export default Page3
