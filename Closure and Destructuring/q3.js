function createCart() {
    // Private cart array
    let cart = [];

    return {
        // Function to add items to the cart
        addItem: function(item) {
            cart.push(item);
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
myCart.addItem({ productId: 1, productName: 'Laptop', quantity: 1 });
myCart.addItem({ productId: 2, productName: 'Phone', quantity: 2 });

// Get and print all items in the cart
console.log(myCart.getCartItems());
