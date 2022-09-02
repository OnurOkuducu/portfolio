import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
            <a href='https://tr.linkedin.com/in/onur-okuducu/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size = "2.25rem"/>
            </a>
       
    );
};

export default HeaderSocials;
