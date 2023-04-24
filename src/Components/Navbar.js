import React from 'react'
import './Navbar.css'
import { TfiEmail } from 'react-icons/tfi';
import { FiFacebook } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { Button, Image } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='top-navbar'>
            <div className='email'>
                <span className='emai-icon'><TfiEmail /></span>
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
            <img src='https://dtgardening.wpengine.com/wp-content/themes/gardening/images/logo.png' />
            </div>
            <div className='menu'>
                <ul>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./'>Contact</a></li>
                    <li><a href='./'>Shop</a></li>
                    <li><a href='./'>Login</a></li>
                </ul>
            </div>
            {/* <div>
            <Button>Click Here</Button>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            </div>
            <div>
            <Image src='/images/wireframe/image.png' size='small' />
            <Icon disabled name='users' />
            <Icon loading name='spinner' />
            </div> */}
        </div>
      
    </div>
  )
}

export default Navbar;
