import React from 'react'
import CardCofee from './CardCofee'


const ListCofee = ({list}) => {
  return (
    <div id="Products">
       <h2 >Coffee List</h2>
       <div className='list'>
      {list&&(React.Children.toArray(list.map(el=> <CardCofee coffee={el}/>)))}</div>
       
    </div>
  )
}

export default ListCofee