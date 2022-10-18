import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'

export const NavBar = ({searching,handleSearch}) => {
  return (
            
              <div id="nav-bar">
              <Search searching={searching}  handleSearch={handleSearch} />
             <ul class="navs">
             <li><Link class="nav-link" to="/">Home</Link></li>
              {/* <li><a class="nav-link" href="#about">About Us</a></li>
              <li><a class="nav-link" href="#Products">Products</a></li> */}
             
             
             
             </ul>
            </div>
         
       
    
 
  )
}
