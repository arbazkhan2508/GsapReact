"use client"
import Image from 'next/image'
import React from 'react'
import style from "./style.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react'
import { useEffect } from 'react';
const index = () => {
    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
          scrollTrigger: {
              trigger: document.documentElement,
              start: 0,
              end: window.innerHeight,
              scrub: 0.25,
              onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-500px",
      });
      requestAnimationFrame(animate);
  });

    const animate = () => {
      if (xPercent < -100) {
          xPercent = 0;
      } else if (xPercent > 0) {
          xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });

      xPercent += direction * 0.06;
      requestAnimationFrame(animate);
  };


  return (
    <>
       <div className={style.landing}>
           <div className={style.top_div}>
                 <div style={{position:"relative"}} className={style.left} data-scroll data-scroll-speed="0.2">
                     <small style={{fontWeight:"500",letterSpacing:"1px "}}>Located in the Bhopal</small>
                      
                 </div>
                 <div className={style.right}  data-scroll data-scroll-speed="0.3">
                    <Image 
                      src={'/arrow.svg'} 
                      width={15}
                      height={15}
                      alt='aroow ni he'
                    />
                    <h6 style={{marginTop:"2vmax",letterSpacing:"2px"}}>Full Stack</h6>
                    <h6 style={{letterSpacing:"2px"}}>Web Developer</h6>
                 </div>
           </div>
           <div className={style.sliderContainer}>
                  <div ref={slider} className={style.slider}>
                    <p ref={firstText}>Arbaz Khan -</p>
                    <p ref={secondText}>Arbaz Khan -</p>
                 </div>
           </div>
       </div>   
    </>
    
  )
}

export default index;






