// Require Express
const express = require('express');
// Require CORS - any IP address to access express server
var cors = require('cors'); 
// Require .env
require('dotenv').config()
// Require Stripe - Initialize Stripe client specifically for account with environmental variable
const stripe = require('stripe')(process.env.STRIPE_API) 
// Require path
const path = require('path');
// Create express server
const app = express();
// Middleware
app.use(cors());
// Stripe Documentation
app.use(express.static('public'));
app.use(express.json());

// Post request to Express server with '/checkout' path
app.post('/checkout', async (req, res) => {
    // Properly format data for Stripe checkout
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

// Stripe call to create checkout session
// Take items and convert to format Stripe understands and create a session with line items
// Send URL to frontend 
const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    // Direct user to this link if checkout is successful 
    success_url: 'https://cart-cave.onrender.com/success',
    // Direct user to this link if checkout is cancelled
    cancel_url: 'https://cart-cave.onrender.com/cancel'
    });

    // Send response - show the user the session Stripe created with url 
    res.send(JSON.stringify({
        url: session.url 
    }));

});

// For deployment to Render
app.use(express.static(path.join(__dirname, '/shopping-cart-store/build')));

// For deployment to Render
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'shopping-cart-store', 'build', 'index.html'));
  })
 
// Port for server
app.listen(4000, () => console.log('Listening on port 4000'));