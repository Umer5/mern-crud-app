import { useState } from 'react';
import {
    Container,
    Input,
    VStack,
    Heading,
    Box,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react'
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react';


const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const toast = useToast();
    const { createProduct } = useProductStore();
    
    
    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                // position: "top-right",
                isClosable: true,
                status: "error",
            });
        } else {
            toast({
                title: "Success",
                description: message,
                // position: "top-right",
                isClosable: true,
                status: "success",
            });
        }
        // Reset the form
        setNewProduct({name: "",price: "",image: ""});
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as='h1' size='2xl' textAlign={'center'} mb={8}>
                    Create New Product
                </Heading>
                <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input 
                            type='text'
                            placeholder='Product Name'
                            mb={4}
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input 
                            type='number'
                            placeholder='Price'
                            mb={4}
                            name='price'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input 
                            type='text'
                            placeholder='Image URL'
                            mb={4}
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme='blue' w={'full'} onClick={handleAddProduct}>
                            Create Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage