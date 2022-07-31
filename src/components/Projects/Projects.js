import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div id="projects">
      <Project
        index="01"
        image="assets/project/burger.png"
        title="Choose and Order your Burger"
        about="You can choose your own burger by choosing ingredients to add in buns."
        git="https://github.com/satyamchaurasia2011/burgerX"
        link="https://burger-x-aec4b.web.app/"
      />
      <Project
        index="02"
        image="assets/project/slack.png"
        title="Slack Clone"
        about="This is a clone of slack. You can create your own channels and chat with your friends."
        git="https://github.com/satyamchaurasia2011/slack-clone"
        link="https://slack-clone-6026e.web.app/"
      />
      <Project
        index="03"
        image="assets/project/instagram.png"
        title="Instagram Clone"
        about="This is a clone of Instagram. You can create your profile and can add posts. You can also follow your friends who are registered in this site."
        git="https://github.com/satyamchaurasia2011/my-insta-clone"
        link="https://my-instagram-clone.netlify.app/"
      />
      <Project
        index="04"
        image="assets/project/notes.png"
        title="Keep Notes"
        about="A platform where you can add your to-do notes or anything that you may be forget."
        git="https://github.com/satyamchaurasia2011/keep-notes"
        link="https://keepnotes2.herokuapp.com/"
      />
      <Project
        index="05"
        image="assets/project/tinder.png"
        title="Tinder Clone"
        about="A match maker app created by using react native included firebase. You can like people by swiping right and reject by swiping left."
        git="https://github.com/satyamchaurasia2011/Tinder-App"
        link="https://github.com/satyamchaurasia2011/Tinder-App"
      />
      <Project
        index="06"
        image="assets/project/movie.png"
        title="MovieHub"
        about="A movie website built using Next.js framework. You can see all genre movie and its popularity"
        git="https://github.com/satyamchaurasia2011/MovieHub"
        link="https://movie-hub-phi.vercel.app/"
      />
      <Project
        index="07"
        image="https://cdn1.iconfinder.com/data/icons/ui-5/502/file-512.png"
        title="Docs"
        about="Similar to Google docs created using next js. You can create word documents and save it here."
        git="https://github.com/satyamchaurasia2011/My-Docs"
        link="https://google-doc.vercel.app/"
      />
    </div>
  );
}

export default Projects;
