import React from 'react'
import "./navbar.css"
import v from "./source/v.png"
import contactImg from "./source/profile.png"
import { Link } from 'react-scroll'
import { RiMenuFoldFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from 'react'



const Navbar = ({window}) => {

const[showMenu,setShowMenu]=useState(false)



  
  return (
    
    <nav className="navbar raleway " >
      
      <img src={v} alt="logo" className="logo" />

      <div className="desktopNavItems fade_down ">
      
          <Link activeClass="activeOne" to="homepage" spy={true} smooth={true} duration={500} offset={0} className="DesktopNavItem">Home</Link>
          <Link activeClass="activeOne" to="skillsSection" spy={true} smooth={true} duration={500} offset={0} className="DesktopNavItem">Skills</Link>
          <Link activeClass="activeOne" to="portfolioSection" spy={true} smooth={true} duration={500} offset={0} className="DesktopNavItem">Portfolio</Link>
          <Link activeClass="activeOne" to="contactSection" spy={true} smooth={true} duration={500} offset={0} className="DesktopNavItem">Contact</Link>
          
      
    
      </div>

      <button className="desktopNavContactBtn" onClick={()=>{
        document.getElementById("contactSection").scrollIntoView({behavior:"smooth",offset:20})
       }}>

        <img src={contactImg} alt="" className="contactbtnImage" />
        <span className="buttonText">Lets Connect</span>
      </button>



        {showMenu ? (<MdClose className="burgerMenu" onClick={()=>{setShowMenu(false)}} />) :   (<RiMenuFoldFill className="burgerMenu" onClick={()=>{setShowMenu(true)}} /> )}
    
     
       
<div className="mobileNavItems "  style={{height : showMenu? "auto" : "0" , padding: showMenu?"5rem" : "0px"}} >
  <div className="mobileLinkDiv"><Link activeClass="activeTwo" to="homepage" spy={true} smooth={true} duration={500} offset={-20} className="mobileNavItem"  onClick={()=>{setShowMenu(false)}}>Home</Link></div>
  <div className="mobileLinkDiv"><Link activeClass="activeTwo" to="skillsSection" spy={true} smooth={true} duration={500} offset={-19} className="mobileNavItem"  onClick={()=>{setShowMenu(false)}}>Skills</Link></div>
  <div className="mobileLinkDiv"><Link activeClass="activeTwo" to="portfolioSection" spy={true} smooth={true} duration={500} offset={-12} className="mobileNavItem"  onClick={()=>{setShowMenu(false)}}>Portfolio</Link></div>
  <div className="mobileLinkDiv"><Link activeClass="activeTwo" to="contactSection" spy={true} smooth={true} duration={500} offset={-10} className="mobileNavItem"  onClick={()=>{setShowMenu(false)}}>Contact</Link></div>
</div>

    </nav>
  )
}

export default Navbar