import React from 'react'
import Project from './Project'
import messageBoard from '../assets/images/messageboard.jpeg'
import foodSaver from '../assets/images/foodSavor.jpeg'
import restuarantRoul from '../assets/images/rrImage.jpeg'
import { v4 } from 'uuid'

const divStyles = {
  height: '10px',
  width: '10px'
}

function Projects()
{   
  const myProjects = [
    {
      name:'Message Board',
      description: 'A forum like portal where users can interact by new posts and reply to other posts.',
      technologiesUsed: 'jQuery, JavaScript, HTML, CSS',
      link: 'https://github.com/sheilaje/messageboard',
      image: messageBoard
    },
    {
      name: 'Restaurant Roulette',
      description: 'An app that helps in choosing a restaurent from an API based on teh users input of distance and price range',
      technologiesUsed: 'C#,.Net,Zomato API',
      link: 'https://github.com/sheilaje/Restaurant-Roulette',
      image: restuarantRoul
    },
    {
      name: 'Food Savor',
      description: 'This is a web app that lets users search for recipes based on expiring ingredient in the pantry',
      technologiesUsed: 'Angular, Firebase, Firebase Authentication',
      link: 'https://github.com/sheilaje/Food-Savor',
      image: foodSaver
    }
  ]
  return(
    <div >
      {myProjects.map((project)=>
        <Project 
          name={project.name}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          link={project.link}
          image={project.image}
          key={v4()}/>
      )}
    </div>
  )
}

export default Projects