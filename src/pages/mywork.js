import Header from "../components/header";
import { useEffect, useState } from "react";
import Work from "../components/work";
export default function Mywork(){
    let [lightmode,setLightmode]=useState(false)
    useEffect(()=>{
      document.body.classList.toggle("dark-mode", !lightmode);
    })
    const ldtoggle = () => {
      setLightmode(!lightmode);
    };
    return(
        <div>
        <Header/>
        <div workcount>
        <p className="workheading">Mywork<span className="super">4</span></p>
        </div>
        <div className='arrowwork'>
        <img src={lightmode ? "/right-downdark.png" : "/right-downlight.png"} className='arrow'></img>
        <p className='workhe'>My Passionate Work</p>
        </div>
        <div className="work">
          <Work url="image1.png" tag="project1"/>
          <Work url="image2.png" tag="project2"/>
        </div>
        <div className='arrowwork'>
        <img src={lightmode ? "/right-downdark.png" : "/right-downlight.png"} className='arrow'></img>
        <p className='workhe'>Academic Projects</p>
        </div>
        <p className="spacingbro">Besides my passion I had did a couple of projects relavent to my Academics</p>
        <div className="work">
          <Work url="image1.png" tag="project1"/>
          <Work url="image2.png" tag="project2"/>
        </div>
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
          <p className='infotext'><a href='https://www.linkedin.com/in/vashista-dara-26aa20240/' target="_blank" className='rmstyle'>Linkedin</a></p>
          <p className='infotext'><a href='https://github.com/vashista143/' target="_blank" className='rmstyle'>Github</a></p>
          <p className='infotext'><a href='#' className='rmstyle'>Insta</a></p>
        </div>
        </div>
        </div>
    )
}