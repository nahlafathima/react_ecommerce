// src/products.js

const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 299.99,
      image: 'src/images/smartphone.jpg',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 899.99,
      image: 'src/images/laptop.png',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Jeans',
      price: 49.99,
      image: 'src/images/jeans.png',
      category: 'Clothing',
    },
    {
      id: 4,
      name: 'Novel Book',
      price: 14.99,
      image: 'src/images/novelbook.jpg',
      category: 'Books',
    },
    {
      id: 5,
      name: 'Headphones',
      price: 89.99,
      image: 'src/images/headphone.jpg',
      category: 'Electronics',
    },
    {
      id: 6,
      name: 'T-Shirt',
      price: 19.99, 
      image: 'src/images/tshirt.webp',
      category: 'Clothing',
    },
    {
      id: 7,
      name: 'Organic Apples',
      price: 3.99,
      image: 'src/images/apple.png',
      category: 'Food Items',
    },
    // ... add more products with appropriate categories
  ];
  
  export const categories = [...new Set(products.map((product) => product.category))];
  
  export default products;
  