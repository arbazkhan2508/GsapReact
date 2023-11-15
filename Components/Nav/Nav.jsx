"use client"
import React from 'react'
import style from './style.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
            <div className={style.lnavs}>
              <small className={style.c}>©</small>
              <h6><span  className={style.h6}>Code by</span>&nbsp;<p className={style.p}>Arbaz Khan</p> </h6>
            </div>
            <div className={style.links}>
                <a href="#">
                    Work
                    <div className={style.dot}></div>
                </a>
                <a href="#">
                   About
                   <div className={style.dot}></div>

                </a>
                <a href="#">
                    Contact
                    <div className={style.dot}></div>
                </a>
            </div>
    </div>
  )
}

export default Nav