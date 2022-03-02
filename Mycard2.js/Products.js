import React from 'react'
import { Link } from 'react-router-dom'
function Products(props) {
  return (  
    <div className="col-sm-6 col-lg-3 mt-5">
      <div className='card text-center'>
        <div className="card-body">
            <img src={props.details.img} className='img-fluid w-100' style={{height:'180px'}}></img>
            {
          props.details.isStock? <h4 className='card-title'>{props.details.productname}</h4>:<del><h4 className='card-title'>{props.details.productname}</h4></del>
          }  
           <p className='card-text'>{props.details.price}</p>
            <button type='button' disabled={props.availablehandler(props.details) || !props.details.isStock} onClick={()=>props.addhandeler(props.details)} className='btn btn-outline-primary mt-2 btn-md'> AddCard</button>
         </div>
      </div>
    </div>
 )
}

export default Products