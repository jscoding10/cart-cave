import { createContext, useState } from 'react';
import { productsArray, getProductData } from './productsStore';

// Context
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}

});

// Provider for Context
export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
    // Check if product.id is equal to the id passed into function
    // If .find method returns an object of data then it will return .quantity property
    // If .quantity property is undefined function will return 0
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if ( quantity === undefined) {
            return 0;
        }

        return quantity; 
    }

    // Add product to cart
    function addOneToCart(id) {
        // Ask for quantity of product and check if there are 0 elements or element exists
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // If product is not in cart
            // If product is not in cart (quantity is 0), use Setter function to set quantity of product to 1 and add to the array
            setCartProducts( //Setter function 
                [
                    ...cartProducts, 
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // If product is in cart
            setCartProducts(
                // Map over array of cart products
                // If product id equals the product id passed into the function, show the cart product and add one to the quantity
                // Else add the product to array as is
                cartProducts.map(
                    product =>
                    product.id === id 
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                        
                )
            )
        }
    }

    // Remove one product from cart
    // If only one product in cart then remove completely using function below
    // Else map over
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);
        // If only one product in cart, then remove the product completely using deleteFromCart
        if (quantity === 1) {
            deleteFromCart(id);
        // If product id equals the product id passed into the function, show the cart product and subtract one from the quantity
        // Else add the product to array as is
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                               
                    ? { ...product, quantity: product.quantity - 1 }
                    : product                                        
                )
            )
        }
    }

    // Delete products from cart using filter
    // If product id is not equal to id passed in then will be returned in array
    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id; 
            }) 
        )
    }
    
    // Total cost of all products
    function getTotalCost() {
        let totalCost = 0;
        // Map over the cart products and retrieve the id
        // Use the price and the quantity of each product in the cart to calculate the total cost 
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        
            });
        
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
