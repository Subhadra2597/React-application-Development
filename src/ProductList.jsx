import React from 'react'
import { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Product from './Product';
//import './ProductList.css'


function ProductList() {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setProducts(res.data)
        })
    })
  return (
    <>
    <Container>

 
    <h1>Products</h1>
    <div className='product_list'>
        <Row>
            {
                products.map((product,index)=>{
                    return(
                        <>

                <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
                <Product key={index} ProductData={product}/>
                </Col>
                        </>
                    )

                })
            }
        </Row>
    </div>
    </Container>
    </>
  )
}

export default ProductList