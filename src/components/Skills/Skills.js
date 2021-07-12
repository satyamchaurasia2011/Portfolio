import React from 'react'
import Skill from './Skill'
import './Skills.css'

function Skills() {
    return (
       <div className='skills' id='skills'>
           <div className='main-skills'>
           <div data-aos="zoom-in" className='top-sk' id='small-sk'>
                    <h1>Skills</h1>
               </div>
               <div className='left-skills'>
                    <Skill name='HTML5' range='80'/>
                    <Skill name='CSS3' range='78'/>
                    <Skill name='JavaScript' range='75'/>
                    <Skill name='C' range='83'/>
                    <Skill name='C++' range='85'/>
                    <Skill name='PHP' range='40'/>
                    <Skill name='SQL' range='65'/>
               </div>
               <div data-aos="zoom-in" className='center'>
                    <h1>Skills</h1>
               </div>
               <div className='right-skills' >
                 <Skill name='NodeJs' range='73'/>
                 <Skill name='Bootstrap' range='75'/>
                 <Skill name='React+Redux' range='84'/>
                 <Skill name='MongoDB' range='65'/>
                 <Skill name='Firebase' range='75'/>
                 <Skill name='Nextjs' range='55'/>
                 <Skill name='MERN' range='78'/>
               </div>
           </div>
       </div>
    )
}

export default Skills


{/* <StyleSkill id="skills">
<h1>Skills</h1>
<SkillMain>
    <h2>Languages</h2>
    <SkillBase>
    <Skill skill="HTML5" icon = "assets/img/html.png"/>
    <Skill skill="CSS3" icon = "assets/img/css3.png"/>
    <Skill skill="JavaScript" icon = "assets/img/javascript.png"/>
    <Skill skill="C" icon = "assets/img/c.png"/>
    <Skill skill="C++" icon = "assets/img/c++.png"/>
    </SkillBase>
    <h2>Technologies</h2>
    <SkillBase>
    <Skill skill="Nodejs" icon = "assets/img/nodejs.png"/>
    <Skill skill="Bootstrap" icon = "assets/img/bootstrap.png"/>
    <Skill skill="Express" icon = "assets/img/express.png"/>
    <Skill skill="React" icon = "assets/img/react.png"/>
    <Skill skill="Redux" icon = "assets/img/redux.png"/>
    <Skill skill="Firebase" icon = "assets/img/firebase.png"/>
    <Skill skill="MongoDB" icon = "assets/img/mongodb.png"/>
    <Skill skill="Heroku" icon = "assets/img/heroku.png"/>

    </SkillBase>

</SkillMain>

</StyleSkill> */}