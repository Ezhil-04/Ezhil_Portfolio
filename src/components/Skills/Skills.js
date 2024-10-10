import React from 'react'
import {useEffect,useState} from 'react'
import './skills.css'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import github from '../../assets/github.png'
import AOS from'aos';
import 'aos/dist/aos.css'

const Skills = () => {
  
  

    const skillArr = [
      {
        name: "HTML",
        description: "Proficient in crafting robust HTML structures and designing visually appealing layouts, ensuring accessibility and cross-browser compatibility.",
        img: html
      },
      {
        name: "CSS",
        description: "Skilled in creating responsive, visually stunning user interfaces using CSS, incorporating animations, transitions, and media queries for a dynamic user experience.",
        img: css
      },
      {
        name: "JavaScript",
        description: "Possess a strong foundation in JavaScript, with proficiency in DOM manipulation, event handling, and modern JavaScript concepts.",
        img: js
      },
      {
        name: "React",
        description: "Currently developing React skills, with a solid understanding of components, state management, and hooks. Actively working on a React projects to deepen my proficiency in React",
        img: react
      },
      {
        name: "GitHub",
        description: "Efficiently collaborate on projects using GitHub, proficient in creating repositories, managing branches. Experienced in version control best practices.",
        img: github
      }
    ];
   
    useEffect(()=>{AOS.init({duration:1000})},[]);

   


    const handleAnimationState=(index)=>{
     
      return index % 2 == 0?"fade-left":"fade-right";
    }
       

  return (
    <section id="skillsSection">
     
     <h1 id="skillsSectionH1" data-aos="fade">My Skills</h1>
     <div id="skillsUpperParagraphs"><p data-aos="fade-up">"As a dedicated final year student, I am eager to showcase my skills and passion for web development. Through my academic coursework and personal projects, I have developed a strong foundation in list of relevant skills like HTML, CSS, JavaScript, React. I am confident in my ability to work independently and contribute meaningfully to projects</p></div>
     
      
      { <main id="skillsWrapper">

       {
        skillArr.map((skill,index)=>(
          
            <div data-aos={handleAnimationState(index)} id="skillBox" key={index}>
                <div id="imgBox">
                    <img src={skill.img} alt="Html icon" />
                </div>
                <div id="textBox">
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
                </div>
            </div>
        ))

       }
     

      </main> }

    </section>
  )
}

export default Skills;