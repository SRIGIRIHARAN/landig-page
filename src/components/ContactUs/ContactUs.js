import React from 'react'
import "./style.css";
import Divider from '../Divider/Divider';

const ContactUs = () => {
  return (
    <div className='contact-masterdiv'>
       <div className='contact-us'>
       <div className='contactus-left'>
            <div className='contactus-head'>
                <p>Stay in the <br/> Loop</p>
            </div>
            <div className='contactus-body'>
                <p>Subscribe to our newsletter for exclusive updates,game releases,<br /> 
                    and more! Enter your email address to receive the latest gaming<br /> 
                    news and special offers.
                </p>
            </div>
        </div>
        <div className='contactus-right'>
            <form className='email-input'>
                <input type='email' name='email' placeholder='Email Address' className='email-inputbox'></input>
                <button className='playnow-btn'>Play Now</button>
            </form>
        </div>
       </div>
       <Divider />
    </div>
    
  )
}

export default ContactUs