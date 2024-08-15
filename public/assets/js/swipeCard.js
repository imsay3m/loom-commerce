function swipeCards() {
    return {
        cards: [
            {
                id: 1,
                image: `assets/images/product/product-1.png`,
                title: 'Classic Denim Jeans',
                description: 'Denim jeans with comfortable fit',
                price: 8.99,
                link: '#'
            },
            {
                id: 2,
                image: `assets/images/product/product-2.png`,
                title: 'Cozy Comfort Hoodie',
                description: 'Hoodieie with adjustable drawers',
                price: 5.49,
                link: '#'
            },
            {
                id: 3,
                image: `assets/images/product/product-3.png`,
                title: 'Classic Polo Shirt',
                description: 'Polo shirt with comfortable fit',
                price: 4.99,
                link: '#'
            },
            {
                id: 4,
                image: `assets/images/product/product-4.png`,
                title: 'Chino Pants',
                description: 'Very Nice and fit',
                price: 7.99,
                link: '#'
            },
            {
                id: 5,
                image: `assets/images/product/product-1.png`,
                title: 'Classic Denim Jeans',
                description: 'Very comfortable and fashionable',
                price: 8.99,
                link: '#'
            },
        ],
        addToCart(product) {
            // Implement your add to cart logic here
            console.log('Adding to cart:', product);
        }
    };
}