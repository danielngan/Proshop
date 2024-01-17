import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Product from '../components/Product';
import Rating from '../components/Rating';


const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, [])
}

export default HomeScreen

