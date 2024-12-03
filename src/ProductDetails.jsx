import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

function ProductDetails() {

    let { id } = useParams()
    const[productInfo,setproductInfo]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/"+id)
        .then(res=>{
            setproductInfo(res.data)
        })
    })
  return (
    <>
    <img src={productInfo.image}/>
    <p>{productInfo.title}</p>
    <p>{productInfo.description}</p>
    <p>{productInfo.price}</p>
    </>
    
  )
}

export default ProductDetails