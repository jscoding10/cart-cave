// Store page
import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
    return (
        <>
             <h1 align='center' className='p-3'>Products</h1>
             <Row xs={1} md={3} className='g-4'>
                {/* Map over the array of products */}
                {productsArray.map((product, index) => (
                    <Col align='center' key={index}>
                        <ProductCard product={product} />
                    </Col>
                ))}
             </Row>
        </>
        
    )
}

export default Store;