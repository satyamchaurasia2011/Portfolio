import React from 'react'
import './Home.css';
import Logo from './logos/Logo';
function Home() {
    return (
        <div className='home'>
            <div className='back-style'>
                <Logo identity='html' add='html-5'/>
                <Logo identity='tailwind' add='tailwindcss-icon'/>
                <Logo identity='materialize' add='materializecss'/>
                <Logo identity='css' add='css-3'/>
                <Logo identity='tail' add='tailwindcss'/>
                <Logo identity='java' add='java'/>
                <Logo identity='js' add='javascript'/>
                <Logo identity='react' add='react'/>
                <Logo identity='preact' add='preact'/>
                <Logo identity='redux' add='redux'/>
                <Logo identity='vs' add='visual-studio'/>
                <Logo identity='c' add='c-plusplus'/>
                <Logo identity='vercel' add='vercel'/>
                <Logo identity='sharp' add='c-sharp'/>
                <Logo identity='python' add='python'/>
                <Logo identity='post' add='postman-icon'/>
                <Logo identity='gdev' add='google-developers'/>
                <Logo identity='drive' add='google-drive'/>
                <Logo identity='web' add='web.dev-icon'/>
                <Logo identity='youtube' add='youtube-icon'/>
                <Logo identity='what' add='whatsapp'/>
                <Logo identity='twitter' add='twitter'/>
                <Logo identity='fb' add='facebook'/>
                <Logo identity='insta' add='instagram'/>
                <Logo identity='atom' add='atom-icon'/>
                <Logo identity='next' add='nextjs-icon'/>
                <Logo identity='udemy' add='udemy-icon'/>
                <Logo identity='link' add='linkedin-icon'/>
                <Logo identity='vector' add='vector-timber'/>
                <Logo identity='npm' add='npm'/>
                <Logo identity='ui' add='material-ui'/>
                <Logo identity='heroku' add='heroku-icon'/>
                <Logo identity='code' add='visual-studio-code'/>
                
            </div>
            <div className='sub-home'>
                    <div className='intro'>
                        <h3>Hello, I'm</h3>
                        <h1>Satyam Chaurasia</h1>
                        <h2>Full Stack Developer</h2>
                    </div>
                    <div className='img'>
                        <img src='assets/img/back3.png' alt />
                    </div>
            </div>

        </div>
    )
}

export default Home
