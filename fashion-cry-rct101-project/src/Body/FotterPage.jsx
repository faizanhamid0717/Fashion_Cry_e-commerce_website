

import { ReactNode } from 'react';
import { Divider, Button, Center } from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaApple,
  FaGooglePlay,
  FaMicrosoft,
} from "react-icons/fa";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  
} from '@chakra-ui/react';
import cry from "../components/images/cry.jpg"
import { NavLink } from 'react-router-dom';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Fotter() {
  return (
    
    <Box
     bgColor={"#B2DFDB"}
     borderTop={'1px solid black'} borderBottom={'1px solid black'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
           
              
              <Image width="250px" height="150px" src={cry}/>

            </Box>
            <Text fontSize={'sm'}>
              © Trusted by more than 1 Crore Indians
Cash on Delivery | Free Delivery
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'} >Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            
            <Button color={"blue"} label={"Twitter"} href={"#"} size="xs">
                <FaTwitter />
            </Button>
          
            <Button color={"red"} label={"YouTube"} href={"#"} size="xs">
                <FaYoutube />
              </Button>

              <Button color={"red"} label={"Instagram"} href={"#"} size="xs">
                <FaInstagram />
              </Button>

              <Button color={"blue"} label={"linkedin"} href={"#"} size="xs">
                <FaLinkedin />
              </Button>

              <Button color={"blue"} label={"Google"} href={"#"} size="xs">
                <FaGoogle />
              </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
