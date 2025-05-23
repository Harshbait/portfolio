import React, { forwardRef } from 'react';

const TiltText = forwardRef((props, ref) => {
  return (
    <div id="tiltDiv" className="mt-[16vh] px-8" ref={ref}>
      <h1 className="uppercase text-[9vw] leading-[27vh] font-[Potfilo2]">
        i am <span className="text-black">Hari Bait</span>
      </h1>
      <h1 className="uppercase text-[12vw] font-[Potfilo2] leading-[5vw]">
        a <span className='text-black'>web developer</span>
      </h1>
      
      
        <h1 className="uppercase text-[9vw] z-70 font-[Potfilo2] leading-[11vw] hover:underline cursor-pointer">
          available for <span className='text-black'>hire</span>
        </h1>
      


    </div>
  );
});

export default TiltText;
