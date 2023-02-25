

import React from 'react'
import {Button,Text} from '@chakra-ui/react'

export const Pagination = ({page,handelPage,lastPage}) => {
  return (
    <div style={{margin:"30px" ,gap:'20px'}} >
      <Text fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '5px', md: '10px',xl:'15px' }}>See More ...</Text>
    <Button bg={'#F9E79F'} isDisabled={page == 1} onClick={()=>handelPage(-1)} m={'10px'}>Prev</Button>
    <Button bg={'#F9E79F'}  m={'10px'}>{page}</Button>
    <Button bg={'#F9E79F'} isDisabled={page == lastPage} onClick={()=>handelPage(+1)}  m={'10px'} >Next</Button>
    </div>
  )
}
