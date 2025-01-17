import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At BiteRush, we bring you the finest flavors from your favorite restaurants, delivered fresh and fast to your doorstep. Enjoy a seamless food delivery experience that satisfies your cravings with just a few clicks!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7061561710</li>
                <li>amitgupta561710@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 © Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
