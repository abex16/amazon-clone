import React from 'react'
import {catagoryInfos} from './Catagoryfullingfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'
function Catagory() {
  return (
    
    <section className={classes.catagory__container}>
        {
            catagoryInfos.map((infos)=>(
              <CatagoryCard data = {infos}/>
            ))
        }
    </section>
  )
}

export default Catagory
