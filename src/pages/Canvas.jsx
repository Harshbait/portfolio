import React, { useEffect, useRef, useState } from 'react';
import canvasImages from '../earthImg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Canvas = () => {
  const [index, setIndex] = useState({ value: 0 });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: 249,
      duration: 8,
      ease: 'linear',
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.floor(index.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = canvasImages[index.value];
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      // ctx.clearRect(0, 0, canvas.width, canvas.height); // Optional: clear before drawing
      ctx.drawImage(image, 0, 0);
    };
  }, [index]); // ✅ Correct useEffect dependency array

  return (
    <canvas
      ref={canvasRef}
      className="h-[20rem] sm:h-[25rem] lg:h-[25rem] md:h-[30rem] xl:h-[30rem] 2xl:h-[35rem] 2xl:top-[1vh] absolute md:mt-[30vh] mt-[48vh] lg:mt-5 lg:top-5 md:left-[15vw] sm:left-[10vh] sm:mt-[40vh] left-[-20vw] lg:left-[45vw] xl:left-[45vw] 2xl:left-[45vw] z-30 pointer-events-none"
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
