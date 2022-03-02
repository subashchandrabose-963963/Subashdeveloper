import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Errormessage from './Errormessage';
import ListProduct from './ListProduct';
import LoginFrom from './LoginFrom';
import MyHome from './MyHome';
import MyNavigation from './MyNavigation';
import Shopitem from './Shopitem';

   function Routerpage(){
  return (
    
    <BrowserRouter>
      <MyNavigation />
      <Routes>
          <Route path='/' element={<MyHome />}></Route>
          <Route path='/Shopitem' element={<Shopitem />}></Route>
          <Route path='/Login' element={<Shopitem />}></Route>
          <Route path='/LoginFrom' element={<LoginFrom />}></Route>
          <Route path='/userdata' element={<LoginFrom />}></Route>
           {/* <Route path='/lists/:productname/:price' element={<ListProduct/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routerpage