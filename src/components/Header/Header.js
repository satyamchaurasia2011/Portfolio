import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ScrollspyNav from "react-scrollspy-nav";
import ReorderIcon from '@material-ui/icons/Reorder';
import { Button, List, Drawer } from '@material-ui/core';
import './Header.css';
function Header() {
  const [top, setTop] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setTop(open);
    };
    const list = () => (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className='drawer-sec'
      >
        <List className='list-ele'>
        <h3><a href="#about">About</a></h3> 
          <h3><a href="#skills">Skills</a></h3> 
          <h3><a href="#projects">Projects</a></h3> 
        </List>
        <div className='drawer-ico'>
            <h3><a href="https://github.com/satyamchaurasia2011"><GitHubIcon /></a></h3>
            <h3><a href="https://www.linkedin.com/in/satyam-chaurasia-948206193/"><LinkedInIcon /></a></h3>
            <h3><a href="https://twitter.com/Satyam_coder"><TwitterIcon /></a></h3>
            </div> 
      </div>
    );
    return (
        <div className='header'>
             <ScrollspyNav
            scrollTargetIds={[
              "about",
              "skills",
              "projects",
            ]}
              id='row-scroll'
            activeNavClass="is-active"
            scrollDuration="800"
            headerBackground="true"
            offset={350}
          >
            <div className='main-header'>
            <div className='avatar'>
               <a href='/'><h1>S</h1></a>
            </div>
            <div className='header-option'>
           
            <h3><a href="#about">About</a></h3> 
            <h3><a href="#skills">Skills</a></h3> 
            <h3><a href="#projects">Projects</a></h3>  
           
            </div>
            <div className='reorder-btn'>
                    <Button onClick={toggleDrawer(true)}><ReorderIcon fontSize='large' style={{marginTop:'25px', marginRight:'25px'}}/></Button>
                    <Drawer anchor='top' open={top} onClose={toggleDrawer(false)}>
                      {list()}
                        </Drawer>
                        
                </div>
            </div>
           
            </ScrollspyNav>
            <div className='header-icons'>
            <h3><a href="https://github.com/satyamchaurasia2011"><GitHubIcon /></a></h3>
            <h3><a href="https://www.linkedin.com/in/satyam-chaurasia-948206193/"><LinkedInIcon /></a></h3>
            <h3><a href="https://twitter.com/Satyam_coder"><TwitterIcon /></a></h3>
            </div>
            
        </div>
    )
}

export default Header





