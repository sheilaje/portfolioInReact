import React from 'react'
import linkedin from '../assets/images/Linkedin.png'
import github from '../assets/images/gitthub.png'

const imageStyles= {
  width: '100px',
  height: '100px',
  marginRight: '40px'
}

function ContactMe()
{   
  return(
    <div style={{display: 'block'}}>
      <div >
        <h2>Contact</h2>
        <p><a href="sheila.je@gmail.com" style={{fontSize: '40px'}}>sheila.je@gmail.com</a><br/></p>
        <div>
          <a href='https://www.linkedin.com/in/sheila-stephen/' target='blank' 
            ><img src={linkedin} style= {imageStyles}/></a>
          <a href='https://github.com/sheilaje' target='blank' style= {imageStyles}><img src={github}/></a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe