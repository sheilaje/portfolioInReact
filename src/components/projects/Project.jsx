import React from 'react'
import PropTypes from 'prop-types'
// import profilepic from '../assets/images/Sheila.jpeg'
// import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import {Card, CardTitle} from 'react-materialize'
import Projects from "./Projects"

const cardTitleStyles = {
  height: '10px',
  width: '10px'
}

const divStyles= {
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr 1fr',
  // width: '405px',
  // padding:'40px',
  fontSize: '30px',
  border: '1px solid #999',
  padding: '0.5rem'
}

function Project(props){
  return(
    <div>
      <Card horizontal header={<CardTitle image={props.image}></CardTitle>} 
        actions={[<a href={props.link}>Github Link</a>]}>
        <p>{props.description}</p>
        <p>{props.technologiesUsed}</p>
      </Card>
    </div>

  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Project