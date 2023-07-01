
import { FiShoppingCart } from 'react-icons/fi';
import { Search2Icon,ArrowForwardIcon } from '@chakra-ui/icons'
import { ReactNode, useContext, useState } from 'react';
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
import { Link, Navigate } from "react-router-dom";
import { Cartcontext } from '../context/CartContext';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { loginWithRedirect,isAuthenticated,user } = useAuth0();
  const { logout } = useAuth0()

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("lll", state); 
 
  const cartItemCount = state.reduce((count, item) => count + item.quantity,0);

  return (
    <>
    <Menu>
      <Box  px={4} bg={'white'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'} width={1100} margin={'auto'} height='80px'>

          <Link to="/"> 
         <Image width="370px" height="80px" src={cry}/>
         </Link>

         <InputGroup>     
         <Image height="55px"  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg"/>
       </InputGroup> 
 
{/* *****************************Download*************************************** */}
          <Menu>
  <MenuButton fontWeight={'900'} ml={"25px"} color={'gray.900'}>
    Download App
  </MenuButton>
  <MenuList>
    <MenuItem >Download From</MenuItem>
    {/* <MenuItem>Create a Copy</MenuItem> */}
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/playstore-icon-big.webp"/></MenuItem>
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/appstore-icon-big.webp"/></MenuItem>
  </MenuList>
</Menu>
{/* ******************************************************************************* */}

   { isAuthenticated ? (
     <Box ml={"10px"} ><Button  bg={'white'} color={'gray.900'} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </Button></Box>
   ) :(
    <Box ><Button  bg={'white'} color={'gray.900'}  onClick={() => loginWithRedirect()}>Log In</Button></Box>
   )}
       

          <Flex alignItems={'center'}>

            <Link to="/adminpage">
            <Button mr={'15px'} bg={'white'} color={'gray.900'}>Admin</Button>
            </Link>


            <Stack direction={'row'} spacing={7} >
              <Button onClick={toggleColorMode}  bg={'#A2D9CE '}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                
              </Button>

              <Menu>
                {/* <MenuButton */}
                  {/* as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}> */}
                  <Box
                  mr={"10px"} bg={'white'} color={'gray.900'} fontSize={'13px'} fontWeight={'600'}  width={'100px'}><Text> 
                     <Avatar
                      size={'sm'}
                      iconLabel={'Profile'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />  
                    <p >{isAuthenticated && <p >{user.name}</p>}</p> </Text></Box>

                {/* </MenuButton>
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
                 
                </MenuList> */}

                <Box
                label="Add to cart"
        
                width={'100px'}
                placement={'top'}
                // color={'gray.500'}
                fontSize={'1.3em'}
                color={'red'}
                fontWeight={'500'}
                >
                
                
                  <Link to="/cart">
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} bg={'white'} color={'gray.900'} />{cartItemCount}
                 
                  </Link>
                   
              </Box>  
              
              </Menu>
              
            </Stack> 
          </Flex>
        </Flex>
      </Box>
  </Menu>
{/* <br/> */}
      {/* **************************************Drop down nave****************************** */}
     <Divider mt={"5px"} border={"0.1px solid #F5B041 "}/>

      <Box bg={'white'} px={4} h={12}>
      
  <Link to="/products"> 
  <Button  color='gray.800' bg={'white'}>
    ALL NEW 
  </Button>
  </Link>
  
<Menu>
    <MenuButton as={Button}  color='gray.800' bg={'white'}>
   | Women Ethnic 
    </MenuButton>
  <MenuList >
    <MenuItem color={"#F39C12"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"#F39C12"}>Kurtis</MenuItem>
    <MenuItem>All Kurtis </MenuItem>
    <MenuItem>Rayon Kurtis </MenuItem>
    <MenuItem>Cotton Kurtis</MenuItem>
    
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}  color={'gray.800'} bg={'white'}>
 |  Women Western
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Topwear</MenuItem>
    <MenuItem>Tops</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F39C12"}>Bottemwear</MenuItem>
    <MenuItem>Jeans</MenuItem>
    <MenuItem>Shorts</MenuItem>
    <MenuItem>Skirts</MenuItem>
    <MenuItem color={"#F39C12"}>Sleepwear</MenuItem>
    <MenuItem>Babbydolls</MenuItem>
    <MenuItem>Nightsuits</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}   color='gray.800' bg={'white'}>
   | Mens
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Topwear</MenuItem>
    <MenuItem>Tshirts</MenuItem>
    <MenuItem>Shirts</MenuItem>
    <MenuItem color={"#F39C12"}>Bottomwear</MenuItem>
    <MenuItem>Track Pants</MenuItem>
    <MenuItem>Trousers</MenuItem>
    <MenuItem>Jeans</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button}  color={'gray.800'} bg={'white'}>
 |  Kids
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Boys & Girls 2+ Years</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F39C12"}>Infant 0-2 Years</MenuItem>
    <MenuItem >Rompers</MenuItem>
    <MenuItem color={"#F39C12"}>Babby Care</MenuItem>
    <MenuItem >All Baby Care</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
 |   Home & Kitchen
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Home Decor</MenuItem>
    <MenuItem>Stickers</MenuItem>
    <MenuItem>Clocks</MenuItem>
    <MenuItem color={"#F39C12"}>Kitchen & Dining</MenuItem>
    <MenuItem>Kitchen storage</MenuItem>
    <MenuItem>Cookware & Bakewear</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
  |  Beautiful & Health
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Make Up</MenuItem>
    <MenuItem>Face</MenuItem>
    <MenuItem>Eyes</MenuItem>
    <MenuItem>Lips</MenuItem>
    <MenuItem color={"#F39C12"}>Wellness</MenuItem>
    <MenuItem>Oralcare</MenuItem>
    <MenuItem>Sanitizers</MenuItem>
    <MenuItem color={"#F39C12"}>Skincare</MenuItem>
    <MenuItem>Deadorants</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} color={'gray.800'} bg={'white'}>
  |  Bag & Footwear 
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F39C12"}>Women Bags</MenuItem>
    <MenuItem>Handbags</MenuItem>
    <MenuItem>Slingbags</MenuItem>
    <MenuItem color={"#F39C12"}>Men Bags</MenuItem>
    <MenuItem>All Men Bags</MenuItem>
    <MenuItem color={"#F39C12"}>Men Footwear</MenuItem>
    <MenuItem >Sports Shoes</MenuItem>
    <MenuItem >Formal shoes</MenuItem>
    <MenuItem color={"#F39C12"}>Women Footwear</MenuItem>
    <MenuItem>Flats</MenuItem>
    <MenuItem>Juttis</MenuItem>
  </MenuList>
</Menu> 



<Divider border={"0.5px solid gray"}/>

      </Box>
      
  
    </>
  );
}

