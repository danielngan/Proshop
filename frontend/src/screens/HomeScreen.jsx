import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
// import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  Product  from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
// import  axios  from 'axios';
// import products from '../products';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    // const [products, setProducts] = useState([]);

    // const { id: ProductId} = useParams();

    // // const fetchProduct = () => {

    // // }

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products');
    //         setProducts(data);
    //     }
    //     fetchProducts();
    // }, [])

    // return (
    //     <Row>
    //         {products.map((prod) =>
    //         <Col sm={12} md={6} lg={4} xl={3}>
    //             <Product id={prod._id} product={prod} />
                    
    //         </Col>
          
    //         )}
    //     </Row>
    // )

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error}</Message>) : (<>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key = {product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            </>)}
            
        </>
    )


    
}

export default HomeScreen;
