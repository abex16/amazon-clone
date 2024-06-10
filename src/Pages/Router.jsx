import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing/Landing'
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute'
import Payment from './Payment/Payment'
import Orders from './Orders/Orders'
 import Cart from './Cart/Cart'
import Results from './Results/Results'
import ProductDetail from './ProductDetail/ProductDetail'
import Auth from './Auth/Auth'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PNr06RtN49bcU4d2T5u7YTRYUekiLLzSaMcemzrO5d5pgXE9BkmI3qp7S6c8FsH58Cr82CV1aGi45ZQhKxAeFqN00m1ZXeVr1"
);
// function Routing() {
//   return (
//    <Router>
//         <Routes>
//             <Route path='/' element={<Landing/>}/>
//             <Route path='/auth' element= {<Auth/>}/>
//             <Route path='/payments' element= {<Payment/>} />
//             <Route path='/orders' element = {<Orders/>} />
//             <Route path='/category/:categoryName' element={<Results/>} />
//             <Route path='/products/:productId' element={<ProductDetail/>} />
//             <Route path='/cart' element = {<Cart/>} />
//         </Routes>

//    </Router>
//   )
// }
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/orders" element={
        <ProtectedRoute msg={"You must log in to see your orders"} redirect={"/orders"}>
          <Orders />    
        </ProtectedRoute>
        
        } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing
