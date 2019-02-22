import React from 'react'
import Typing from 'react-typing-animation'
import linkedin from '../assets/images/Linkedin.png'
import github from '../assets/images/gitthub.png'

function TypingAnimation(){
  const outerblock = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexFlow: 'column',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  }
  const textBlock = {
    paddingTop: '305px',
    width: '1000px',
    height: '150px',
    margin: '10px',
    lineHeight: '150px',
    fontWeight: 'bold',
    fontSize: '3em',
    justifyContent: 'center',
    textAlign: 'center'
  }
  const typingAnimationStyles = {
    display: 'inline-block',
    color: 'orange',
    marginRight: '10px',
    marginLeft: '10px',
  }

  const imageStyles= {
    width: '100px',
    height: '100px',
    marginRight: '40px',
    justifyContent: 'center',
    textAlign: 'center',
  }

  return(
    <div style={outerblock}>
      <div >
        <div style={textBlock}>
      Hi, I'm Sheila Stephen. I'm a
          <div style={typingAnimationStyles}>
            <Typing loop = {true}>
              <span> C#</span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> .NET</span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> Node.js</span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> Angular</span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> React </span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> HTML</span>
              <Typing.Backspace count={20} delay={1000}/>
              <span> CSS</span>
              <Typing.Backspace count={20} delay={1000}/>
            </Typing>
          </div>
      Developer, with a great passion in coding.
        </div>
      </div>
      


      <div style ={{paddingTop: '100px', textAlign:'center'}}>
        <div >
          <p><a href="sheila.je@gmail.com" style={{fontSize: '40px'}}>sheila.je@gmail.com</a><br/></p>
          <div>
            <a href='https://www.linkedin.com/in/sheila-stephen/' target='blank' 
            ><img src={linkedin} style= {imageStyles}/></a>
            <a href='https://github.com/sheilaje' target='blank' style= {imageStyles}><img src={github}/></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TypingAnimation