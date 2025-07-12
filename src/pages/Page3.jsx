import React from 'react'
import Canvas from './Canvas'


const Page3 = () => {
  return (
    <div className='h-screen w-full bg-amber-50 p-4'>
      <div className="relative h-full w-full ">
        <div>
          <h1 className='text-white sm:left-6 absolute text-[15vh] md:text-[20vh] lg:text-[25vh] xl:text-[30vh]  font-[Potfilo2] px-10 md:px-10 lg:px-15 xl:px-25 py-2 md:py-1 lg:py-12 xl:py-10 z-30'>About</h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-xl xl:text-[22px] text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-15 xl:px-25 py-2 md:py-1  lg:py-12 xl:py-10 z-80 lg:mt-0 mt-[21vh] sm:leading-[10vh] md:leading-[8vh] lg:leading-[35vw] xl:leading-[37vw]'>I'm a <span className='text-amber-200'>3rd Year Engineering Student at </span><a href='https://www.sakec.ac.in/' target='_blank' rel='noopener noreferrer' className='cursor-pointer-auto text-blue-500 hover:underline inline-block relative'> SAKEC</a></h1>

          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-xl xl:text-[22px] text-[16px]  font-[Potfilo1] font-bold z-30 px-10 md:px-10 lg:px-15 xl:px-25 py-2 md:py-1  lg:py-12 xl:py-10 lg:mt-0 mt-[27.5vh]  sm:leading-[5vh] lg:leading-[40vw] xl:leading-[42vw]'> Aspiring for <span className='text-amber-400'>MERN</span> Stack Developer</h1>
          {/* <p className="text-white z-100 absolute xl:text-[22px] hover:text-green-500">Hover Me</p> */}

          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-xl xl:text-[22px] text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-15 xl:px-25 py-2 md:py-1  lg:py-12 xl:py-10 z-30 lg:mt-0 mt-[33.5vh] sm:leading-[3vh] lg:leading-[45vw] xl:leading-[48vw]'>Passionate About <span className='text-green-500'>Node.js</span> & <span className='text-orange-600'>Express.js</span> </h1>
          <h1 className='text-white sm:left-6 absolute md:text-xl lg:text-xl xl:text-[22px] text-[16px] font-[Potfilo1] font-bold px-10 md:px-10 lg:px-15 xl:px-25 py-2 md:py-1  lg:py-15 xl:py-10 z-30 lg:mt-0 mt-[40vh] lg:leading-[48vw] sm:leading-[1vh] xl:leading-[53vw]'>Always eager to learn and grow in the web development space.</h1>
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
