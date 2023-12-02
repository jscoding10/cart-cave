import { Card, Button, Form, Row, Col, CardImg } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';


function ProductCard(props) { 
    const product = props.product; // Product being sold
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id); // Check if have product in the cart
    console.log(cart.items);
    return (
        <Card style={{ height: '100%' }}>
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card.Img variant="top" src={product.img_url} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {/* If quantity in cart is greater than 0 then show add one to cart button and remove one from cart button; functionality to add or remove products from cart is provided from cart context functions*/}
                {/* Else show add to cart button; functionality to add product to cart provided by cart context functions */}
                { productQuantity > 0 ?
                    <>
                        <Form as={Row} >
                            <Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
                            <Col sm='6'>
                                <Button sm='6' onClick={() => cart.addOneToCart(product.id)} className='mx-2' style={{ width: '30%' }}>+ </Button>
                                <Button sm='6' onClick={() => cart.removeOneFromCart(product.id)} className='mx-2' style={{ width: '30%' }}>-</Button>
                            </Col>
                        </Form>
                            <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove From Cart</Button>
                    </>
                    : 
                    <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;