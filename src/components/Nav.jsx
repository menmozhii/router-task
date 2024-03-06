import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return<>
  <div className='navbar'>
  <ul className='list'>
   <li><Link to="/all">ALL</Link></li>
   <li><Link to ="/fsd">FULL STACK DEVELOPMENT</Link></li> 
    <li><Link to ="/data science">DATA SCIENCE</Link></li>
    <li><Link to ="/cyber security">CYBER SECURITY</Link></li>
    <li><Link to ="/career">CAREER</Link></li>
   
  </ul>
  <hr/>
  </div>
  
  </>
}

export default Nav