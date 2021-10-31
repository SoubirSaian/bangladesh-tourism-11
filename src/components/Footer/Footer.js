import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="text-white">Contact : +91 8945993088, +91 7363800857</p>
                <p className="text-white">email : travel.bangladesh.2021@gmail.com</p>
                 <span>
                    <i className="fab fa-facebook-square social-icon"></i>
                    <i className="fab fa-twitter-square social-icon"></i>
                    <i className="fab fa-instagram-square social-icon"></i>
                    <i className="fab fa-youtube-square social-icon"></i>
                    <i className="fab fa-linkedin social-icon"></i>
                </span>
            <h5 className="text-white">Bangladesh travel &copy; 2021</h5>
        </div>
    );
};

export default Footer;