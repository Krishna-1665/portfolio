import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import resume from "../../assets/resume.pdf"
function Home() {

useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <div id="home">
<div className="lefthome">
<div className="homedetails">
    <div className="line1">I'M</div>
    <div className="line2">KRISHNA BHARDWAJ</div>
    <div className="line3">
      <TypingEffect
      text={["LEARNER","FRONT END DEVELOPER","STUDENT"]}
      speed={100}
      eraseSpeed={50}
      eraseDelay={1000}
      typingDelay={500}
      cursor='|'
      />
    </div>
    <button><a href={resume}>DOWNLOAD RESUME</a></button>
</div>
</div>
<div className="righthome">
    <img src={man} alt="" />
</div>
    </div>
  )
}

export default Home
