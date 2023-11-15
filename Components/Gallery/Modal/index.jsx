import styles from "./style.module.css";
import Image from "next/image";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";



const index = ({ modal, projects }) => {
    const { active, index } = modal;
    const animateVarients = {
        initial: { transform:"translate(-50%,-50%) scale(0)"},
        open: {
            transform:"translate(-50%,-50%) scale(1)",
            transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
        },
        exit: {
            transform:"translate(-50%,-50%) scale(0)",

            transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
        },
    };

    const cursor = useRef(null);
    const modalContainer = useRef(null);

    useEffect(() => {
        const cursorElement = cursor.current;
        const modalElement = modalContainer.current;

        let cursorX = gsap.quickTo(cursorElement, "left", {
            duration: 0.4,
            ease: "power3",
        });
        let cursorY = gsap.quickTo(cursorElement, "top", {
            duration: 0.4,
            ease: "power3",
        });
        let ModalX = gsap.quickTo(modalElement, "left", {
            duration: 0.8,
            ease: "power3",
        });
        let ModalY = gsap.quickTo(modalElement, "top", {
            duration: 0.8,
            ease: "power3",
        });

        window.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;
     
        ModalX(x)
        ModalY(y)
        cursorX(x)
        cursorY(y)
        });
    },[]);


    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                className={styles.modalContainer}

            >
                <div
                    className={styles.modalSlider}
                    style={{ top: index * -100 + "%" }}
                >
                    {projects.map((project, index) => {
                        console.log(projects);
                        const { image, color } = project;
                        // console.log(color);
                        return (
                            <div
                                key={index}
                                className={styles.modal}
                                style={{ backgroundColor: `${color}` }}
                            > 
                             <Image
                                    src={`/${image}`}
                                    width={300}
                                    height={0}
                                    alt="some image"
                                />

                                {/* <img key={index} src={`/${image}`} alt="some image" /> */}
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                className={styles.cursor}
                ref={cursor}

            >
                View
            </motion.div>
        </>
    );
};

export default index;
