import React from 'react'
import Head  from 'next/head'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { TextField, Button, Typography, InputAdornment, Box } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function forgotPassword() {
    return ( 
        <>
         <Head>
<title>Rippled  | Forgotten Password</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
        <div>
         <Grid container sx={{ minHeight: '100vh'}} className={styles.text} overflow='hidden'>
            <Grid sx={{px:{xs:3,md:9}, py:1, mt:3 }} item container alignContent="center" xs={12} md={6} >
              <Grid item>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}} xs={12} md={6}>
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mt:{md:-18,xs:-27}}}>
      <Link href='/'>
    <Image src='/Rectangle 74.png' width={200} height={37}  alt="logo" />
    </Link>
    <Link href='/login' >
         Remember Password?Login
         </Link>
      </Stack>  
     
      </Stack>
      <Box sx={{mt:3}}>
               <Typography variant="h6" className={styles.title1}  textAlign="flex-end">
                  Forgot Password?
               </Typography>
               <Typography variant="h6" className={styles.texts}  textAlign="flex-end">
                  Please type your RipplED Email address <br /> below to reset your password. Thank You
               </Typography>
               <TextField
               id="filled-start-adornment"
               label="Email Address"
               name="email-address"
               variant="filled"
               className={styles.field}
               InputProps={{
                startAdornment:
                <InputAdornment position="start">
                <MailIcon />
                </InputAdornment>,
               }}
               />
               </Box>

               <Link href="/passcode">
      <Button className={styles.btn25}>Reset Password</Button>
      </Link>

              </Grid>


            </Grid>
            <Grid sx={{px:9, py:5, display:{xs:'none', md:'flex'}}} className={styles.sect} item container alignContent="center" direction="column" xs={12} md={6}>
           <Image src='/Group 10712.png' alt="" width={550}  height={450} />
            </Grid>

         </Grid>
        </div>
        </>
     );
}

export default forgotPassword;