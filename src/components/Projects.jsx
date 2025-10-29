import React from 'react'

const Projects = () => {
  return (
    <div className='rota flex flex-wrap gap-4 ml-[12vh]'>
      <a href="https://wanderlust-og59.onrender.com/listings" target="_blank" rel="noopener noreferrer">
        <img
          src="wander.png"
          className="h-[100px] sm:mt-[20vh] sm:ml-[10vh] sm:h-[30vh] ease-in-out transition-transform duration-700 hover:scale-105 "
          alt="Chats Project"
        />
      </a>

      <a href="https://chillis.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img
          src="Chilis.png"
          className="h-[100px] sm:h-[30vh]  transition-transform duration-700 ease-in-out hover:scale-105 "
          alt="Chillis Project"
        />
      </a>

      
    </div>

  )
}

export default Projects
