'use client'
import Image from "next/image";
import Skills from "./components/skills";
import useIntersection from './components/useIntersection'
  
function Home() {

  return (
    <> 
    <div className="content">
      <span className="logo show">
    <img src="/Logo Files/For Web/png/White logo - no background.png" alt="logo" className="logo" />
      </span>
      <div className="article">
        <h4 className="item" ref={useIntersection('show')}>Welcome to my portfolio</h4>
      <h2 ref={useIntersection('show')}>
      Hi!, I'm Ubiquitous, Web developer
      </h2>
        </div>
        <Skills />
        
    </div>
    </>
  )
}

export default Home