import { useState ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
// import * as React from 'react';
// import { Modal } from "@mui/material";
import Modal1 from "./Modal1";
import { addCartQty, addToCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";


  

export default function ProductPresentation()
{
 
    const products=useSelector((state)=>state.iceCream)

    const dispatch=useDispatch()
    const addToCarts=(item)=>{
      const flag=products?.find((p)=>p.id===item.id);
             if(!flag){
                 dispatch(addToCart(item));
             } 
           dispatch(addCartQty(item))  
    }
   
    return(

        <>
         
        {products ? products.map((item, index) => (
       <div id="container">
         <div class="card border-success mb-3" >
            <div class="card-header bg-transparent border-success"id="cardName"><b>{item.name}</b></div>
              <div class="card-body text-success">
                <img id="img" class="card-img-top" src={item.image} alt=""/>
                <small style={{ fontFamily: 'Arial', fontSize: '1em' ,color:"white"}}> price:{item.price} &#8362;</small>
                <Modal1 name={item.name} price={item.price} description={item.description} item={item} id={item.id}></Modal1>
              </div>
   
</div>
</div>
        )) : <div>Products is null</div>}
        {/* <button onClick={()=>navigate("/ShowCart")}></button> */}
        </>
    )
      
}