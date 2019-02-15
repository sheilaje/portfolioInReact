import React from 'react'
import profilepic from '../assets/images/Sheila.jpeg'

const picStyles = {
  borderRadius: '50%',
  display: 'block',
  border: '2px solid #48BBEC',
  width: '300px',
  height: '300px',
   marginRight: 'auto',
   marginLeft: 'auto',
   marginTop: '80px',
  
}

const pStyles = {
 fontFamily: 'Georgia',
  lineHeight: '1.4',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontSize: '27px',
  marginRight: '500px',
   marginLeft: '500px',
   width: '500px',
    textAlign: 'center'
}

const h2Styles = {
  fontSize: '35',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'center'
}

function AboutMe()
{   
  return(
    <div>
      <img  style = {picStyles} src={profilepic} alt="Profile image"/>
      <h2 style= {h2Styles}>About Me</h2>
      <p style= {pStyles}> A Full Stack Web developer with C#. I am a adaptable, ambitious, self-motivated, confident and down to earth person. I have a great passion to learn. I love to be creative , and thats what led me to start my coding career at epicodus.</p>
    </div>
  );
}

export default AboutMe