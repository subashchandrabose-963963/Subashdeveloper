import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Params from "./Params";
import Trip from "./Trip";

function Routerpage() {
  return (
   <BrowserRouter>
   <Trip/>
   <Routes>
       {/* <Route path="/" element={ <Trip/>}></Route> */}
       <Route path="/userdetails/:Startingplace/:Destination/:ChooseVehicycle/:Entiretotal/:Distance/:Brandmileage/:petrolprice/:Member/:Fuellitre/:Fuelcost/:one_person_cost/:Total_person_cost" element={<Params/>}></Route> 
   </Routes>
   </BrowserRouter>
  );
}

export default Routerpage