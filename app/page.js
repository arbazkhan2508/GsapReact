"use client"

import Image from 'next/image'
import style from './page.module.css'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Landing from '@/Components/Landing'
import Nav from '@/Components/Nav/Nav'
import Gallery from '@/Components/Gallery'
import SlidingImages from '@/Components/Slidingimages'
export default function Home() {

  useEffect(() => {
     const locomotivescroll = new LocomotiveScroll();
  })

  return (
     <div className={style.main}>
           <Nav/>
           <Landing />
            <Gallery />
            <SlidingImages />
     </div>
  )

}
