import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.navlogo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis sit expedita laboriosam suscipit, est ipsam, beatae numquam itaque, voluptatibus asperiores ab rerum amet! Ipsam quae quod consequuntur inventore sunt.</p>
                    <div className="footer-social-icons">
                        <a href=""><img src={assets.facebook_icon} alt="" /></a>
                        <a href=""><img src={assets.twitter_icon} alt="" /></a>
                        <a href=""><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>About us</li></a>
                        <a href=""><li>Delivery</li></a>
                        <a href=""><li>Privacy policy</li></a>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>
                            <a href="tel:+919178978434" style={{ color: 'inherit', textDecoration: 'none' }}>
                                +91 9178978434
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contactcravelt@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                contactcravelt@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">copyright 2024 &copy; Cravelt.com All Right Reserved.</p>
        </div>
    );
}

export default Footer;
