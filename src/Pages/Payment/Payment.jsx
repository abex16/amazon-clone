import React, { useContext, useState} from "react";
import classes from "./Payment.module.css";
import Layourt from "../../Components/Layout/Layourt";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import {axiosInstance} from "../../Api/axious"
import {ClipLoader} from 'react-spinners'
import { db } from "../../Utility/firebase"; 
import { useNavigate } from "react-router-dom";
//import { Type } from "../../Utility/action.type";
import { Type } from "../../Utility/action.type";
function Payment() {
  
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);
  
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

const [cardError,setCardError]=useState(null)
const [processing,setProcessing]=useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate()
  
  
  const handleChange=(e)=>{
    console.log(e);
    e?.error?.message? setCardError(e?.error?.message):setCardError("");
  }


  const handlePayment=async(e)=>{
    e.preventDefault() 
    try {
      setProcessing(true);
      //1. backend || function contact to the client secret
      const response = await axiosInstance({
method:"POST",
url:`/payment/create?total=${total*100}`,
    })
      console.log(response.data)
      const clientSecret =response.data?.clientSecret;
//2. client slid (react side confirmation)
const {paymentIntent}= await stripe.confirmCardPayment(
  clientSecret,
  {
  payment_method:{
    card:elements.getElement(CardElement)
  },
}
)
console.log(paymentIntent)
//3. after the confirmation  ordeeeeer firebase, save clearbasket
await db
.collection("users")
.doc(user.uid)
.collection("orders").doc(paymentIntent.id).set({
  basket:basket,
  amount:paymentIntent.amount,
  created:paymentIntent.created
})

// emptying basket
console.log("abinet")
dispatch({type: Type.EMPTY_BASKET})
console.log("abeni")
//setProcessing(false)
navigate("/orders", {state:{msg:"you have placed new Order"}})
setProcessing(false)
    } catch (error) {
      console.log(error)
      //setProcessing(false)
      
    }
    //setProcessing(false)
  };
  return (
    <Layourt>
      {/* header */}
      <div className={classes.payment_header}>Checkout({totalItem}) items</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3> Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>1234 MN</div>
            <div>Minniapolis</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery.</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && <small style={{color:"red"}}>{cardError}</small>}
                <CardElement onChange={handleChange}/>
                <div className={classes.payment_price}> 
                  <div>
                    <span style={{display:"flex", gap:"10px"}}>Total Order | <CurrencyFormat amount={total}/></span>
                  </div>
                 
                  <button type="submit" >
                    
                  {
                  processing ?(<div className={classes.loading}>
                    <ClipLoader color="gray" size={12}/>
                    <p>Please Wait....</p>
                  </div>)
                  :("pay Now")}

                    </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </Layourt>
  );
}

export default Payment;