import Header from "../components/header";
import { useState,useEffect } from "react";

export default function Myinfo(){
    let [lightmode,setLightmode]=useState(false)
    useEffect(()=>{
        document.body.classList.toggle("dark-mode", !lightmode);})
    const ldtoggle = () => {
        setLightmode(!lightmode);
    };
    return(
        <div >
        <Header/>
        <p className="topm"></p>
        <h className="myinfo">Myinfo</h>
        <hr className="top-margin"/>
        <div className="objective">
        <p>👋🏼 I’m Vashista Dara, a tech enthusiast and aspiring engineer passionate about building innovative 
            digital solutions. Currently pursuing my B.Tech in Electronics and Communication Engineering at Rajiv 
            Gandhi University of Knowledge and Technologies, I have explored diverse domains ranging from embedded 
            systems and IoT to web development. My expertise spans React, Python, C++, MATLAB, and Arduino, enabling
             me to design and develop intuitive user experiences and functional systems.</p>
        </div>
        <div className="objectcon">
            <p>I am constantly seeking opportunities to learn and innovate, whether through academic research, 
                personal projects, or collaborative initiatives. 
                Let’s connect and explore the endless possibilities of technology! 🚀</p>
        </div>
        <div className="resume">
            <a href="resume.pdf" className="resumebutton"> <img src={lightmode? "download-dark.png" : "download-light.png"}  className="iconimg" alt="Icon" />Download resume</a>
        </div>
        <div className="connect">
            <h1>Connect</h1>
        </div>
        
            <table className="connecttable">
                <tr>
                    <td><p><a href="https://github.com/vashista143/" target="_blank">Github</a></p></td>
                    <td><p><a href="https://www.linkedin.com/in/vashista-dara-26aa20240" target="_blank">Linkedin</a></p></td>
                </tr>
                <tr>
                    <td><p>Instagram</p></td>
                    <td><p><a href="mailto:vashista.dara03@gmail.com" target="_blank">Gmail</a></p></td>
                </tr>
            </table>
        
        <hr/>
        <div className='foot'>
        <div className='darklight'>
        <button onClick={ldtoggle} className='button'>dark/light</button>
        </div>
        <div className='wi'>
          <p className='worktext'><a href='/work'>Work</a></p>
          <p className='infotext'><a href='/info'>Info</a></p>
        </div>
        <div className='contact'>
          <p className='infotext'><a href='mailto:vashista.dara03@gmail.com' target="_blank" className='rmstyle'>Gmail</a></p>
          <p className='infotext'><a href='https://www.linkedin.com/in/vashista-dara-26aa20240' target="_blank" className='rmstyle'>Linkedin</a></p>
          <p className='infotext'><a href='https://github.com/vashista143/' target="_blank" className='rmstyle'>Github</a></p>
          <p className='infotext'><a href='#' className='rmstyle'>Insta</a></p>
        </div>
        </div>
        </div>
    )
}