import React from 'react'
import "./Contact.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div  className="contact-icon"
        data-aos="zoom-in-up">
          <a href='https://www.instagram.com/yourusername'  className="items">
            <FaInstagram className='icons
            '/> 
          </a>
          <a href='https://www.facebook.com/yourusername' className="items">
            <FaFacebook className='icons
            ' />
          </a>
          <a href='

' className="items">
            <FaLinkedin className='icons
            ' />
          </a>
          <a href='https://github.com/manojprajapti928
' className="items">
            <FaGithub className='icons
            ' />
          </a>
          <a href='mailto:manojprajapti928@gmail.com' className="items">
            <SiGmail className='icons
            ' />
          </a>
        </div>
      </div>
    </>
  )

}

export default Contact
