import React, { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import Work from '../components/work';
import Header from '../components/header';
export default function Home(){
    let [lightmode,setLightmode] = useState(false)
    useEffect(()=>{
      document.body.classList.toggle("dark-mode", !lightmode);
      // document.getElementById("button").style.backgroundColor= lightmode ? "black" : "#FBFBF9";
      },[lightmode])
    const ldtoggle = () => {
      setLightmode(!lightmode);}
    
    return(
      <div className="App">
        <Header/>
        <br/>
        <div className='introd'><img src={lightmode ? "/right-downdark.png" : "/right-downlight.png"} className='arrow'></img><p className='parao'>Intro</p></div>
        <div className='selfinto'>
        <p className='parao'> Electronics student @RGUKT with an unexpected passion for web development. 
          More into code than circuits, more into pixels than PCBs.
          Always learning, always building.</p>
        </div>
        <br/>
        <br/>
        <div>
          <div className='updatearrow'>
          <img src={lightmode ? "/right-downdark.png" : "/right-downlight.png"} className='arrow'></img>
          <p className='update'>Updates</p>
          </div>
          <div className='updateboxes'>
          <div className='updatebox'>
            <p>
            I have recently launched my professional portfolio, showcasing my work and expertise. I will be consistently updating it with new projects and accomplishments, demonstrating my continuous growth and commitment to excellence in my field
            </p>
          </div>
          {/* <div className='updatebox'>
            <p>
            Senior Product Designer @Mixpanel. Author of Laws of UX. Creator of Humane by Design. 
            Co-organizer of IXD2.Senior Product Designer @Mixpanel. Author of Laws of UX. 
            Creator of Humane by Design. Co-organizer of IXD2.
            </p>
          </div> */}
          {/* <div className='updatebox'>
            <p>
            Senior Product Designer @Mixpanel. Author of Laws of UX. Creator of Humane by Design. 
            Co-organizer of IXD2.Senior Product Designer @Mixpanel. Author of Laws of UX. 
            Creator of Humane by Design. Co-organizer of IXD2.
            </p>
          </div> */}
          
          </div>
        </div>
        <br/><br/>
        <div className='arrowwork'>
        <img src={lightmode ? "/right-downdark.png" : "/right-downlight.png"} className='arrow'></img>
        <p className='workhe'>featured / Work</p>
        </div>
        <div className='work'>
          
          <Work url="/image1.png" tag="project 1 "/>
          <Work url="/image2.png" tag="project 2"/>
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
          <p className='infotext'><a href='mailto:vashista.dara03@gmail.com'  target="_blank" className='rmstyle'>Gmail</a></p>
          <p className='infotext'><a href='https://www.linkedin.com/in/vashista-dara-26aa20240/'  target="_blank" className='rmstyle'>Linkedin</a></p>
          <p className='infotext'><a href='http://github.com/vashista143' target="_blank" className='rmstyle'>Github</a></p>
          <p className='infotext'><a href='#' className='rmstyle'>Insta</a></p>
        </div>
        </div>
      </div>
    )
  }