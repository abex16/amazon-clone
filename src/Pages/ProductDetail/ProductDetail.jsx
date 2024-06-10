import React, { useEffect, useState } from "react";

import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Api";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import Layourt from "../../Components/Layout/Layourt";

function ProductDetail() {

  const [product, setproduct] = useState({});
  const[isLoading, setisLoading] = useState(false)
  const { productId } = useParams();
  
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setisLoading(false)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      })
  }, []);

  return (
    <Layourt>
      {isLoading? (<Loader/>):( <ProductCard 
      
      product={product} 
      flex ={true}
      renderDesc ={true}
      renderAdd={true}
      />)}
      
    </Layourt>
  );
}

export default ProductDetail;