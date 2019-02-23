import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const divStyles= {
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr 1fr',
  // width: '405px',
  // padding:'40px',
  fontSize: '30px',
  border: '1px solid #999',
  padding: '0.5rem'
}

function Project({name, description, technologiesUsed, link, image}){
  return(
    <div style={divStyles}>
      <table>
        <tr>
          <td><h3>{name}:</h3></td>
          <td><p>{description}</p></td>
          <td><p>{technologiesUsed} </p></td>
      
          <td><Button style={{backgroundColor:'green'}}target="blank" href={link}>Open</Button></td>
        </tr>
      </table>
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