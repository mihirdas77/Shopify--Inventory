# Shopify Inventory Management System

This project is a **Shopify Inventory Management System** built using **Node.js**, **Express**, and **MongoDB**. It provides a simple API for managing products with basic CRUD (Create, Read, Update, Delete) operations.

## Features

- Add new products
- View all products
- Edit product details
- Delete products
- Manage inventory efficiently

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript (if applicable)
- **Other Tools**: Postman (for API testing)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/mihirdas77/shopify-inventory.git
   ```

2. Navigate to the project directory:
   ```bash
   cd shopify-inventory
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   PORT=5050
   ```

5. Start the server:
   ```bash
   node server.js
   ```

6. Visit `http://localhost:5000` in your browser or use Postman to interact with the API.

## API Endpoints

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Add a new product
- **GET** `/api/products/:id` - Get a single product by ID
- **PUT** `/api/products/:id` - Update a product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

## Usage

1. Use Postman or any REST client to test the API endpoints.
2. You can create, retrieve, update, and delete products in your inventory.

### Example JSON for creating a product:
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99
}
```

## Known Issues

- Deprecation warning: The `punycode` module is deprecated.
- Ensure MongoDB is running before starting the server.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, feel free to reach out to me:

- GitHub: [mihirdas77](https://github.com/mihirdas77)
```

### Key Sections:
1. **Project Name & Description**: Shopify Inventory Management System for managing products and inventory.
2. **Technologies**: Lists the technologies and tools used.
3. **Installation**: Explains how to set up the project locally.
4. **API Endpoints**: Lists the CRUD endpoints for interacting with the API.
5. **Usage**: Instructions on how to test the API.
6. **Contribution & License**: Encourages contribution and explains the license.
