import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import lms from "../../assets/lms.png"
import tl from "../../assets/tl.png"
import wa from "../../assets/wa.png"
import lp from "../../assets/lp.png"
import bc from "../../assets/bc.png"

import cujs from "../../assets/cujs.png"

import cup from "../../assets/cup.png"

import pg from "../../assets/pg.png"

import ss from "../../assets/ss.png"


import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="projects">
        <h1 id="para">MY PROJECTS</h1>
        <div className="slider">
<Card title="VIRTUAL ASSISTANT" image={va}/>
<Card title="LIBRARY MANAGEMENT SYSTEM" image={lms}/>
<Card title="TODO'S LIST" image={tl}/>
<Card title="WEATHER APP" image={wa}/>
<Card title="TWITTER LOGIN PAGE" image={lp}/>
<Card title="BMI CALCULATOR" image={bc}/>

<Card title="CLOCK USING JS" image={cujs}/>

<Card title="CLOCK USING PYTHON" image={cup}/>

<Card title="PASSWORD GENERATOR" image={pg}/>

<Card title="SOLAR SYSTEM" image={ss}/>


        </div>
    </div>
  )
}

export default Projects
