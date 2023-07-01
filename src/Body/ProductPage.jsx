import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Grid, GridItem ,Box,Button, Text,Image,Divider,Link,InputGroup,Input,InputRightAddon,Icon, SimpleGrid} from '@chakra-ui/react'
import ProductCart from './ProductCard'
import { SortFilter } from './SortFilterPage'
import { Search2Icon,ArrowForwardIcon } from '@chakra-ui/icons'
import Fotter from './FotterPage'
import { Pagination } from './Pagination'
import { Navigate } from 'react-router-dom'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export const Products = () => {
    const [data,setData]=useState([])
    const [select,setSelect]=useState('')
    const [page,setPage]=useState(1)
    const [order,setOrder]=useState('')
    const [total,setTotal]=useState(0)
    const [filter,setFilter]=useState("")
    const [loading,setLoading]=useState(false)
   let sort ='price'  
   let limit = 18
let lastPage = Math.ceil(total/limit)


const getData=()=>{
    setLoading(true)
    const params =select ? {q:select} : {}
    let apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add`

    if(order){
        apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    }else if(filter){
        apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&category=${filter}`
    }else{
        apiUrl=`https://easy-pink-cricket-hat.cyclic.app/Add?_page=${page}&_limit=${limit}`
    }

    return(
        
        axios.get(apiUrl,{params})
        .then((res)=>{
     
            console.log("gggg",res.data)
            const updatedFood = res.data.map((ele) => ({
                ...ele,
                quantity: 1, // add a quantity field with default value of 1
              }))

            // console.log("gggg",res.data)
            console.log("DDDDDDDDDD",updatedFood)
            
            setData(updatedFood)
            console.log(res.headers.get('X-Total-Count'))
            setTotal(Number(res.headers.get('X-Total-Count')))

            setLoading(false)
         
        })
       
        .catch((error)=>{
            console.log(error)
        })
    )
    
}
// console.log(data)


const handelPage=(val)=>{
    setPage(page + val)
}

const handelSort=(val)=>{
    setOrder(val)
}
console.log(order)

const handelFilter=(val)=>{
    setFilter(val)
}
console.log(filter)


useEffect(()=>{
    getData()
},[page,order,filter])

useEffect(()=>{
    getData(select)
},[select])


  return loading ? (<CircularProgress isIndeterminate color='green.300' />) : (
    <div>
           
     {/* ****************************Search Bar*************************************** */}
     <InputGroup mt={'35px'}>     
       <Text ml={'200px'} fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '15px', md: '25px',xl:'35px' }}>SHOP THE EASY WAY ...</Text>
        <Input ml={"40px"} width={500} border={'1px solid black'} placeholder= "Search here" type="text" onChange={(e)=>setSelect(e.target.value)}/> 
        <InputRightAddon children={<Search2Icon/>} />
       </InputGroup> 

       <Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Box w={"1100px"} h={"100%"}  ml={"100px"} display={"grid"} gridTemplateColumns={"repeat(2,0px)"} >

 <Box w={"350px"} h={"860px"}   borderRadius={"10px"} > <SortFilter handelSort={handelSort} order={order} handelFilter={handelFilter}/> </Box>

 <SimpleGrid columns={{base:1,sm:2,lg:3}}>
<Box w={"700px"} h={"100%"}  ml={"400px"} borderRadius={"10px"} columns={{base:1,sm:2,lg:3}} > 

    <Grid gridTemplateColumns="repeat(3,230px)">
    
        {data ?.map ((ele)=>
       <GridItem key={ele.id}  >
        
        <ProductCart title={ele.title} image={ele.image} 
        price={ele.price} category={ele.category}
         rate={ele.rating} id={ele.id}/>
        
       </GridItem>
   )}
    </Grid>
    
    <Pagination page={page} handelPage={handelPage} lastPage={lastPage}/>

 </Box> 
 </SimpleGrid>
     
 </Box> 
    <div style={{ marginTop:'50px' }} >
        <Fotter/>
    </div>
 
    </div>
  )
}
