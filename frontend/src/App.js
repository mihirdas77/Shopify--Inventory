import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { Container, Heading, Button, useToast } from '@chakra-ui/react';
import { fetchProducts, deleteProduct } from './api/productService';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Error.",
          description: "Unable to fetch products.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    loadProducts();
  }, [toast]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
      toast({
        title: "Product deleted.",
        description: "The product was deleted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: "Error.",
        description: "Unable to delete the product.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    setCurrentProduct(null);
    // Refresh the product list after saving
    fetchProducts().then(products => setProducts(products));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentProduct(null);
  };

  return (
    <Container maxW="container.md" mt={6}>
      <Heading mb={4}>{isEditing ? 'Edit Product' : 'Product Inventory'}</Heading>
      <Button
        colorScheme="teal"
        onClick={() => {
          setCurrentProduct(null);
          setIsEditing(true);
        }}
        mb={4}
      >
        Add New Product
      </Button>
      
      {isEditing ? (
        <ProductForm
          product={currentProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <ProductList
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default App;
