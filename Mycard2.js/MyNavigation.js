import React from 'react'
import {Link} from 'react-router-dom'
 
function MyNavigation() {
  return (
      
     <nav className='navbar navbar-expand-md navbar-dark bg-dark '>
         <div className='container-fluid'>
         <a href='#' className='navbar-brand'>My Shopping</a>
         <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#collapisblenavbar">
             <span className='navbar-toggler-icon'></span>
         </button>
         <div className='collapse navbar-collapse' id="collapisblenavbar">
         <ul className='navbar-nav'>
             <li className='nav-item'>
                <Link className="nav-link" to="/" >Home</Link> 
             </li>
             <li className='nav-item'>
                <Link className="nav-link" to="/Shopitem">Products</Link>  
             </li>
             <li className='nav-item'>
                <Link className="nav-link" to="/LoginFrom" >Contacts</Link>
             </li> 
         </ul> 
         </div>
     </div>
    </nav>
   );
}

export default MyNavigation