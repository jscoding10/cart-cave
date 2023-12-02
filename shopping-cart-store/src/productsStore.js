// Import images for product array
import coffee from './product-images/coffee.jpg'
import sunglasses from './product-images/sunglasses.jpg'
import camera from './product-images/camera.jpg'
import book from './product-images/book.jpg'
import shoes from './product-images/shoes.jpg'
import shirt from './product-images/shirt.jpg'

// Product array to display on Cart Cave
const productsArray = [
    {
        id: 'price_1OGttSEM1c8wDhsZFc2ivx5i',
        title: 'Coffee',
        price: 4.99,
        img_url: coffee
    },
    {
        id: 'price_1OGtuOEM1c8wDhsZG54AXs3D',
        title: 'Sunglasses',
        price: 9.99,
        img_url: sunglasses
    },
    {
        id: 'price_1OGtvAEM1c8wDhsZQSynfAUZ',
        title: 'Camera',
        price: 999.99,
        img_url: camera
    },
    {
        id: 'price_1OGtvTEM1c8wDhsZJKE5h9mI',
        title: 'Book',
        price: 19.99,
        img_url: book
    }, 
    {
        id: 'price_1OGtvjEM1c8wDhsZuJPGXpSu',
        title: 'Shoes',
        price: 64.99,
        img_url: shoes

    },
    {
        id: 'price_1OGtvyEM1c8wDhsZsyn01WxN',
        title: 'Shirt',
        price: 19.99,
        img_url: shirt

    }

]
// Helper function to take product id and loop through the array and see if id matches the id passed into the parameters; function returns product data if id matches the id passed into the parameters or undefined if it is undefined
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log('Product data does not exist for ID: ' + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
