import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/Page6';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  smoothMobile: true,      // ✅ smoother mobile scroll         // ✅ speed up (default is 1)
  lerp: 0.1,               // ✅ smoothness (lower = smoother)
});


    return () => {
      scroll.destroy(); // cleanup
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
};

export default App;
