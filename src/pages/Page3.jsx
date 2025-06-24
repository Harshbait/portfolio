import React from 'react'
import Canvas from './Canvas'


const Page3 = () => {
  return (
    <div className='h-screen w-full bg-amber-50 p-4'>
      <div className="relative h-full w-full ">
        <div>
          <h1 className='text-white sm:left-6 absolute md:text-[20vh] lg:text-[30vh] text-[35vw] font-[Potfilo2] font-bold px-10 md:px-10 lg:px-25 py-2 md:py-1  lg:py-10 z-30'>About</h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-2xl  text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-25 py-2 md:py-1  lg:py-10 z-30 lg:mt-0 mt-[21vh] md:leading-[8vh] lg:leading-[38vw]'>I'm a <span className='text-amber-200'> 3rd Year Engineering Student at <a href="https://www.sakec.ac.in/" className='text-blue-500 hover:underline'>SAKEC </a></span></h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-2xl text-[16px]  font-[Potfilo1] font-bold z-30 px-10 md:px-10 lg:px-25 py-2 md:py-1  lg:py-10 lg:mt-0 mt-[27.5vh] lg:leading-[43vw]'> Aspiring for <span className='text-amber-400'>MERN</span> Stack Developer</h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-2xl text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-25 py-2 md:py-1  lg:py-10 z-30 lg:mt-0 mt-[33.5vh] lg:leading-[48vw]'>Passionate About <span className='text-green-500'>Node.js</span> & <span className='text-orange-600'>Express.js</span> </h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-2xl text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-25 py-2 md:py-1  lg:py-10 z-30 lg:mt-0 mt-[40vh] lg:leading-[53vw]'>Always eager to learn and grow in the web development space.</h1>
        </div>
        <video loop muted autoPlay className="page-3 absolute top-0 left-0 h-full w-full object-cover rounded-[34px] z-10 shadow-2xl shadow-gray-700 p-11 bg-black" src="file1.mp4" />
        <div className='sm:mt-0 mt-10 '>
          <Canvas className=" pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default Page3
