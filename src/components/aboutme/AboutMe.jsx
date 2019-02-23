
import React from 'react'
import profilepic from '../assets/images/Sheila.jpeg'
import '../assets/styles/styles.css'

const outerDivStyles ={
  // position : 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: '20px'
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
        <p className = 'pStyles'> I am a Full Stack Web Developer with C#, .NET, Node JS, Angular and React JS experience. I've worked as a lecturer in engineering colleges, and have a Masters in Engineering and Computer Science .I am seeking a software developer role where I can contribute, learn and grow my skills in web development.I am a adaptable, ambitious, self-motivated, confident and down to earth person. I have a great passion to learn. I love to be creative , and thats what led me to start my coding career at epicodus. My experience in Epicodus has taught me how to approach complex problems, write clean efficient code, learn new technology efficiently for the rapid evolution of the technology industry, and make contributions both independently and as a collaborator. 
      Embracing a growth mindset has allowed me to expand my knowledge and problem solving skills.</p>
      </div>
      <p className={'pStyles'} >Previously, As a lecturer I have handled students in class. I have been lecturing for basic Computer Science, that involves binary numbers, ASCII values, conversions. I have also taken classes in cryptography, which includes lots of algorithms for hiding messages and decrypting those messages back in the receiver side.I have also taken some Visual C++, Data Structures Lab. In epicodus we have been using GITHUB, API's to pull data which we have been trying using POSTMAN. So I believe these things that I have learned from Epicodus and my previous experience will help me to be successful in my carreer as a software professional.</p>
    </div>
  )
}

export default AboutMe