import React from 'react'
import './Navbar.css'
import { TfiEmail } from 'react-icons/tfi';
import { FiFacebook } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='top-navbar'>
            <div className='email'>
                <span><TfiEmail /></span>
                <a href='./'>info@greenhaven.com</a>
            </div>
            <div className='right-div'>
            <div className='social-icons'>
                <ul>
                    <li><FiFacebook /></li>
                    <li><BsTwitter /></li>
                    <li><AiOutlineGooglePlus /></li>
                </ul>
            </div>
            <div className='get-a-quote'>
                <a href='./'>Get a Quote</a>
            </div>
            <div className='phone-number'>
                <span><BsTelephone /></span>
                <a href='./'>234 456 7658</a>
            </div>
            </div>
        </div>
        <hr></hr>
        <div className='menu-bar'>
            <div className='logo'>
                <img src='./logo' alt='logo-image'></img>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar;
