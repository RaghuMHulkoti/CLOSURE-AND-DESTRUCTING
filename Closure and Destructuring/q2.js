// Example customer order object
const customerOrder = {
    orderId: '12345',
    productName: 'Laptop',
    quantity: 2
};

// Destructuring the object
const { orderId, productName, quantity } = customerOrder;

// Printing the properties
console.log(`Order ID: ${orderId}`);
console.log(`Product Name: ${productName}`);
console.log(`Quantity: ${quantity}`);
