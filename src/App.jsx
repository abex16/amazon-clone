//import React, { useState } from 'react'
//import Routing from './Pages/Router'
import React,{useContext, useEffect} from "react";
import Routing from "./Pages/Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import {Type} from "./Utility/action.type";
import { auth } from "./Utility/firebase";

// import CarouselEffect from './Components/Carousel/Carousel'
// import Header from './Components/Header/Header'
// import Catagory from './Components/Catagory/Catagory'
// import Product from './Components/Product/Product'

//  import { Carousel } from 'react-responsive-carousel'

function App() {const [{ user }, dispatch] = useContext(DataContext);

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log(authUser);
      dispatch({
        type: Type.SET_USER,
        user: authUser,
      });
    } else {
      dispatch({
        type: Type.SET_USER,
        user: null,
      });
    }
  });
}, []);

return <Routing/>;
}

export default App;