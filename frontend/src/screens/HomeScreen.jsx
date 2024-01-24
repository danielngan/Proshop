import {Row, Col} from 'react-bootstrap';
//import Product from '../Product';
import products from '../products';
// import Rating from '../components/Rating';
// import {useEffect, useState, useParams} from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


const HomeScreen = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products');
    //         setProducts(data);
    //     };
    //     fetchProducts();
    // }, [])

    return (
        <>
            <h1>Latest Productions</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <h3>{product.name}</h3>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen

