import React from 'react';
import './Footer.css';
import { FiFacebook } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { Button } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='top-footer'>
        <div className='footer-menu'>
          <ul>
            <li><a href='./'>HOME</a></li>
            <li><a href='./'>ABOUT</a></li>
            <li><a href='./'>NEWS</a></li>
            <li><a href='./'>GALLERY</a></li>
          </ul>
        </div>
        <div className='footer-sociallinks'>
        <ul>
          <li><a href='./'><FiFacebook /></a></li>
          <li><a href='./'><BsTwitter /></a></li>
          <li><a href='./'><AiOutlineGooglePlus /></a></li>
        </ul>
        </div>
      </div>
      <div className='middle-footersection'>
      <div className='subscribe-section'>
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <p>If you have a garden, you have everything in this world….a world of your own, to plant, nurture and grow….not only plants but your soul!</p>
          <input type='email' id='email' name='email' placeholder='Email' />
          <Button>SUBSCRIBE</Button>
          
      </div>
      <div className='contact-section'>
          <h2>CONTACT INFO</h2>
          <p>121 King Street, Melbourne
              <p>Victoria 3000 Australia</p>
              <p>+61 3 8376 6284</p>
              <a href='./'>Email@email.com</a>
              <p>Skype.skype</p>
          </p>
      </div>
      <div className='photo-stream'>
          <h2>PHOTO STREAM</h2>
      </div>
      </div>
      <hr />
      <div className='sub-footer'>
          <p>© 2016 GARDEN TEMPLATE BY DESIGNTHEMS. ALL RIGHTS RESERVED.</p>
          <div className='payment-terms-policy'>
            <a href='./'>Payment Terms</a>
            <a href='./'>Policy</a>
          </div>
      </div>
    </div>
  )
}

export default Footer