const http = require("http");
const hostname = '127.0.0.1';
const port = 4000;

// Import my model class
const Order = require('./models/orders');

const server = http.createServer(async (req, res) => {
    console.log(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // if req.url is "/orders", send them all orders
    // if not, send welcome message

    if (req.url.startsWith("/orders")) {
        const parts = req.url.split("/");
        const method = req.method;
        if (method === "GET") {
            if (parts.length === 2) {
                const allOrders = await Order.getAll();
                const orderJSON = JSON.stringify(allOrders);
                res.end(orderJSON);
            } else if (parts.length === 3) {
                const orderId = parts[2];
                const theOrder = await Order.getById(orderId);
                const theOrderJSON = JSON.stringify(theOrder);
                res.end(theOrderJSON);
            } else {
                res.statusCode = 404;
                res.end('Resource not found.')
            }
        } else if (method === "POST") {
            res.end('{"message": "it sounds like you would like to create"}');
        } else if (method === "PUT") {
            res.end('{"message": "You wanna update, don\'t ya?"}')
        } else if (method === "DELETE") {
            res.end('{"message": "rm the restaurant"}')
        }

    }



});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});