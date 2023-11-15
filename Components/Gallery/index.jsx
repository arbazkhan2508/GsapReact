"use client"
import React from 'react'
import Project from './project'

import styles from './style.module.css'
import Modal from "./Modal";
import Button from '@/Components/Button'

import { useState } from 'react';
import Buttonam from '@/Components/Buttonam'

const Projects = [
    {
        name: "Project 1",
        desc: "something about 1",
        image: "one.jpg",
        color: "#dadada",
    },
    {
        name: "Project 2",
        desc: "something about 2",
        image: "two.jpg",
        color: "#d0d0d0",

    },
    {
        name: "Project 3",
        desc: "something about 3",
        image: "three.jpg",
        color: "#eeeeee",

    },
    {
        name: "Project 4",
        desc: "something about 4",
        image: "four.jpg",
        color: "#ababab",

    },
];


const index = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
        <div className={styles.gallery}>
            <div className={styles.txt}>
                 <div className={styles.txtleft}>
                      <div className={styles.h1}>
                          <h1>Helping brands to stand out in the digital era.</h1>
                      </div>
                      <div className={styles.h1}>
                          <h1>Together we will set the new status quo. No</h1>
                      </div>
                      <div className={styles.h1}>
                         <h1>nonsense, always on the cutting edge.</h1>
                      </div>
                 </div>
                 <div className={styles.txtleft}>
                      <div className={styles.p}>
                          <p>The Cpmbination of my passion.</p>
                      </div>
                      <div className={styles.p}>
                        <p>for design code & interaction</p>
                      </div>
                      <div className={styles.p}>
                         <p>Positionme in a unique place in</p>
                      </div>
                      <div className={styles.p}>
                         <p>the web design world</p>
                      </div>
                 </div>
            </div>
             <div className={styles.head}>
                  <h1>Projects</h1>
                  <Buttonam>
                     <p>About me</p>
                 </Buttonam>
             </div>
            <div className={styles.projects}>
                {Projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                            index={index}
                            setModal={setModal}
                        />
                    );
                })}
            </div>
            <Modal modal={modal} projects={Projects} />
            <Button>
                <p>More Work</p>
            </Button>
        </div>
    );
}

export default index