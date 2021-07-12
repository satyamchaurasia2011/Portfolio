import React from 'react'
import './Skill.css'
function Skill({name, range}) {
    return (
       <div className='skill' data-aos="fade-right">
               <label>{name}</label>
               <span>{range}%</span>
         
           <div className='range'>
                <div className='percent-fill' style={{width: `${range}%`}}></div>
           </div>
       </div>
    )
}

export default Skill

