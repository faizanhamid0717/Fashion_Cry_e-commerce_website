



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
import { CartContext } from '../context/CartContext';
import { BiCaretLeftSquare } from 'react-icons/bi';
import { CartPage } from './Cartpage';
import Fotter from './FotterPage';

export const  ProductDetail = () => {

  const [data,setData]=useState([])
  const { addToCart } = useContext(CartContext);
  const{image,title,price,description,category
  }=data

  // const [carts,setCarts]=useState({
   
  
  // })

  const {id}=useParams()
  console.log(id)

// const getData=(id)=>{
//   return(
//       axios.get(`http://localhost:8080/Add/${id}`)
//       .then((res)=>{
//           console.log(res.data)
//           setData(res.data)
//       })
//       .catch((error)=>{
//           console.log(error)
//       })
//   )
  
// }

// const handelClick=(()=>{
//   setCart([...cart,{id,title ,price}])
// });

// useEffect(()=>{
//   getData(id)
// },[id])



//  const{image,title,price,description,category
//  }=data


//  const handleClick = () => {
//   const item = { id, title, price, image ,category};
//   addToCart(item);
//   console.log('Item added to cart:', item);
// };

// const handelClick=(id)=>{
//   return (
//     axios.get(`http://localhost:8080/Add/${id}`)
//     .then((res)=>{
//       console.log("CART DATA comming",res.data)
//       setCarts(res,data)
//     })
//   )
//   }
  
 
  // console.log(res.data)
  // addToCart(res.data)

// }
// console.log(carts)

// const handelClick=()=>{
//   // axios.get(`http://localhost:8080/Add/${id}`)
//   // .then((res)=>{
//   //   addToCart(res.data)
//   //   console.log('cart-datat',res.data)
//   // })
//   addToCart(data)
// }

const handelClick=()=>{
 
  axios
  .post(`http://localhost:8080/cart/`
    
  )
  .then(data)
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
                  
                 <Image h={"150px"} w={"1000px"} src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
                </SimpleGrid>
              </Box>
              
            </Stack>
  
     {/* <Link to={`/productdetails/${id}`}> */}
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue("#F43397")}
              color={useColorModeValue('white', 'gray.100')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                bg:'#F43397'
              }}
              
            onClick={()=>handelClick(id)}
              // onClick={() => addToCart(ele)}
              >
                
                
             Add To Cart
            </Button>
           
      {/* </Link> */}
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