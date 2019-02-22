import React from 'react'
import profilepic from '../assets/images/Sheila.jpeg'
import '../assets/styles/styles.css'

const outerDivStyles ={
  // position : 'relative',
  display: 'flex',
  flexWrap: 'nowrap'
}

const innerDivStyles ={
  position : 'absolute'
}

function AboutMe()
{   
  return(
    <div style= {outerDivStyles}>
      <img  className = 'picStyles' src={profilepic} alt="Profile image"/>
      <div style={innerDivStyles}>
        {/* <h2 className = 'h2Styles' >About Me</h2> */}
        <p className = 'pStyles'> I am a Full Stack Web Developer with C#, .NET, Node JS, Angular and React JS experience. I've worked as a lecturer in engineering colleges, and have a Masters in Engineering and Computer Science .I am seeking a software developer role where I can contribute, learn and grow my skills in web development.
I am a adaptable, ambitious, self-motivated, confident and down to earth person. I have a great passion to learn. I love to be creative , and thats what led me to start my coding career at epicodus.</p>
      </div>
    </div>
  )
}

export default AboutMe