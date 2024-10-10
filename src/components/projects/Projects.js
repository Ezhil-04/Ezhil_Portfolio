import React from 'react'
import {useEffect} from 'react'
import './projects.css'
import music from "./source/music.jpg"
import raining from "./source/raining.jpg"
import pen from "./source/pen.jpg"
import notes from "./source/notes1.jpg"
import thinking from "./source/thinking.jpg"
import door from "./source/door.jpg"
import AOS from'aos';
import 'aos/dist/aos.css'



const Projects = ()=>{

  useEffect(()=>{AOS.init({duration:1000})},[]);
return(

  <section id="portfolioSection">
      <h1 id="sectionH1" data-aos="fade">My Portfolio</h1>
     <div id="upperParagraphs"><p data-aos="fade">" I have developed a strong foundation in list of relevant skills like HTML, CSS, JavaScript, React. I am confident in my ability to work independently and contribute meaningfully to projects</p></div>
     <div id="portfolioWrapper">


      <div className="project" data-aos="fade-left">
          <div className="projectImgDiv">
          <img height="40rem" src={music} alt="" />
          </div>
          <div className="content">
                <div>
                  <h2>Music player</h2>
                  </div>
                  <div className="description">
                  <p>A music player with comparable features to a professional one. </p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/music-player/" target="_blank">Visit site</a></button>
          </div>
      </div>

      
      <div className="project" data-aos="fade-right">
          <div className="projectImgDiv">
          <img height="40rem" src={raining} alt="" />
          </div>
          <div className="content">
                <div id="topic">
                  <h2>Weather app</h2>
                  </div>
                  <div className="description">
                  <p>Real time weather app where we can see weather of any place in the world.</p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/weather_app/" target="_blank">Visit site</a></button>
          </div>
      </div>




      
      <div className="project" data-aos="fade-left">
          <div className="projectImgDiv">
          <img height="40rem" src={pen} alt="" />
          </div>
          <div className="content">
                <div>
                  <h2>Quotes App</h2>
                  </div>
                  <div className="description">
                  <p>We can get random Quote from internet through API and can able to Tweet that Quote  directly  in Twitter( X app ) by one click.
                  </p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/quotes-app/" target="_blank">Visit site</a></button>
          </div>
      </div>


      
      <div className="project" data-aos="fade-right">
          <div className="projectImgDiv">
          <img height="40rem" src={thinking} alt="" />
          </div>
          <div className="content">
                <div>
                  <h2>Quiz App</h2>
                  </div>
                  <div className="description">
                  <p>Quiz app where we can answer the questions and check our score</p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/quiz-app/" target="_blank">Visit site</a></button>
          </div>
      </div>




      <div className="project" data-aos="fade-left">
          <div className="projectImgDiv">
          <img height="40rem" src={notes} alt="" />
          </div>
          <div className="content">
                <div>
                  <h2>Notes App</h2>
                  </div>
                  <div className="description">
                  <p> An app where we can  store Notes locally
                  </p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/notes-app/" target="_blank">Visit site</a></button>
          </div>
      </div>


      <div className="project" data-aos="fade-right">
          <div className="projectImgDiv">
          <img height="40rem" src={door} alt="" />
          </div>
          <div className="content">
                <div>
                  <h2>Signup-Signin Form</h2>
                  </div>
                  <div className="description">
                  <p>Attractive UI of Login and Signup page with validation</p>
                  </div>
                  
              
              <button id="Btn"><a href="https://ezhil-04.github.io/project-nexus-project1-login-signup/" target="_blank">Visit site</a></button>
          </div>
      </div>



      
    



     </div>
     <div className="viewMoreDiv">
         <button data-aos="fade" id="viewMoreBtn"><a href="https://github.com/Ezhil-04?tab=repositories" target="_blank">View more</a></button>
     </div>
  </section>

)
}
export default Projects