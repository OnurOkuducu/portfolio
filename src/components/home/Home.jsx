import React from 'react';
import './Home.css';
import Me from '../../assets/avatarr4.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img'  />
                <h1 className="home__name">Onur Okuducu</h1>
                
                <span className="home__education">Computer Engineering student @ Middle East Technical University</span>
                <div className='home__socials'>
                     <HeaderSocials/>
                    </div>
                   
  
                <a href="#contact" className="btn" style={{"margin":"10px 0 10px 0"}}> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home