import Card from '../Card/Card'

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
<Card title="VIRTUAL ASSISTANT" image={'/imgs/va.png'}/>
<Card title="LIBRARY MANAGEMENT SYSTEM" image={'/imgs/lms.png'}/>
<Card title="TODO'S LIST" image={'/imgs/tl.png'}/>
<Card title="WEATHER APP" image={'/imgs/wa.png'}/>
<Card title="TWITTER LOGIN PAGE" image={'/imgs/lp.png'}/>
<Card title="BMI CALCULATOR" image={'/imgs/bc.png'}/>

<Card title="CLOCK USING JS" image={'/imgs/cujs.png'}/>

<Card title="CLOCK USING PYTHON" image={'/imgs/cup.png'}/>

<Card title="PASSWORD GENERATOR" image={'/imgs/pg.png'}/>

<Card title="SOLAR SYSTEM" image={'/imgs/ss.png'}/>


        </div>
    </div>
  )
}

export default Projects
