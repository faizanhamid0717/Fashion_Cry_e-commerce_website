
import { FiShoppingCart } from 'react-icons/fi';
import { Search2Icon,ArrowForwardIcon } from '@chakra-ui/icons'
import { ReactNode, useState } from 'react';
import { AllRoutes } from './AllRoutes';
import cry from "./images/cry.jpg"

import { useAuth0 } from "@auth0/auth0-react";

import {
  Box,
  Flex,
  Avatar,
 Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  Divider,
  chakra,
  Tooltip,
  
 
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Link } from "react-router-dom";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  

  const { loginWithRedirect,isAuthenticated,user } = useAuth0();
  const { logout } = useAuth0()
  return (
    <>
      <Box  px={4} bg={'white'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'} width={1100} margin={'auto'}>

          {/* <Box > <Image h={"35px"} w ={"100px"} mt={"20px"}src="https://th.bing.com/th?id=ODLS.416e21d2-89d8-43b8-8ab8-2db69d72773e&w=32&h=32&o=6&pid=13.1"/> </Box> */}
       
          <Link to="/"> 
         {/* <Box fontSize={"5xl"} fontWeight={"bold"} color={'black'}>FASHION CRY</Box> */}
         <Image width="180px" height="65px" src={cry}/>
         </Link>

         <InputGroup>     
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg"/>
       {/* <Text ml={'200px'} fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '15px', md: '25px',xl:'35px' }}>SHOP THE EASY WAY ...</Text> */}
        {/* <Input ml={"40px"} width={500} border={'1px solid black'} placeholder= "Search here" type="text" />  */}
        {/* <InputRightAddon children={<Search2Icon/>} /> */}
       </InputGroup> 
 
{/* 8******************************************************************************* */}

{/* *****************************Download*************************************** */}
          <Menu>
  <MenuButton as={Text} ml={"25px"} color={'gray.900'}>
    Download App
  </MenuButton>
  <MenuList>
    <MenuItem >Download From</MenuItem>
    {/* <MenuItem>Create a Copy</MenuItem> */}
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/playstore-icon-big.webp"/></MenuItem>
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/appstore-icon-big.webp"/></MenuItem>
  </MenuList>
</Menu>
{/* 8******************************************************************************* */}

   { isAuthenticated ? (
     <Box ml={"20px"} ><Button  bg={'white'} color={'gray.900'} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </Button></Box>
   ) :(
    <Box mr={"20px"}><Button  bg={'white'} color={'gray.900'}  onClick={() => loginWithRedirect()}>Log In</Button></Box>
   )}
      
     
       

          <Flex alignItems={'center'}>

            {/* *************************************************************************************************** */}

            <Link to='/adminpage'>Admin</Link>
            
          {/* ************************************************************************************************   */}

            <Stack direction={'row'} spacing={7} >
              <Button onClick={toggleColorMode}  bg={'#F9E79F'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Box
                  mr={"30px"} bg={'white'} color={'gray.900'}><Text>Profile</Text></Box>

                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'md'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p >Hello User</p> 
                    
                  </Center>
                  <p >{isAuthenticated && <p >{user.name}</p>}</p>

                  <br />
                  <MenuDivider />
                  
                 
                  <MenuItem>My Orders</MenuItem>
                 
                </MenuList>

                <Box
                label="Add to cart"
               
                placement={'top'}
                color={'gray.500'}
                fontSize={'1.2em'}>
                {/* <chakra.a href={'#'} display={'flex'}> */}

                  <Link to="/cart">
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} bg={'white'} color={'gray.900'} />
                  
                  </Link>
                
                <Link to="/"> </Link>
                
                {/* </chakra.a> */}
              </Box>  
                
              </Menu>
              
            </Stack> 
          </Flex>
        </Flex>
      </Box>

{/* <br/> */}
      {/* **************************************Drop down nave****************************** */}
     {/* <Divider mt={"5px"} border={"1px solid #F43397"}/> */}

      <Box bg={'white'} px={4} h={12}>
      
  <Link to="/products"> 
  <Button rightIcon={<ArrowForwardIcon />} color='gray.800' bg={'white'}>
    Products For You
  </Button>
  </Link>
  
<Menu>
    <MenuButton as={Button}  color='gray.800' bg={'white'}>
     Women Ethnic
    </MenuButton>
  <MenuList >
    <MenuItem color={"#F43397"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"#F43397"}>Kurtis</MenuItem>
    <MenuItem>All Kurtis </MenuItem>
    <MenuItem>Rayon Kurtis </MenuItem>
    <MenuItem>Cotton Kurtis</MenuItem>
    
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}  color={'gray.800'} bg={'white'}>
   Women Western
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Topwear</MenuItem>
    <MenuItem>Tops</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F43397"}>Bottemwear</MenuItem>
    <MenuItem>Jeans</MenuItem>
    <MenuItem>Shorts</MenuItem>
    <MenuItem>Skirts</MenuItem>
    <MenuItem color={"#F43397"}>Sleepwear</MenuItem>
    <MenuItem>Babbydolls</MenuItem>
    <MenuItem>Nightsuits</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}   color='gray.800' bg={'white'}>
    Mens
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Topwear</MenuItem>
    <MenuItem>Tshirts</MenuItem>
    <MenuItem>Shirts</MenuItem>
    <MenuItem color={"#F43397"}>Bottomwear</MenuItem>
    <MenuItem>Track Pants</MenuItem>
    <MenuItem>Trousers</MenuItem>
    <MenuItem>Jeans</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}  color={'gray.800'} bg={'white'}>
   Kids
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Boys & Girls 2+ Years</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F43397"}>Infant 0-2 Years</MenuItem>
    <MenuItem >Rompers</MenuItem>
    <MenuItem color={"#F43397"}>Babby Care</MenuItem>
    <MenuItem >All Baby Care</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
   Home & Kitchen
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Home Decor</MenuItem>
    <MenuItem>Stickers</MenuItem>
    <MenuItem>Clocks</MenuItem>
    <MenuItem color={"#F43397"}>Kitchen & Dining</MenuItem>
    <MenuItem>Kitchen storage</MenuItem>
    <MenuItem>Cookware & Bakewear</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
    Beautiful & Health
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Make Up</MenuItem>
    <MenuItem>Face</MenuItem>
    <MenuItem>Eyes</MenuItem>
    <MenuItem>Lips</MenuItem>
    <MenuItem color={"#F43397"}>Wellness</MenuItem>
    <MenuItem>Oralcare</MenuItem>
    <MenuItem>Sanitizers</MenuItem>
    <MenuItem color={"#F43397"}>Skincare</MenuItem>
    <MenuItem>Deadorants</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
    Bag & Footwear 
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Women Bags</MenuItem>
    <MenuItem>Handbags</MenuItem>
    <MenuItem>Slingbags</MenuItem>
    <MenuItem color={"#F43397"}>Men Bags</MenuItem>
    <MenuItem>All Men Bags</MenuItem>
    <MenuItem color={"#F43397"}>Men Footwear</MenuItem>
    <MenuItem >Sports Shoes</MenuItem>
    <MenuItem >Formal shoes</MenuItem>
    <MenuItem color={"#F43397"}>Women Footwear</MenuItem>
    <MenuItem>Flats</MenuItem>
    <MenuItem>Juttis</MenuItem>
  </MenuList>
</Menu> 



<Divider border={"0.5px solid gray"}/>

      </Box>
      
      {/* <AllRoutes/> */}
  
    </>
  );
}

