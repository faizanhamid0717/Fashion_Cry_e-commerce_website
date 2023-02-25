

import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];



export default function Review() {
  const [address,setAddress]=React.useState([])
  const [pay,setPay]=React.useState([])
  console.log("my address is",address)
   console.log("my payment",pay)


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
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    
      <Grid container spacing={0}>
    {address?.map((ele)=>
     
     <Grid  xs={12} sm={6}>
       <Typography fontWeight={"bold"} fontSize={'25px'} color={"#F5B041"} variant="h6" gutterBottom sx={{ mt: 2 }}>
         Shipping Address
       </Typography>
       <Typography gutterBottom>Name : {ele.firstname}-{ele.lastname}</Typography>
       <Typography gutterBottom>City : {ele.city}</Typography>
       <Typography gutterBottom>Address : {ele.address}</Typography>
       <Typography gutterBottom>Zip : {ele.zip}</Typography>

     </Grid>
    
     )}
     


        <Grid  xs={12} sm={5}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }} fontWeight={"bold"} fontSize={'25px'} color={"#F5B041"}>
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