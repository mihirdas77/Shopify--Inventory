import React from 'react';
import { Box, Stack, Button, Text, Image, Badge } from '@chakra-ui/react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Box p={6} bgGradient="linear(to-r, gray.50, gray.100)">
      <Stack spacing={6}>
        {products.length > 0 ? (
          products.map((product) => (
            <Box
              key={product._id}
              p={6}
              borderWidth={1}
              borderRadius="lg"
              boxShadow="lg"
              bg="white"
              _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: '0.3s' }}
              transition="0.3s ease-in-out"
              overflow="hidden"
            >
              <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                {/* Add an image placeholder for products */}
                <Box boxSize="150px">
                  <Image
                    src={product.image || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    borderRadius="md"
                    objectFit="cover"
                    boxSize="100%"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" color="blue.600">
                    {product.name}
                  </Text>
                  <Text fontSize="sm" mt={2} color="gray.600">
                    {product.description}
                  </Text>
                  <Badge colorScheme="green" mt={2} p={1} borderRadius="md">
                    ${product.price.toFixed(2)}
                  </Badge>
                  <Stack direction="row" spacing={4} mt={4}>
                    <Button
                      colorScheme="blue"
                      onClick={() => onEdit(product)}
                      variant="outline"
                      _hover={{ bg: 'blue.500', color: 'white' }}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => onDelete(product._id)}
                      variant="solid"
                      _hover={{ bg: 'red.500' }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.600" fontSize="lg">
            No products available.
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default ProductList;
