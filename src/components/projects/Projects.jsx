import React from 'react'
import Project from './Project'

function Projects()
{   
  const myProjects = [
    {
      name:'Message Board',
      description: 'A forum like portal where users can interact by new posts and reply to other posts.',
      technologiesUsed: 'jQuery, JavaScript, HTML, CSS',
      link: 'https://github.com/sheilaje/messageboard'
    },
    {
      name: 'Restaurant Roulette',
      description: 'An app that helps in choosing a restaurent from an API based on teh users input of distance and price range',
      technologiesUsed: 'C#,.Net,Zomato API',
      link: 'https://github.com/sheilaje/Restaurant-Roulette'
    },
    {
      name: 'Food Savor',
      description: 'This is a web app that lets users search for recipes based on expiring ingredient in the pantry',
      technologiesUsed: 'Angular, Firebase, Firebase Authentication',
      link: 'https://github.com/sheilaje/Food-Savor'
    }
  ]
  return(
    <div>
      {myProjects.map((project, index)=>
        <Project
          name={project.name}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          link={project.link}
          key={index}/>
      )}
    </div>
  )
}

export default Projects