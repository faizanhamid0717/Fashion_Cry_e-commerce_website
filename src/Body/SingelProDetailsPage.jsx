



import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    
    
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
 import axios from "axios"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { CartPage } from './Cartpage';
import { useContext } from 'react';
import { Cartcontext, CartContext } from '../context/CartContext';
import { BiCaretLeftSquare } from 'react-icons/bi';
import { CartPage } from './Cartpage';
import Fotter from './FotterPage';
import { useToast } from '@chakra-ui/react'


export const  ProductDetail = () => {

  const [data,setData]=useState([])
  const [isCart,setIsCart] = useState(false)
  const toast = useToast()

  const{image,title,price,description,category
  }=data

  

  const {id}=useParams()
  console.log(id)

const getData=(id)=>{
  return(
      axios.get(`https://easy-pink-cricket-hat.cyclic.app/Add/${id}`)
      .then((res)=>{
        const updated={...res.data,quantity:1}
          console.log(updated)
          setData(updated)
      })
      .catch((error)=>{
          console.log(error)
      })
  )
  
}

const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch
  console.log(Globalstate)

useEffect(()=>{
  getData(id)
},[id])

const handelCart=()=>{
  dispatch({ type: "ADD", payload: data})
  setIsCart(true)
  toast({
    title: 'Item added to cart successfully',
    status: 'success',
    duration: 1000,
    isClosable: true,
   
  });

}


    return (
    
      <div>
        {/* <h1>Singel Product Page</h1> */}
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
          
            <Image
            border={"1px solid gray"}
            p={"40px"}
              rounded={'md'}
              alt={'product image'}
              // src={
              //   'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              // }
              src={image}
              fit={'cover'}
              align={'center'}
              w={'100%'} h={"80%"}
              // h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '1xl', sm: '2xl', lg: '1xl' }}>
                {/* Automatic Watch */}
                {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'5xl'}>
                Price : ₹ {price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'1xl'}
                  fontWeight={'300'}>
                  
                  {description}
                </Text>
               
              </VStack>
              <Box>
                
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  
                 <Image h={"200px"} w={"1500px"} src="https://thumbs.dreamstime.com/b/have-moved-announcement-icon-change-address-location-truck-moving-to-another-house-navigation-pin-shop-office-204484329.jpg"/>
                </SimpleGrid>
              </Box>
              
            </Stack>
  
  {isCart ? (<Link to='/cart'>
  <Button
              rounded={'none'} bg={'#FBC02D'} color={'black'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                
              }}
              
              // onClick={handelCart}
              // onClick={() => dispatch({ type: "ADD", payload: data})}
            
              >    
             GO TO CART
            </Button>
  </Link>) :(
     
            <Button
              rounded={'none'} bg={'#FBC02D'} color={'black'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                
              }}
              
              onClick={handelCart}
              // onClick={() => dispatch({ type: "ADD", payload: data})}
              >    
             Add To Cart
            </Button> )}
           
      
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
          
        </SimpleGrid>
        <Fotter/>
      </Container>
      </div>
    );
    
  }

  export default ProductDetail