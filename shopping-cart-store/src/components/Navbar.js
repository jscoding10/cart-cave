// Import from React Bootstrap
import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext);
    // Modal not showing initially
    const [ show, setShow ] = useState(false); 
    // Close event
    const handleClose = () => setShow(false);
    // Show event
    const handleShow = () => setShow(true);

    // Checkout function with fetch request to backend
    // Function is called after click Purchase Items button 
    // Post request to checkout route of backend; content type is application/json; pass items from cart to backend
    // Response comes back from backend as .json and if the URL exists, forward user to Stripe
    const checkout = async () => {
        await fetch('http://cart-cave.onrender.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); //Forward user to Stripe
            }
        });
    }

    // Loop through cart items and find total amount of product quantities 
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand='sm' bg='dark' data-bs-theme='dark' style={{ paddingRight: '1.0rem', paddingLeft: '1.0rem' }}> 
                <Navbar.Brand href='/'>Cart Cave</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    {/* Display total number of products on button when add to cart */}
                    <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Check if products in cart amount is greater than 0 and if so display the items in cart */}
                    {/* Else display cart is empty */}
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {/* Map over the items in cart and display them in modal */}
                            {cart.items.map( (currentProduct, index) => (
                                // Use component to make cart products for everything in cart
                                <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost()?.toFixed(2)}</h1>
                            {/* When click purchase items checkout on Stripe using checkout function above */}
                            <Button variant='success' onClick={checkout}>
                                Purchase Items!
                            </Button>
                        </>    
                    :
                        <h1>Cart is empty</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

}

export default NavbarComponent; 