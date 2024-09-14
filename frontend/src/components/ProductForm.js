import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productService';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
  useToast,
  Textarea,
  SimpleGrid,
  Heading
} from '@chakra-ui/react';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const toast = useToast();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price };
    try {
      if (product) {
        await updateProduct(product._id, newProduct);
        toast({
          title: "Product updated.",
          description: "The product was updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        await createProduct(newProduct);
        toast({
          title: "Product created.",
          description: "The product was created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      onSave();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: "An error occurred.",
        description: "Unable to save the product.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={8}
      borderWidth={2}
      borderRadius="xl"
      boxShadow="2xl"
      bgGradient="linear(to-r, gray.50, white)"
      maxW="lg"
      mx="auto"
      mt={12}
    >
      <Heading size="lg" textAlign="center" mb={6}>
        {product ? 'Edit Product' : 'Create Product'}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl id="name" isRequired>
            <FormLabel fontWeight="bold">Product Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="blue.500"
              borderRadius="md"
              bg="white"
              _hover={{ borderColor: 'blue.300' }}
            />
          </FormControl>

          <FormControl id="description">
            <FormLabel fontWeight="bold">Description</FormLabel>
            <Textarea
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              focusBorderColor="blue.500"
              borderRadius="md"
              bg="white"
              _hover={{ borderColor: 'blue.300' }}
            />
          </FormControl>

          <FormControl id="price" isRequired>
            <FormLabel fontWeight="bold">Price</FormLabel>
            <Input
              type="number"
              step="0.01"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              focusBorderColor="blue.500"
              borderRadius="md"
              bg="white"
              _hover={{ borderColor: 'blue.300' }}
            />
          </FormControl>

          <SimpleGrid columns={[1, 2]} spacing={4}>
            <Button
              colorScheme="blue"
              type="submit"
              width="full"
              _hover={{ bg: 'blue.600' }}
            >
              Save
            </Button>
            <Button
              colorScheme="gray"
              onClick={onCancel}
              width="full"
              _hover={{ bg: 'gray.400' }}
            >
              Cancel
            </Button>
          </SimpleGrid>
        </Stack>
      </form>
    </Box>
  );
};

export default ProductForm;
