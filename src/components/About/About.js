import React from 'react'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import './About.css'
import { Button } from '@material-ui/core';
function About() {
    return (
        <div className='about' id='about'>
            <div className='main-abt' data-aos="zoom-in">
                    <div className='left-img'>
                        <img src='assets/img/satyam.jpeg' />
                    </div>
                    <div className='bio'>
                        <h1 >About Me</h1>
                        <div></div>
                        <br/>
                        <h2>I am Satyam</h2><br />
                         <p>Enthusiastic <strong>Web Developer, Freelancer</strong> eager to contribute to team 
                            success through hard work, attention to detail and excellent organizational skills. 
                            Clear understanding of Javascript, React, Redux and MERN. Motivated to learn, grow and 
                            excel in the Dev Industry.
                        </p>

                        <Button size='large' className='resume'>
                           <a href='assets/Satyam-resume.pdf' target="_blank">
                               <span><h4>Resume</h4> </span><TrendingFlatIcon fontSize='large' style={{color:"rgb(68, 0, 255"}}/> 
                          </a>
                        </Button>
                        
                    </div>
            </div>
        </div>
    )
}

export default About



