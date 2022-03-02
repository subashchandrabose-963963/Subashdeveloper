import React from 'react'

function ListProduct(props) {
    return (
          <li className=' list-group-item d-flex align-items-center justify-content-between'>
                     <div>
                     <span>{props.listdetails.productname}</span>
                        <span className="ms-4">Price : <span className='text-info'>{props.listdetails.price}</span></span>
                     </div>
                    <div className='d-flex align-items-center'>
                        <h5 className='text-bolder'>{props.listdetails.Count}</h5>
                        <button className='btn btn-primary btn-sm rounded-circle ms-4 me-2' onClick={()=>props.incrementhandler(props.listdetails)} type='button'>+</button>
                        <button className='btn btn-primary btn-sm rounded-circle mx-2' onClick={()=>props.decrementhandler(props.listdetails)} type='button'>-</button>
                        <button type='button' onClick={() => props.DeleteFunc(props.listdetails)} className='btn btn-danger btn-sm' >Close</button>
                    </div>
              </li>
               )
}

export default ListProduct