
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'
import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
// import { Grid, GridItem ,Box,Button, Text,Image,Divider,Link,InputGroup,Input,InputRightAddon,Icon, SimpleGrid} from '@chakra-ui/react'
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,Input,Link,Text
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { FiShoppingCart } from 'react-icons/fi';
import { Pagination } from '../Body/Pagination';
import { SortFilter } from '../Body/SortFilterPage';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { ChevronDownIcon,ArrowUpIcon,ArrowDownIcon,DeleteIcon } from '@chakra-ui/icons'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};



export const AdminPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const {isAuth,Logout}=useContext(AuthContext)
  const [loading,setLoading]=useState(false)

  const [admin,setAdmin]=useState([])
  const [total,setTotal]=useState()
  const [page,setPage]=useState(1)
  const [order,setOrder]=useState('')
  const [form,setForm]=useState({
   title:'',
   price:'',
   description:'',
   category:'',
   image:'',
   rating: ''

  })

  let sort ='price'
  let limit = 12
  let lastPage = Math.ceil(total/limit)


  // *********************GET DATA***************************

  const FetchAdmin=()=>{
    setLoading(true)
    let apiUrl=(`https://easy-pink-cricket-hat.cyclic.app/Add`)

  if(order){
      apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  }else{
      apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add?_page=${page}&_limit=${limit}`
  }
  return (
   
    axios.get(apiUrl)
    .then((res)=>{
      setTotal(Number(res.headers.get("X-Total-Count")))
      console.log("Admin data",res.data)
      setAdmin(res.data)
      setLoading(false)
    })
  )
  }

useEffect(()=>{
  FetchAdmin()
},[page,order])

const handelDelete=(id)=>{
  axios.delete(`https://easy-pink-cricket-hat.cyclic.app/Add/${id}`)
  .then(FetchAdmin)
}

const handelPage=(val)=>{
  setPage(page + val)
}

const handelSort=(val)=>{
  setOrder(val)
}

const handelForm=()=>{
  axios.post(`https://easy-pink-cricket-hat.cyclic.app/Add`,{
    ...form,
   
   
  })
  
  .then(FetchAdmin)
  setForm("")
}


 
return  loading ? (<CircularProgress isIndeterminate color='green.300' />)  : (

    <>
    <Box style={{width:'850px' ,margin:'auto' 
    ,height:'100px' ,display:'flex',justifyContent:'space-evenly', marginTop:'40px'}}
   
    >

    <Button value ="dsec"  bg={'#FBC02D'} isDisabled={order=='desc'} m={'20px'} onClick={()=>handelSort("desc")}>Price (High to Low) <ArrowDownIcon/> </Button>
    <Button value ="asc"  bg={'#FBC02D'} isDisabled={order=='asc'} m={'20px'} mr={'15px'} onClick={()=>handelSort("asc")}>Price (Low to High) <ArrowUpIcon/></Button>

    <Button mt={'20px'} fontSize={'20px'} fontWeight={'900'} mr={'15px'} bg={'#FBC02D'} p={'15px'}>Total Products : {total}</Button>

      <Button  ref={btnRef} mt={'20px'} colorScheme='teal' bg={'#FBC02D'} color="black" onClick={onOpen}>
      Add Products 
      </Button>
      
     
      <Button value ="dsec"  bg={'#E53935'} color={"white"} isDisabled={order=='desc'} m={'20px'} onClick={Logout} >Logout</Button>
    
    
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        w={'300px'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Products Here ...</DrawerHeader>

          <DrawerBody >
            <Input m={'10px'} placeholder='title'  onChange={(e)=>setForm({...form,title:e.target.value})}
            value={form.title}/>

            <Input m={'10px'} placeholder='price'  onChange={(e)=>setForm({...form,price:e.target.value})}
            value={form.price}/> 

            <Input m={'10px'} placeholder='description'  onChange={(e)=>setForm({...form,description:e.target.value})}
            value={form.description}/>

            <Input m={'10px'} placeholder='category'  onChange={(e)=>setForm({...form,category:e.target.value})}
            value={form.category}/>

            <Input m={'10px'} placeholder='imageUrl'  onChange={(e)=>setForm({...form,image:e.target.value})}
            value={form.image}/> 

            <Input m={'10px'} placeholder='rating'  onChange={(e)=>setForm({...form,rating:e.target.value})}
            value={form.rating}/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' bg={'#FBC02D'} onClick={handelForm}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
    </Box>

    <div>

    <Box style={{display:'grid' , gridTemplateColumns:"repeat(4,1fr)" ,gap:'20px' ,width:'1000px' ,margin:'auto'}}>
    {admin?.map((ele)=>

      <div key={ele.id} >
         {/* <Flex p={3} w="full"  > */}
        {/* <Link to={`/products/${ele.id}`}> */}
        <Box 
          // bg={useColorModeValue('white', 'gray.800')}
          w="230px"
          h={"350px"}
          border="0.5px solid #E7EEFF"
          rounded="3PX"
          p={"10px"} 
        //   shadow="sm"
          >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image 
            w={"200px"} h={"180px"} pl={"30px"} pt={"10px"}
            src={ele.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="5" fontSize="0.8em" colorScheme="#DDF2DC" mb={"10px"}>
                 {ele.category}
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="m"
                // color={useColorModeValue('gray.500', 'gray.100')} mb={"15px"} 
                color={('gray.500', 'gray.500')}
                p={'10px'}
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                isTruncated>
                {ele.title}
              </Box>

             
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
     <Box alignItems="center"
      h={"25px"} w={"90px"} fontSize={"sm"} borderRadius={"5px"} 
      bgColor={"#D4EFDF"} color={"black"}>
        {ele.rating}
        <StarIcon height={'10px'} color={'#FBC02D'} />
      </Box>
              {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
              <Box fontSize="xl" 
              // color={useColorModeValue('black')}fontWeight={"bold"} 
              >
                <Box as="span" color={'black'} fontSize="xxl" ml={'10px'} >
                ₹
                </Box>
                {ele.price}
              </Box>
              {/* <Link to={`/products/${id}`}>more info</Link> */}
              <Button ml={'15px'} bg="#EC7063" fontSize={'13px'} height={'25px'} color={'white'} onClick={()=>handelDelete(ele.id)}><DeleteIcon/></Button>
            </Flex>
            
          </Box>
          
        </Box>
        {/* </Link> */}
        
      {/* </Flex> */}
       </div>
   
    )}
   </Box>  

    <Pagination page={page} handelPage={handelPage} lastPage={lastPage}/>
    </div>

    </>
  )
}
