// Require Express
const express = require('express');
// Require CORS - any IP address to access express server
var cors = require('cors'); 
// Require Stripe - Initialize Stripe client specifically for account
const stripe = require('stripe')('sk_test_51OGtnsEM1c8wDhsZBqqzFIt5qddNLAhB7FzbeCnLHYGyFmaSivfzZOkICaPhlp2rpY31MHKnbhAqgNJmoP3Em34H00bVIJpnpr') 

// Create express server
const app = express();
// Middleware
app.use(cors());
// Stripe Documentation
app.use(express.static('public'));
app.use(express.json());

// Post request to Express server with '/checkout' path
app.post('/checkout', async (req, res) => {
    // Properly format data for Stripe
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
        // Link if checkout is successful
        success_url: 'http://localhost:3000/success',
        // Link if checkout is cancelled
        cancel_url: 'http://localhost:3000/cancel'
    });

    // Send response - show the user the session Stripe created 
    res.send(JSON.stringify({
        url: session.url 
    }));

});

// Port for server
app.listen(4000, () => console.log('Listening on port 4000'));

