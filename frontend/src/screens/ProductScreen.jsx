import { useState, useEffect } from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import { Form, Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
 import { useDispatch } from 'react-redux';
 import Loader from '../components/Loader';
 import { useGetProductsQuery } from '../slices/productsApiSlice';
 import Rating from '../components/Rating';
 //import { useGetProductsQuery } from '../slices/apiSlice';
 import Message from '../components/Message';
 import {addToCart} from '../slices/cartSlice'
//import axios from 'axios';

import products from '../products';

const ProductScreen = () => {

  const dispatch = useDispatch;
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  
  // /product/1234
  // /product/:id 
  
  
  const { id: productId } = useParams(); // ->  { id: '1234' }
  //const { data: product, isLoading, error} = useGetProductDetailsQuery(productId);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductsQuery(productId);

  const addToCartHandler = () => {
      dispatch(addToCart({...product, qty}));
      navigate('/cart');
    }
  

  // useEffect(() => {
  //   const getProd = async () => {
  //     const response = await axios.get(`/api/products/${productId}`);
  //     console.log("response", response);
  //     setProd(response.data);
  //     console.log(prod);
  //   }
  //   getProd();
  // }, [])

  return (
    <>
     <Link className='btn btn-light my-3' to='/'>
        Go Back 
     </Link>

     { isLoading ? (
      <h2>Loading...</h2>
     ) : error ? (
      <Message variant='danger'>{error?.data?.message || error.error }</Message>
     ) : (
      <Row>
      <Col md={5}>
        <Image src={product.image} fluid></Image>
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              Price: {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col><Form.Control as = 'select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>{[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}</Form.Control></Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Button className = 'btn-block' 
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
     ) }
      
    </>
  )
}

export default ProductScreen;
