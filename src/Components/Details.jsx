import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
  const {id}=useParams();
  
    
    const coffee=list.find(el=>el.id==id);
    useEffect(()=>{

    },[id])
    
  return (
   
       <Card className='carddetails' style={{ width: '60rem' }}>
      <Card.Img className='cardImage' src={coffee.image} />
      <Card.Body>
        <Card.Title className='cardTitle' >{coffee.title}</Card.Title>
        <Card.Text className='cardDes'>
        {coffee.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    
 
  )
}

export default Details