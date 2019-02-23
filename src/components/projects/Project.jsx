import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
// import foodSavor from '../assets/images/foodSavor.jpeg'
// import messageBoard from '../assets/images/messageBoard.jpeg'
// import {Card, Col, CardTitle} from 'react-materialize'

function Project({name, description, technologiesUsed, link, image}){
  return(
    <div>
      <h3>{name}</h3>
      <p><strong>Description :</strong>{description}</p>
      <p><strong>Technologies Used :</strong> {technologiesUsed} </p>
      
      <Button target="blank" href={link}>Open</Button>
    </div>


    // <div class="col s12 m7">
    //   <div class="card horizontal">
    //     <div class="card-image">
    //       <img src={foodSavor} />
    //     </div>
    //     <div class="card-stacked">
    //       <div class="card-content">
    //         <h3>{name}</h3>
    //         <p><strong>Description :</strong>{description}</p>
    //         <p><strong>Technologies Used :</strong> {technologiesUsed} </p>
    //       </div>
    //       <div class="card-action">
    //         <a href={link}>open</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <Col m={7} s={12}>
    //   <Card horizontal header={<CardTitle image={image}></CardTitle>} actions={[<a href={link}>Open</a>]}>
    //     <div class="card-content"> 
    //       <h3>{name}</h3>
    //       <p><strong>Description :</strong>{description}</p>
    //       <p><strong>Technologies Used :</strong> {technologiesUsed} </p>
    //     </div>
    //   </Card>
    // </Col>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Project