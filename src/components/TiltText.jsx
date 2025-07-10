import React, { forwardRef } from 'react';

const TiltText = forwardRef((props, ref) => {
  return (
    <div id="tiltDiv" className="text sm:mt-[10vh] md:mt-[40vh] lg:mt:[30vh] xl:mt-[35vh] px-8" ref={ref}>
      <h1 className="uppercase text1 text-[9vw] sm:leading-[10vw]  md:leading-[8vw] font-[Potfilo2]">
        i am <span className="text-black">Hari Bait</span>
      </h1>
      <h1 className="uppercase text2 text-[12vw] font-[Potfilo2] sm:leading-[10vw] md:leading-[8vw]">
        a <span className='text-black'>web developer</span>
      </h1>
      
      
        <h1 className="uppercase text3 text-[9vw] font-[Potfilo2] sm:leading-[8vw] md:leading-[8vw] leading-[9vw]">
          available for <span className='text-black'>hire</span>
        </h1>
      


    </div>
  );
});

export default TiltText;
