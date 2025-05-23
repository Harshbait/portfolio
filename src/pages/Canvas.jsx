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
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Optional: clear before drawing
      ctx.drawImage(image, 0, 0);
    };
  }, [index]); // ✅ Correct useEffect dependency array

  return (
    <canvas
      ref={canvasRef}
      className="h-[40rem] w-[55rem] absolute top-0 right-5 z-30 pointer-events-none"
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
