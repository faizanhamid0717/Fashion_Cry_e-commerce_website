import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect, useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { Payment } from './Payment'
import { useParams } from 'react-router-dom';
import { Cartcontext, CartContext } from '../context/CartContext';


export const CartPage = () => {
  const [redirectToPayment, setRedirectToPayment] = React.useState(false);
   const [empty,setEmpty]=useState(false)
   const [error,setError]=useState(false)

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("lll", state); 

  const handleCheck = () => {
    setRedirectToPayment(true);
  };

  
  
  return empty? (<Heading>Oops Your Cart is Empty </Heading>) : error ? "" :(

<div style={{display:'grid' , gridTemplateColumns:'repeat(2,1fr)' }} >

    <div style={{display:'grid' , gridTemplateColumns:'repeat(1,1fr)',gap:'50px',width:'800px'}}>
     
    {state?.map((item)=>

    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '740px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'l'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            // src={
            //   'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            // }
            src={item.image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {item.title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           {item.category}
          </Text>
          <Text
            textAlign={'center'}
            // color={useColorModeValue('gray.700', 'gray.400')}
             fontFamily={'body'}
            px={7}>
           Price : ₹ {item.price}
            {/* <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>
            me in your posts */}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>

            <Button
              flex={1}  size='sm' colorScheme='teal' variant='outline' w={'10px'}
              fontSize={'3xl'}
              rounded={'5px'}
              _focus={{
                bg: 'gray.200',
              }}
            //  disabled={count == 1}
              // onClick={()=>handelCount(-1,ele.id)}
              onClick={() => {
                if (item.quantity > 1) {
                  dispatch({ type: "DECREASE", payload: item });
                }
              }}
              >
              -
            </Button>

            <Button
              flex={1}  size='sm'
              fontSize={'xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              {item.quantity}
            </Button>

            <Button
              flex={1}  size='sm'  colorScheme='teal' variant='outline'
              fontSize={'2xl'}
              rounded={'5px'}
              _focus={{
                bg: 'gray.200',
              }}
              // onClick={()=>handelCount(1,ele.id)}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: item })
              }
              >
              +
            </Button>

            <Button
              flex={1} 
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={() =>
                dispatch({ type: "REMOVE", payload: item })
              }
              bgColor={'#EF5350'}
              
              >
              Remove
            </Button>
          </Stack>
          <Heading fontSize={'xl'} fontFamily={'body'}>
            Total : ₹ {item.quantity * item.price}
          </Heading>

        </Stack>
      </Stack>
    </Center>
)}

</div>

    <div style={{width:'400px' , marginTop:'25px'}}>
      <Text fontSize={"4xl"} >#FASHION-INSIDER</Text>
      
      <Text fontSize={"2xl"} color={'#FFA726 '}>Bag Summary</Text>
      <Text>Free Standard Shipping on orders of  ₹ 1100 or more</Text>

      <TableContainer>
  <Table variant='simple'>
    <TableCaption fontWeight={"bold"} fontSize={'xl'}>Total Amount :  ₹ {total}</TableCaption>
    <Thead>
      <Tr>
        
        <Th></Th>
        <Th> </Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Merchandise Subtotal</Td>
        <Td fontWeight={"bold"} fontSize={'xl'}> ₹ {total}</Td>
        
      </Tr>
      <Tr>
        <Td>Shipping</Td>
        <Td>FREE</Td>
       
      </Tr>
      <Tr>
        <Td>Estimated Tax</Td>
        <Td > ₹ 0.00</Td>
        
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

    <Button border='1px solid black' w='300px'onClick={handleCheck} bg={'#FBC02D'}>Check-Out</Button>
    {redirectToPayment && <Navigate to="/checkout" />}
    </div>

    

</div>    
  )
}
