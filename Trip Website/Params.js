import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {
  const myparams = useParams();
  console.log(myparams)
  return (
    <div className='container mt-5 w-50'>
      <div className='text-start bg-info text-white p-3 rounded '>
        <li className='list-group-item'>
          <h5>StartingPlace: <span style={{ color: " darkgreen" }}>{myparams.Startingplace}</span> </h5>
        </li>
        <li className='list-group-item'>
          <h5>Destination: <span style={{ color: "darkgreen" }}>{myparams.Destination}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>ChooseVehicycle: <span style={{ color: "darkgreen" }}> {myparams.ChooseVehicycle}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>TotalDistance:<span style={{ color: "darkgreen" }}>  {myparams.Distance}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>Mileage:<span style={{ color: "darkgreen" }}>  {myparams.Brandmileage}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>Fuel_Price: <span style={{ color: "darkgreen" }}> {myparams.petrolprice}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>Fuel_litre:<span style={{ color: "darkgreen" }}>  {myparams.Fuellitre}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>Fuel_cost: <span style={{ color: "darkgreen" }}> {myparams.Fuelcost}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>How_many_members: <span style={{ color: "darkgreen" }}> {myparams.Member}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>One_person_cost: <span style={{ color: "darkgreen" }}> {myparams.one_person_cost}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>Total_person_cost: <span style={{ color: "darkgreen" }}> {myparams.Total_person_cost}</span></h5>
        </li>
        <li className='list-group-item'>
          <h5>EntireTotal:<span style={{ color: "darkgreen" }}>  {myparams.Entiretotal}</span></h5>
        </li>
      </div>


    </div>
  )
}

export default Params