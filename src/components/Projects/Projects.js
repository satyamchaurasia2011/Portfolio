import React from 'react'
import './Projects.css'
import Project from './Project'

function Projects() {
    return (
        <div id="projects">
           <Project
           index='01'
           image='assets/project/burger.png'
           title='Choose and Order your Burger'
           about='User can choose their own burger by choosing ingredients to add in buns.'
           git='https://github.com/satyamchaurasia2011/burgerX'
           link='https://burger-x-aec4b.web.app/'
           />
           <Project
           index='02'
           image='assets/project/slack.png'
           title='Slack Clone'
           about='This is a clone of slack. Users can create their own channel and chat with their friends.'
           git='https://github.com/satyamchaurasia2011/slack-clone'
           link='https://slack-clone-6026e.web.app/'
           />
          <Project
           index='03'
           image='assets/project/instagram.png'
           title='Instagram Clone'
           about='This is a clone of Instagram. You can create your profile and can add posts. You can also follow your friends who are registered in this site.'
           git='https://github.com/satyamchaurasia2011/my-insta-clone'
           link='https://my-instagram-clone.netlify.app/'
           />
           <Project
           index='04'
           image='assets/project/notes.png'
           title='Keep Notes'
           about='A platform where you can add your to-do notes or anything that you may be forget.'
           git='https://github.com/satyamchaurasia2011/keep-notes'
           link='https://keepnotes2.herokuapp.com/'
           />
           <Project
           index='05'
           image='assets/project/secret1.png'
           title='Authentication Based Anonymous Messages'
           about='A website where you can express your feelings or thoughts to the world without exposing your identity.'
           git='https://github.com/satyamchaurasia2011/Authentication-secret'
           link='https://powerful-reef-36934.herokuapp.com/'
           />
            <Project
           index='06'
           image='assets/project/movie.png'
           title='Hulu Clone'
           about='A movie website like hulu. Next.js framework is used to make this website.'
           git='https://github.com/satyamchaurasia2011/MovieHub'
           link='https://movie-hub-phi.vercel.app/'
           />
        </div>
    )
}

export default Projects

