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
  import { ChevronDownIcon } from '@chakra-ui/icons'
import Fotter from './FotterPage'


export const SortFilter = ({handelSort,order,handelFilter}) => {
  
 
  return (
  <div>
    <div>
     <Text fontSize={"xl"} mr={"230px"} >Sort By :</Text>
        {/* <Select w={"300px"} h={"50px"} ml={"22px"} color={useColorModeValue('gray.900', 'gray.900')} placeholder={"--"}>  */}

            {/* <option> */}
              <Button value ="dsec"  bg={'#F9E79F'} isDisabled={order=='desc'} m={'20px'} onClick={()=>handelSort("desc")}>Price (High to Low)</Button>
              {/* </option> */}
            {/* <option> */}
              <Button value="asc"  bg={'#F9E79F'} isDisabled={order=='asc'} onClick={()=>handelSort("asc")}>Price (Low to High)</Button>
              {/* </option> */}

        {/* </Select> */}

<Divider border={"0.5px solid gray.600"} mt={"15px"}/>
     {/* ***************************Filter*************************** */}

    <Text mt={"20px"} mr={"250px"} fontSize={"2xl"}>Filters</Text>
     <Text fontSize={"sm"}  mr={"230px"} color={'gray'}>100+ Products</Text>

        
     
<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Gender  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  {/* <MenuList > */}
     <Button value="women's" onClick={()=>handelFilter("women's clothing")}>Women </Button>
     <Button value="men's" onClick={()=>handelFilter("men's clothing")}>Men</Button>
  {/* </MenuList> */}
</Menu>
       
<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={'#F9E79F'}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"} border={"0.5px solid gray"}>
     Category  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem >Dresses</MenuItem>  
    
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"30px"} mb={"15px"}/>


  {/* <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.INQDJmWQigJ7Lvwv0OdfUgHaJQ?pid=ImgDet&w=200&h=250&c=7&dpr=2"/> */}
     {/* <Image  borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.zMc3e0l5_6YgsBHq9k6J7QAAAA?w=193&h=256&c=7&r=0&o=5&dpr=2&pid=1.7"/>  */}

    <br/>
    {/* <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.tkv1lksbPQHzszJ8BGrGTAHaIB?pid=ImgDet&w=200&h=216&c=7&dpr=2"/> */}
     <br/>

     {/* <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.kPf9nPipr09i1031wOD8kAHaLK?pid=ImgDet&w=200&h=300&c=7&dpr=2"/> */}
  
    <br/>
     {/* <Image borderRadius={"10px"} h={"380px"} w={"375px"}src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-wedding.jpg"/> */}

      
    </div>
    
    </div>
 
  )
}
