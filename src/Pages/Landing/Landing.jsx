import React from 'react'
import Layourt from '../../Components/Layout/Layourt'
// import { Carousel } from 'react-responsive-carousel'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'
import CarouselEffect from '../../Components/Carousel/Carousel'


function Landing() {
  return (
    <Layourt>
      {/* <Carousel /> */}
      <CarouselEffect />
      <Catagory />
      <Product />
    </Layourt>
  )
}

export default Landing
