import "./Header.css"
import hamburger from "./assets/Untitled.png"
import image from "./assets/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
import searchpic from "./assets/images.png"
import { useState } from "react"
import React, { useRef, useEffect } from 'react';


function Header(){
    const [col,setcol]=useState("black")
    const [colour,setcolour]=useState("white")
    const [visi,setvisi]=useState('hidden')
    const [show,setshow]=useState(false);   
    const Change=()=>setshow(!show)
    const [menu,setmenu]=useState(false);
    const handlemenu=()=>setmenu(!menu);

  const divRef = useRef(null);
  const hamburgerRef = useRef(null);

  setTimeout(()=>{menu?setvisi("visible"):setvisi("hidden")},0)

  useEffect(() => {
    const outsideclick = (event) => {
      if (divRef.current && !divRef.current.contains(event.target) && event.target !== hamburgerRef.current) {
        // Clicked outside of the div
        setmenu(false)
      }
    };

    document.addEventListener('click', outsideclick);

    return () => {
      document.removeEventListener('click', outsideclick);
    };
  }, [menu]);



    return(
    <>
    <div id="menu" ref={divRef} style={{visibility:visi,transition:'100ms,ease in'}}>riatur quidem praesentium, esse totam necessitatibus commodi eum fuga ut blanditiis nostrum sapiente numquam! At quis consequuntur fugit velit ullam!</div>
    <div className="pic"> <a href="https://www.youtube.com/"><img id="image" src={image} alt="hi" /></a></div>
    <div className="headbox" style={{backgroundColor:colour,color:col,transition:'1000ms,ease out'}}>
    <div id="setting">
        <img id="hamburger" onClick={handlemenu} src={hamburger} ref={hamburgerRef}/>
    </div>

    <div id="box">
    
        <span className="head">Home</span>
    <span class="dropdown">
        <span className="head"> Categories  </span>
        <span  class="dropdown-content">
            <a href="https//:www.google.com">News!</a>
            <hr></hr>
            <a href="https//:www.google.com">Insight</a>
            <hr/>
            <a href="https//:www.google.com">Interview</a>
        </span>
    </span>
        <span className="head">Archives</span>
        <span className="head">Summer Blog</span>
    </div>
    <div id="searchhead">
        <div> <img onClick={Change} id="searchpic" src={searchpic}/></div>
    
        {show?<div >
        <input id="searchme" class type="text"  placeholder="Search"/>
        </div>:null}
    </div>
    </div>
    
    </>
)
}
export default Header
