## Cart Cave 

<img width="70%" alt="Cart Cave" src="https://github.com/jscoding10/cart-cave/assets/147340427/487779a0-14ed-4991-82c5-846ef3875bd3">

**Deployed version:** https://cart-cave.onrender.com/
<br>
<br>
Cart Cave is an Ecommerce store with various products. Users have the ability to add an item to the cart and checkout using Stripe for payment processing.

## Instructions 
**How to use Cart Cave**  
1. Visit the <a href="https://cart-cave.onrender.com/">deployed version of Cart Cave</a>.
2. Select an item or items you would like to add to the cart by clicking the "Add to Cart" button beneath the item. 
3. Click the "Cart" button in the top corner. Once the cart is open, scroll down to the bottom and select the "Purchase Items!" button to commence the Stripe checkout process.
4. Fill out the required fields for the Stripe checkout process with the information provided below.

**Stripe Checkout Process**  
Use 4242 4242 4242 4242 as the credit card number.  
Use a valid future date for expiration date.  
Use any three-digit CVC.  
Use any value to fill out the remaining fields.  
<br>
**To set up a local copy, follow these simple steps:** 
``` 
1. cd cart-cave  
2. npm install  
3. npm start
4. cd shopping-cart-store 
5. npm install
6. npm start
```
Steps one through three set up the server. The server runs on localhost:4000.  
<br>
Steps four through six set up the client. The client runs on localhost:3000.    
<br>
For the local copy to work, you will need a Stripe Private Key in an .env file. Further, you will need to set the products up on your Stripe account for payment.
<br>
## Technology Used
### Client
<img align="left" alt="HTML" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img align="left" alt="CSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img align="left" alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
<br>
<br>
The user can add various products to the cart and checkout. The checkout button creates a POST request to the Express server and if the Express server returns a Stripe URL, it redirects the user to the Stripe URL where they can checkout. 

### Server  
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />  
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />   
<br>
<br>
The Express server listens for a POST request with the ‘/checkout’ path. It then properly formats the data for Stripe. Next, a Stripe call creates the checkout session and the URL for checkout is send to the client.

## Lessons Learned
During this project, I learned how to integrate Stripe into an Ecommerce platform. Further, I learned how to write Context and Providers for an Ecommerce cart including adding an item to the cart, removing an item from the cart, and deleting all items from the cart. Moreover, I learned how to best display various products on an Ecommerce platform and how to render the product properties into a Bootstrap card from an array of products. 

## Improvements
One improvement would be to have a database containing the array of products and make a fetch request to retrieve the products rather than coding them in a file within the app. Further, I could utilize Tailwind CSS to make the user interface of the website more aesthetic for customers. Finally, I could implement an authentication system where users could use Cart Cave as a guest or a registered user. 
