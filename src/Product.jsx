import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './ProductDetails';

function Product(props) {
  return (
    <Card>
    <Card.Img variant="top" src={props.ProductData.image} />
    <Card.Body>
      <Card.Title>{props.ProductData.title}</Card.Title>
      <Card.Text>
      {props.ProductData.description}
      {props.ProductData.price}
      </Card.Text>
      <Button variant="primary">Add to Cart</Button>
      <Link to ={`./ProductDetails/${props.ProductData.id}`}>
      
      <p>View more</p>
      </Link>
      
    </Card.Body>
  </Card>
  )
}

export default Product