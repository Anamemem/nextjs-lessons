import React from 'react'
import Head  from 'next/head'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { TextField, Button, Typography, InputAdornment, Box } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


function PassCode() {
    return ( 
     <>
        <Head>
<title>Rippled  | OTP</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
        <div>
         <Grid container sx={{ minHeight: '100vh'}} className={styles.text} overFlowY='hidden'>
            <Grid sx={{px:{xs:3,md:9}, py:1, mt:3 }} item container alignContent="center" xs={12} md={6} >
              <Grid item>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}} xs={12} md={6}>
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mt:-15}}>
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
                  We Sent You A Code!
               </Typography>
               <Typography variant="h6" className={styles.texts}  textAlign="flex-end">
                  Please type the code sent to your Email <br /> within the next 10 minutes
               </Typography>
               <TextField
               id="filled-start-adornment"
               label="Type Code"
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
               <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}}>
                <Link href='/forgotpassword'>
              <p>  did not  Get Code?Resend</p>
         </Link>
         </Stack>
               </Box>

               <Link href="/login">
      <Button className={styles.btn25}>Done</Button>
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

export default passCode;