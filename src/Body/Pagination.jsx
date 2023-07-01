

import React from 'react'
import {Button,Text} from '@chakra-ui/react'
import {ArrowLeftIcon,ArrowRightIcon} from '@chakra-ui/icons' 

export const Pagination = ({page,handelPage,lastPage}) => {
  return (
    <div style={{margin:"30px" ,gap:'20px'}} >
      <Text fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '5px', md: '10px',xl:'15px' }}>See More ...</Text>
    <Button bg={'#FBC02D'} isDisabled={page == 1} onClick={()=>handelPage(-1)} m={'10px'}> <ArrowLeftIcon/> </Button>
    <Button bg={'#FBC02D'}  m={'10px'}>{page}</Button>
    <Button bg={'#FBC02D'} isDisabled={page == lastPage} onClick={()=>handelPage(+1)}  m={'10px'} > <ArrowRightIcon/> </Button>
    </div>
  )
}
