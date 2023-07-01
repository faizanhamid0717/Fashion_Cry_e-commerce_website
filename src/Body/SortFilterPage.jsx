import { Box ,Text,Select,useColorModeValue, Divider, Image} from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    option,
    
  } from '@chakra-ui/react'
  import { ChevronDownIcon,ArrowUpIcon,ArrowDownIcon } from '@chakra-ui/icons'
import Fotter from './FotterPage'


export const SortFilter = ({handelSort,order,handelFilter}) => {
  
 
  return (
  <div>
    <div>
     <Text fontSize={"xl"} mr={"230px"} >Sort By :</Text>
          
              <Button value ="dsec"  bg={'#FBC02D'} isDisabled={order=='desc'} m={'20px'} onClick={()=>handelSort("desc")}>Price (High to Low)<ArrowDownIcon/></Button>
              
              <Button value="asc"  bg={'#FBC02D'} isDisabled={order=='asc'} onClick={()=>handelSort("asc")}>Price (Low to High)<ArrowUpIcon/></Button>
             
<Divider border={".5px solid #9E9E9E"} mt={"15px"}/>
     {/* ***************************Filter*************************** */}

    <Text mt={"20px"} mr={"250px"} fontSize={"2xl"}>Filters</Text>
     <Text fontSize={"sm"}  mr={"230px"} color={'gray'}>100+ Products</Text>
 
<Menu >
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Gender  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
     <Button m={'10px'} bg={'#FBC02D'} value="women's" onClick={()=>handelFilter("women's clothing")}>Women </Button>
     <Button bg={'#FBC02D'} value="men's" onClick={()=>handelFilter("men's clothing")}>Men</Button>
  </MenuList>
</Menu>
       
{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}

<Menu>
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
     w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}> 
     Color  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
  <MenuItem> <Button>Black </Button></MenuItem> 
  <MenuItem> <Button>Brown</Button></MenuItem> 
  <MenuItem> <Button>Grey </Button></MenuItem> 
  <MenuItem> <Button>Maroon </Button></MenuItem> 
  <MenuItem> <Button>Khaki </Button></MenuItem> 
  <MenuItem> <Button>Blue </Button></MenuItem> 
  <MenuItem> <Button>Olive </Button></MenuItem> 
  </MenuList>
</Menu>

{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}

<Menu>
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
     w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Price <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
  <MenuItem> <Button>Under   ₹ 149</Button></MenuItem> 
  <MenuItem> <Button>Under   ₹ 199</Button></MenuItem> 
  <MenuItem> <Button>Under   ₹ 249</Button></MenuItem> 
  <MenuItem> <Button>Under   ₹ 399</Button></MenuItem> 
  <MenuItem> <Button>Under   ₹ 499 </Button></MenuItem> 
  <MenuItem> <Button>Under   ₹ 999 </Button></MenuItem> 

  </MenuList>
</Menu>

{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}
<Menu>
    <MenuButton as={Button}bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Rating  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem >2.0 and above</MenuItem>  
    <MenuItem>3.0 and above </MenuItem>
    <MenuItem>3.5 and above </MenuItem>
    <MenuItem>4.0 and above</MenuItem>
    <MenuItem>M-Trusted</MenuItem>
    
  </MenuList>
</Menu>

{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}

<Menu>
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Material  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem >Print Or Patten Type</MenuItem>  
    <MenuItem>Bottom Pattern Type </MenuItem>
    <MenuItem>Surface styling </MenuItem>
  </MenuList>
</Menu>

{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}
<Menu>
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Brand  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem >H & M</MenuItem>  
    <MenuItem>Puma </MenuItem>
    <MenuItem>Tommy Helifer</MenuItem>
    <MenuItem>Roadister</MenuItem>
    <MenuItem>Abof</MenuItem>
  </MenuList>
</Menu>

{/* <Divider border={".5px solid #9E9E9E"} mt={"15px"} mb={"15px"}/> */}

<Menu>
    <MenuButton as={Button} bg={'white'} m={'10px'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Category  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem >Dresses</MenuItem>  
    
  </MenuList>
</Menu>
  
    </div>
    
    </div>
 
  )
}
