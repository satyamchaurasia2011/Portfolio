import React from 'react'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import './About.css'
import { Button } from '@material-ui/core';
function About() {
    return (
        <div className='about' id='about'>
            <div className='main-abt'>
                    <div data-aos="flip-up" className='left-img'>
                        <img src='assets/img/satyam.jpeg' />
                    </div>
                    <div className='bio' data-aos="fade-up">
                        <h1 data-aos="fade-down">About Me</h1>
                        <div></div>
                        <br/>
                        <h2>I am Satyam</h2><br />
                         <p>Enthusiastic <strong>Web Developer, Freelancer</strong> eager to contribute to team 
                            success through hard work, attention to detail and excellent organizational skills. 
                            Clear understanding of Javascript, React, Redux and MERN. Motivated to learn, grow and 
                            excel in the Dev Industry.
                        </p>

                        <Button size='large' className='resume'>
                           <a href='assets/Satyam-resume.pdf' download data-aos="fade-down-right">
                               <span><h4>Resume</h4> </span><TrendingFlatIcon fontSize='large' style={{color:"black"}}/> 
                          </a>
                        </Button>
                        
                    </div>
            </div>
        </div>
    )
}

export default About



