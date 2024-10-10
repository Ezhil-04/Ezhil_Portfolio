import React from 'react'
import  { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from'aos';
import 'aos/dist/aos.css'

const Contact = ()=>{

  useEffect(()=>{AOS.init({duration:1000})},[]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4273e01e-3472-48fe-a7dc-5893a42a2382");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully");
    }
    
  }
   
    return(
      
       
        <div id="contactSection">

             <h1 id='sectionH1' data-aos="fade"> Contact me </h1>

            <div className="wrapper" data-aos="fade-up">

                <div className="infoBox">
                    <h3>Contact information</h3>
                    <p>For creating attractive websites and user interface components </p>
                     

                     <div className="innerBoxes">
                       <div className="innerDivs"><FaPhoneAlt className="icons" /></div>

                       <div className="innerDivs">  <p class="label labelOne">8015451774</p></div>
                     
                     </div> 

                     <div className="innerBoxes">
                        <div className="innerDivs"> <IoMdMail  className="icons" /></div>
                        <div className="innerDivs"> <p class="label labelTwo">ezhilvalavan004@gmail.com</p></div>
                        
                      
                     </div>

                     <div className="innerBoxes">
                        <div className="innerDivs"> <FaLocationDot   className="icons"/></div>
                        <div className="innerDivs"> <p class="label labelThree">Chennai, Tamilnadu, India</p></div>
                     
                      
                        </div>

                      <div className='socialIconsOuterDiv'>
                      <div className="innerBoxes iconsDiv">


                        <a href="https://github.com/Ezhil-04/" target="_blank" className="innerDivs">
                          <FaGithubSquare id="socialMediaIcons" className="icons" /></a>

                        <a href="https://www.linkedin.com/in/ezhil-valavan-36248b2b2/" target="_blank" className="innerDivs">
                           <FaLinkedin id="socialMediaIcons" className="icons" /></a>

                           <a href="https://www.instagram.com/victor_james_004" target="_blank" className="innerDivs">
                        <FaInstagramSquare id="socialMediaIcons" className="icons" /></a>
                        

                      </div>
                      </div>
                     

                      
                     






                </div>
                <div className="contactBox">
                  <form  onSubmit={onSubmit}>
                      <div className='rowOne'>
                         <div>
                            
                            <input name="from_name" className="inputBoxes" required type="text" />
                            <label htmlFor="">Name </label>
                         </div>
                         <div >
                           
                         <input name="from_email" className="inputBoxes" required type="email" />
                            <label htmlFor="">E-mail </label>
                       
                         </div>
                      </div>

                      <div className="rowTwo">
                     
                     <input name="Phone_number" className="inputBoxes" required  type="number"  />
                     <label htmlFor="">Phone No</label>
                   </div>


                      <div className="rowTwo">
                     
                        <input name="subject_main" className="inputBoxes" required  type="text" />
                        <label htmlFor="">Subject</label>
                      </div>

                      <div className="rowThree">
                     
                         <textarea name="message" className="inputBoxes" required  width="100%"></textarea>
                         <label htmlFor="">Message</label>
                      </div>

                      <div className="submitBtnDiv">
                        <button type="submit">Send Message</button>
                      </div>

                      </form>
                </div>

            </div>

        </div>



    )

}

export default Contact