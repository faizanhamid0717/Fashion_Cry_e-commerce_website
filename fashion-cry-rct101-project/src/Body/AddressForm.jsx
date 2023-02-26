


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import {useState} from 'react'
import axios from 'axios'

export default function AddressForm() {
  const [text,setText]=useState({
    firstname:'',
    lastname:'',
    address1:'',
    city:'',
    state:'',
    country:'',
    zip:''
  })

  const handelSubmit=()=>{
    axios.post(`http://localhost:8080/address`,{
      ...text,
    })
    .then((res)=>console.log(res.data))
    
  }

    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom fontWeight={'700'}>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e)=>setText({...text,firstname:e.target.value})}
            value={text.firstname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
             onChange={(e)=>setText({...text,lastname:e.target.value})}
            value={text.lastname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
             onChange={(e)=>setText({...text,address1:e.target.value})}
            value={text.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
             onChange={(e)=>setText({...text,city:e.target.value})}
            value={text.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
             onChange={(e)=>setText({...text,state:e.target.value})}
            value={text.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
             onChange={(e)=>setText({...text,zip:e.target.value})}
            value={text.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
             onChange={(e)=>setText({...text,country:e.target.value})}
            value={text.country}
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
         <Button sx={{ mt: 3, mb: 2 , backgroundColor:'#FBC02D',color:'black' }} onClick={handelSubmit}>Submit</Button>
        </Grid>
        
      </Grid>
      
    </React.Fragment>
    
  );
}