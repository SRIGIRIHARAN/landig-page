import React from 'react'
import "./style.css";

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <div className='contactus-left'>
            <div className='contactus-head'>
                <p>Stay in the Loop</p>
            </div>
            <div className='contactus-body'>
                <p>Subscribe to our newsletter for exclusive updates, 
                    game releases, and more! Enter your email address 
                    to receive the latest gaming news and special offers.
                </p>
            </div>
        </div>
        <div className='contactus-right'>
            <form className='email-input'>
                <input type='email' name='email' placeholder='Email Address' className='email-inputbox'></input>
                <button className='email-btn'>Play Now</button>
            </form>
        </div>
    </div>
    
  )
}

export default ContactUs