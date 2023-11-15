import React from 'react'
import styles from "./style.module.css";
import { useRef,useEffect } from 'react';
import gsap from "gsap";
const index = ({children}) => {
    const circle = useRef(null);
    const timeline = useRef(null);

    useEffect(()=>{
         timeline.current = gsap.timeline({paused:true});
         timeline.current
         .to(
             circle.current,
             {
                 top: "-60%",
                 scale: 1.5,
                 duration: 0.6,
                 ease: "power3.in",
             },
             "enter"
         )
         .to(
             circle.current,
             {
                 top: "-250%",
                 height: "125px",
                 scale: 1.5,
                 duration: 0.6,
                 ease: "power3.in",
             },
             "exit"
         );
    },[])

    const handleMouseEnter = () => {
        timeline.current.tweenFromTo("enter", "exit");
    };
    const handleMouseLeave = () => {
        timeline.current.play();
    };
  return (
    <div
         className={styles.roundedButton}
         onMouseEnter={() => handleMouseEnter()}
         onMouseLeave={() => handleMouseLeave()}
    >
        {children}
        <div ref={circle} className={styles.circle}></div>
    </div>
  )
}

export default index