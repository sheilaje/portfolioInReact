import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function Project({name, description, technologiesUsed, link}){
  return(
    <div>
      <h3>{name}</h3>
      <p><strong>Description :</strong>{description}</p>
      <p><strong>Technologies Used :</strong> {technologiesUsed} </p>
      
      <Button target="blank" href={link}>Open</Button>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Project