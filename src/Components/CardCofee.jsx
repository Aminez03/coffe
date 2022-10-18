import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardCofee = ({coffee}) => {
  return (
    <div >

   <Card style={{ width: '18rem' }} className='card' >
      <Card.Img  className='imagecard' variant="top" src={coffee.image} />
      <Card.Body>
        <Card.Title>{coffee.title}</Card.Title>
        <Link to={`product/${coffee.id}`}>
       <button>info</button>
       </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardCofee