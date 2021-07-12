import React from 'react'
import './Logo.css'
function Logo({add, identity}) {
    return (
        <div className='logo'>
            <img className={identity} src = {`https://cdn.svgporn.com/logos/${add}.svg`}/>
        </div>
    )
}

export default Logo
