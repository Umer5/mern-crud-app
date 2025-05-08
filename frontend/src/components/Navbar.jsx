import React from 'react';
import { Container, Flex, Box, Spacer, ButtonGroup, Button, Heading, Text, HStack, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={"1140px"} px={4} py={2}>
            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{ base: 'column', sm: 'row' }}
            >
                <Text
                    bgGradient={'linear(to-r, cyan.400, blue.500)'}
                    fontWeight='bold'
                    textTransform={'uppercase'}
                    textAlign={'center'}
                    bgClip='text'
                    fontSize={{ base: '22', sm: '28' }}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>
                <HStack spacing={4} alignItems={'center'}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                </HStack>
            </Flex>

            {/* <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Chakra App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex> */}
        </Container>
    )
}

export default Navbar