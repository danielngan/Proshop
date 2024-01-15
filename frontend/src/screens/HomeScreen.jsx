import {useEffect, useState} from 'react';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Product from '../components/Product';
import Rating from '../components/Rating';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(() => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen