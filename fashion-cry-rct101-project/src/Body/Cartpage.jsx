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
import { CartContext } from '../context/CartContext';


export const CartPage = () => {
  const [redirectToPayment, setRedirectToPayment] = React.useState(false);
    const [count,setCount]=useState(1)
    // const [data,setData]=useState([])
    // const { cart,handelCount} = useContext(CartContext);
    const [cart,setCart]=useState([])
     

console.log('my cart is',cart)

  //   const {id}=useParams()
  //   console.log(id)
  
  const getData=()=>{
    return(
        axios.get(`http://localhost:8080/cart`)
        .then((res)=>{
            console.log(res.data)
            setCart(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    )
    
  }

  useEffect(()=>{
    getData()
  },[])
  
  
  
   const{image,title,price,description,category
   }=cart
  


 
    
  




  const handleCheck = () => {
    setRedirectToPayment(true);
  };

  
  
  return (
<div style={{display:'grid' , gridTemplateColumns:'repeat(2,1fr)'}}>

    <div style={{display:'grid' , gridTemplateColumns:'repeat(1,1fr)',gap:'50px',width:'800px'}}>
     
    {cart?.map((ele)=>

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
            src={ele.image}
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
            {ele.title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           {ele.category}
          </Text>
          <Text
            textAlign={'center'}
            // color={useColorModeValue('gray.700', 'gray.400')}
             fontFamily={'body'}
            px={7}>
           Price : {ele.price}
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
              flex={1}  size='sm' colorScheme='teal' variant='outline'
              fontSize={'xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
             disabled={count == 1}
              // onClick={()=>handelCount(-1,ele.id)}
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
              {/* {count} */}
            </Button>

            <Button
              flex={1}  size='sm'  colorScheme='teal' variant='outline'
              fontSize={'xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              // onClick={()=>handelCount(1,ele.id)}
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
              }}>
              Remove
            </Button>
          </Stack>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Total : {count*ele.price}
          </Heading>

        </Stack>
      </Stack>
    </Center>
)}

</div>

    <div style={{width:'400px'}}>
      <Text>EXPRESS-INSIDER</Text>
      
      <Text>Bag Summary</Text>
      <Text>Free Standard Shipping on orders of $50 or more</Text>

      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Total Amount : $0.00</TableCaption>
    <Thead>
      <Tr>
        
        <Th></Th>
        <Th> </Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Merchandise Subtotal</Td>
        <Td>{count*price}</Td>
        
      </Tr>
      <Tr>
        <Td>Shipping</Td>
        <Td>FREE</Td>
       
      </Tr>
      <Tr>
        <Td>Estimated Tax</Td>
        <Td>$0.00</Td>
        
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

    <Button border='1px solid black' w='300px'onClick={handleCheck}>Check-Out</Button>
    {redirectToPayment && <Navigate to="/checkout" />}
    </div>

    

</div>    
  )
}
