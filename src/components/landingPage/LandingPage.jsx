import React from 'react'
import Typing from 'react-typing-animation'

function TypingAnimation(){
  const outerblock = {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const textBlock = {
    padding: '5px',
    width: '1000px',
    height: '150px',
    margin: '10px',
    lineHeight: '150px',
    fontWeight: 'bold',
    fontSize: '3em',
    textAlign: 'center'
  }
  const typingAnimationStyles = {
    display: 'inline-block',
    color: 'orange',
    marginRight: '10px',
    marginLeft: '10px',
  }

  return(
    <div style={outerblock}>
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

  )
}

export default TypingAnimation