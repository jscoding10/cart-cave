## Cart Cave  
Cart Cave is an Ecommerce store with various products. Users have the ability to add an item to the cart and checkout using Stripe for payment processing.

## Instructions
To set up a local copy, follow these simple steps:  
```
1. git clon https://github.com/jscoding10/cart-cave.git  
2. cd cart-cave  
3. npm install  
4. npm start
5. cd shopping-cart-store
6. npm install
7. npm start
```
Steps two through four set up the server. The server runs on localhost:4000.  

Steps five through seven set up the client. The client runs on localhost:3000.    

**Stripe Checkout Process**  
Use 4242 4242 4242 4242 as the credit card number.  
Use a valid future date for expiration date.  
Use any three-digit CVC.  
Use any value to fill out the remaining fields.  

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
During this project, I learned how to integrate Stripe into an Ecommerce platform. Further, I learned how to write Context and Providers for an Ecommerce cart feature in React including adding an item to the cart, removing an item from the cart, and deleting all items from the cart. Moreover, I learned how to best display various products on an Ecommerce platform and how to render the product properties into a Bootstrap card from an array of products in React. 

## Improvements
One improvement would be to have a database containing the array of products and make a fetch request to retrieve the products rather than coding them in a file within the app. Further, on the production version of this application, I would place the Stripe API key in an environment variable. 






