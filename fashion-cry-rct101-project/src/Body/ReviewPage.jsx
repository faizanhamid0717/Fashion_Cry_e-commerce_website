

import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Cartcontext } from '../context/CartContext';
import { Image, Img,Text } from '@chakra-ui/react';
import { Box } from '@mui/system';


export default function Review() {
  const [address,setAddress]=React.useState([])
  const [pay,setPay]=React.useState([])
  console.log("my address is",address)
   console.log("my payment",pay)

   const Globalstate = React.useContext(Cartcontext);
   const state = Globalstate.state;
   const dispatch = Globalstate.dispatch;
   console.log(Globalstate);

   const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("lll", state); 


const FetchAddress=()=>{
  axios.get(`http://localhost:8080/address`)
  .then((res)=>{
    console.log(res.data)
    setAddress(res.data)
  })
}

const FetchCard=()=>{
  axios.get(`http://localhost:8080/card`)
  .then((res)=>{
    console.log(res.data)
    setPay(res.data)
  })
}



React.useEffect(()=>{
  FetchAddress()
  FetchCard()
},[])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom fontWeight={'700'}>
        Order summary
      </Typography>
      <List disablePadding>
        {state.map((product) => (
          
          // <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
          //   <Img w={'70px'} mr={'10px'} src={product.image}/>
          //   <ListItemText fontWeight={'bold'} fontSize={'10px'} primary={product.title} />
          //   <ListItemText fontWeight={'bold'} primary={product.quantity} />
          //   <Typography variant="body2" fontSize={'20px'} fontWeight={'bold'}>{product.price}</Typography>
          // </ListItem>
          <Box border={'.5px solid gray'} height={'100px'} display="grid " borderRadius={'5px'}
           gridTemplateColumns={'repeat(4,1fr)'} gap={'5px'} mt={'10px'} alignItems={'center'}
           box-shadow={ "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
           >

            <Box><Image  width={'72px'}src={product.image}/></Box>
            <Box fontSize={'13px'} fontWeight={'600'}>Title : {product.title}</Box>
            <Box fontWeight={'700'}> Qty : {product.quantity}</Box>
            <Box fontWeight={'700'}> Price : ₹ {product.price}</Box>

          </Box>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          {/* <Text fontSize={'15px'} fontWeight={'600'}>Total</Text> */}
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}> Total Amount :
          ₹ {total}
          </Typography>
        </ListItem>
      </List>
    
      <Grid container spacing={0}>
    {address?.map((ele)=>
     
     <Grid  xs={12} sm={6}>
       <Typography fontWeight={"bold"} fontSize={'25px'} color={"#4DB6AC"} variant="h6" gutterBottom sx={{ mt: 2 }}>
         Shipping Address
       </Typography>
       <Typography gutterBottom>Name : {ele.firstname}-{ele.lastname}</Typography>
       <Typography gutterBottom>City : {ele.city}</Typography>
       <Typography gutterBottom>Address : {ele.address}</Typography>
       <Typography gutterBottom>Zip : {ele.zip}</Typography>

     </Grid>
    
     )}
     


        <Grid  xs={12} sm={5}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }} fontWeight={"bold"} fontSize={'25px'} color={"#4DB6AC"}>
            Payment details
          </Typography>
          <Grid container>
            {pay?.map((ele) => (
              <React.Fragment key={ele.id}>
                <Grid >
                <Typography gutterBottom>CardName :{ele.cardname}</Typography>
                  <Typography gutterBottom>CardNumber :{ele.cardnumber}</Typography>
                  <Typography gutterBottom> Expiry : {ele.expiry}</Typography>
                </Grid>
                <Grid item xs={6}>
                  
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}