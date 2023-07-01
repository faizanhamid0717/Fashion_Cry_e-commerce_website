import { Box ,Flex,Spacer,Image, Heading,Text,useColorModeValue, Button,Divider,Icon} from '@chakra-ui/react'
import  Fotter  from './FotterPage'
import React from 'react'
import { Products } from './ProductPage'

import VideoSlider from './VideoSlider'
import VideoSl from './VideoSl'



export const HomePage= () => {
  return (
    <div>
      
       <Text mt={'20px'} fontSize={"5xl"}>#EXPRESSYOU</Text>

       <Image width="1270px" src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/02-february/0215-digital-23919-hp-6pm/-dt/jeans-dt.jpg"/> 
       {/* <Image width="600px" src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/02-february/0215-digital-23919-hp-6pm/-dt/jeans-dt.jpg"/> */}
    
       <Image h={"100px"}src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-header.jpg"/>
   <VideoSlider/>
   

   <Box display={"flex"} ml={"10px"} mb={'100px'}>
<Image w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-jewellery.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-sarees.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-men.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-handbags.jpg'/>
</Box>


    <VideoSl />
  <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-scratchcard-GIF.gif"/>
<Flex alignItems={'center'}  width={800} margin={'auto'} mt={50}>

<Box w={700} h={480} p={35}  borderRadius={"10px"} textAlign={[ 'left']} bg={useColorModeValue('gray.50', 'gray.800')} >
  <Heading fontSize={"5xl"}>Lowest Prices
    Best Quality Shopping
  </Heading>

  <br/>

<Box  >
  <Box w={200} bg={useColorModeValue('gray.50', 'gray.800')} >
  <Image width={30} src="https://images.meesho.com/images/pow/cod.svg"/>
   <Text>Cash On Delivery</Text>
   <hr/>
  <Image width={30} src="https://images.meesho.com/images/pow/easyReturns.svg"/>
  <Text >Easy Return</Text>
  </Box> 
</Box>
<br/>
<Button bg={'#F5B041'} w={"350px"} h={"50px"} color={"white"} fontFamily={"Cursive"} fontSize={"xl"}>Download The FASHION CRY App</Button>
 </Box>
 
  <Spacer />

  <Box >
  <Image w={500} h={250}src="https://images.meesho.com/images/marketing/1631722939962.webp"/>
 
  </Box>
  
  
</Flex>

<br/>
<br/>

<Box display={"flex"} ml={"280px"}>

<Divider pt={10} borderTop={0} borderColor={"red"}w={100}/>
<Box w={500}   > <Heading >Top Categories to choose from </Heading></Box>
<Divider pt={10} borderTop={0} borderColor={"red"} w={100}/>

</Box>


<br/>
<br/>
<br/>

<Box ml={"240px"}  h={550} w={800} p={"30px"} 
bgImage="https://thumbs.dreamstime.com/b/design-template-marble-texture-gold-geometric-frame-abstract-golden-background-set-vector-elegant-black-brochure-141784390.jpg"
>
<Heading pl={"200px"} fontSize={"6xl"} fontFamily={"Cursive"} color={"#F5B041 "}>Fashion Store</Heading>

<Box display={"flex"} gap={"15px"} >
<Box  h={280} w={250}>
    <Image h={"280px"} src="https://images.meesho.com/images/marketing/1649760442043.webp"/>
</Box>
    
    <Box  h={250} w={250} mt={"70px"}>
        <Image h={250} src="https://images.meesho.com/images/marketing/1649760423313.webp"/>
    </Box>
    <Box  h={250} w={250} mt={"70px"}>
        <Image h={250} src="https://images.meesho.com/images/marketing/1649759799809.webp"/>
    </Box>
</Box>
    
</Box>
<br/>
<br/>

<Box ml={"240px"}  h={380} w={800} 
  bgImage="https://images.meesho.com/images/pow/downloadBannerDesktop.webp"
  bgSize={"800px"}
>
  <Box  ml={"150px"} p={"20px"} pt={"130px"} h={450} w={650} fontSize={"5xl"} textAlign={"right"} color={"#F5B041"}> 
  Start your Online Business with Zero Investment

<Box display={"flex"} gap={"40px"}  pt={"40px"} pl={"170px"} >
  <Image width ="200px" src="https://images.meesho.com/images/pow/playstore-icon-big.webp"/>
  <Image width ="200px" src="https://images.meesho.com/images/pow/appstore-icon-big.webp"/>
</Box>

  </Box>
</Box>

<br/>
<br/>

<Box ml={"240px"}  h={230} w={800}
bgImage="https://images.meesho.com/images/pow/supplyBannerDesktop.webp"
bgSize={"790px"}
>

    <Box h={150} w={600} color={"white"} pt={"40px"} >
        <Heading fontSize={'30px'} >Register as a FASHION CRY Supplier</Heading>
        <br/>
        <Text pr={"116px"}>Sell your products to crores of customers at 0% commission</Text>
    <Box  display={"flex"} gap={"50px"} pt={"15px"}>
    <br/>
   
    <Box h={"40px"} w={"250px"} pt={"6px"} border={"0.5px solid #F43397"} borderRadius={"10px"}>Grow Your Business 10x</Box>
    <Box h={"40px"} w={"180px"} pt={"6px"} border={"0.5px solid #F43397"} borderRadius={"10px"}>Enjoy 100% Profit</Box>
    <Box h={"40px"} w={"180px"} pt={"6px"} border={"0.5px solid #F43397"} borderRadius={"10px"}>Sell All Over India</Box>
    </Box>
       
    </Box>
</Box>
<br/>
<br/>

<Box display={"flex"} ml={"10px"}>
<Image w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-trends.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-indie.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-home.jpg'/>
<Image  w={"310px"} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-sneakerhood.jpg'/>
</Box>
 
 
{/* ******************************Fotter****************************** */}
  <br/>
  <br/>
    <Fotter/>

    </div>
  )
}
