function createCart() {
    // Private cart array
    let cart = [];

    return {
        // Function to add items to the cart
        addItem: function(item) {
            // Check if the item already exists in the cart
            const existingItem = cart.find(cartItem => cartItem.productId === item.productId);
            if (existingItem) {
                // Increment the quantity if the item already exists
                existingItem.quantity += item.quantity;
            } else {
                // Add the new item to the cart
                cart.push(item);
            }
        },
        // Function to get all items in the cart
        getCartItems: function() {
            return cart;
        }
    };
}

// Create a new cart instance
const myCart = createCart();

// Add items to the cart
myCart.addItem({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 });
myCart.addItem({ productId: 2, name: 'Phone', quantity: 2, price: 500 });
myCart.addItem({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 }); // Duplicate item

// Get and print all items in the cart
console.log(myCart.getCartItems());
