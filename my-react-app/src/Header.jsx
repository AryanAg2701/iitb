import "./Header.css" //stylesheet
import hamburger from "./assets/Untitled.png" //image
import image from "./assets/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" //image
import searchpic from "./assets/images.png" //image
import React, { useState, useRef, useEffect } from 'react'; //importing useState,useEffect and useRef hooks from react


function Header(){
  const [col,setcol]=useState("black")  //usestate hook change of background
  const [colour,setcolour]=useState("white")  //usestate hook change of text color
  const [visi,setvisi]=useState('hidden')  //usestate hook change of visibility of side box
  const [show,setshow]=useState(false);  //usestate hook for search box
  const [menu,setmenu]=useState(false); //usestate hook for handleing side menu
  const change=()=>setshow(!show)

  const handlemenu=()=>setmenu(!menu); //changing sidebox visibility on click

  const divRef = useRef(null);//useRef hook for declaring div
  const hamburgerRef = useRef(null);//useRef for declaring the pic of hamburger

  setTimeout(()=>{menu?setvisi("visible"):setvisi("hidden")},0)//seting the visibility by boolean on click

  //useEffect hook for checking outside click
  useEffect(() => {
    const outsideclick = (event) => {
      if (divRef.current && !divRef.current.contains(event.target) && event.target !== hamburgerRef.current) {
        // if clicked outside of the div
        setmenu(false)
      }
    };

    document.addEventListener('click', outsideclick);

    return () => {
      document.removeEventListener('click', outsideclick);
    };
  }, [menu]);

  //returning the text along with navbar ,the sidemenu ,search button
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
        <div> <img onClick={change} id="searchpic" src={searchpic}/></div>
    
        {show?<div >
        <input id="searchme" class type="text"  placeholder="Search"/>
        </div>:null}
    </div>
    </div>
    
    </>
)
}
export default Header
