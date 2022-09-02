import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev ,FaInstagram} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = (props) => {
    if(props.place == "contact"){
        return (
        <div className='home__socials'>
            <a href='https://tr.linkedin.com/in/onur-okuducu/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size = '64'/>
            </a>
            <a href='https://www.instagram.com/onur.okuducu/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram size = '64'/>
            </a>
            <a href='https://github.com/OnurOkuducu' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub size = '64'/>
            </a>
        </div>
        )
    }
    else{
        return (
        <div className='home__socials'>
            <a href='https://tr.linkedin.com/in/onur-okuducu/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size = '64'/>
            </a>
        </div>
    );
    }
    
};

export default HeaderSocials;
