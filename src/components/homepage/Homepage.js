import React from 'react'

import "./homepage.css"
import profile from '../../assets/myImg.jpg'


const Homepage = () => {

  return (
    <section id="homepage">
        <div className="homeContent">

           <div className="textContent">
            <div className="texts">
            <h2 id="line1" className="fade" >Hello,</h2>
            <h2 id="line2" className="fade" >I am <span>Ezhil</span></h2>
            <h2 id="line3" className="fade_right" >Front-End Web Developer</h2>
            <br></br>
            <p  id="line4" className="fade_up">Let's build something amazing together</p>
            </div>
            
           </div>

           <div className="imgDiv">
              <img  src={profile} alt="" className="myImg fade" />
           </div>
          
        </div>
       
    </section>
  )
}

export default Homepage