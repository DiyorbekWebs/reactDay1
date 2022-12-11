import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <>
         <div className='container'>
            <div className='box1'>
                <div className='titles1'>
                    <h1 className='title1'>Ready to make something kickass?</h1>
                    <h1 className='title2'>Let's get on a call.</h1>
                </div>
                <div className='wrapper1'>
                    <div className='left1'>
                        <h1 className='logo1'>Portfolio Creator</h1>
                        <p className='text'>4353 Delaware Avenue, San Francisco, USA</p>
                        <p className='text'>hi@thefolio.com</p>
                    </div>
                    <div className='right1'>
                        <p className='paragraf1'>About</p>
                        <p className='paragraf1'>Contact</p>
                        <p className='paragraf1'>Dribbble</p>
                        <p className='paragraf1'>Services</p>
                        <p className='paragraf1'>Blog</p>
                        <p className='paragraf1'>Instagram</p>
                        <p className='paragraf1'>Experience</p>
                        <p className='paragraf1'>Projects</p>
                        <p className='paragraf1'>Twitter</p>
                    </div>
                </div>
            </div>
         </div>   
        </>
    );
}

export default Footer;
