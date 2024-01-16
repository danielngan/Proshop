import {useEffect, useState} from 'react';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Product from '../components/Product';
import Rating from '../components/Rating';
import axios from 'axios';

const HomeScreen = () => {
    const {data: products, isLoading, error} = useGetProductsQuery();

    return (
        <>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error?.data.message || error.error}</div>
        ) : (
          <>
            <h1>Latest Products</h1>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </>
    )
}

export default HomeScreen

