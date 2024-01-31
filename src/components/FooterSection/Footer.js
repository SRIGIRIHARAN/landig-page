import React from 'react'
import "./style.css";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='footer-left'>
            <div className='footer-logo'>
                <a href='#'><img src={logo} /></a>
            </div>
            <div className='social-icons'>
                <a href='#'><i class="bi bi-instagram" /></a>
                <a href='#'><i class="bi bi-twitter-x" /></a>
                <a href='#'><i class="bi bi-youtube" /></a>
                <a href='#'><i class="bi bi-linkedin" /></a>                
            </div>
            <div className='address'>
                <p>© 2024 SNAPIT.<br />All rights reserved.</p>
            </div>
        </div>
        <div className='footer-right'>
            <div className='footer-navlist'>
                <div className='footer-head'>
                    <p>QUICK LINK</p>
                </div>
                <div className='footer-list'>
                    <a href='#'>Shop</a>
                    <a href='#'>E-sport</a>
                    <a href='#'>Licensing</a>
                </div>
            </div>
            <div className='footer-navlist'>
                <div className='footer-head'>
                    <p>COMPANY</p>
                </div>
                <div className='footer-list'>
                    <a href='#'>Products</a>
                    <a href='#'>Apps & Games</a>
                    <a href='#'>Features</a>
                </div>
            </div>
            <div className='footer-navlist'>
                <div className='footer-head'>
                    <p>HELP</p>
                </div>
                <div className='footer-list'>
                    <a href='#'>About</a>
                    <a href='#'>Support</a>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
            <div className='footer-navlist'>
                <div className='footer-head'>
                    <p>RESOURCES</p>
                </div>
                <div className='footer-list'>
                    <a href='#'>Youtube Playlist</a>
                    <a href='#'>How To - Blog</a>
                    <a href='#'>Terms & Conditions</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer