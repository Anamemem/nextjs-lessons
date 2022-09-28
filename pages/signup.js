import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button, Typography, InputAdornment } from '@mui/material'
import Head  from 'next/head'
import styles from '../styles/Home.module.css'
import MailIcon from '@mui/icons-material/Mail'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Image from 'next/image';
import MenuItem from '@mui/material/MenuItem';


export default function signup() {

   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
      <>
      <Head>
  <title>Rippled  | Signup</title>
  <meta name='keywords' content='Rippled' /> 
      </Head>
     <div>
     <Grid container sx={{ minHeight: '105vh'}} className={styles.text} overFlowY='hidden'>
        <Grid sx={{px:{xs:3,md:9}, py:1 }} item container alignContent="center" xs={12} md={6} >
            <Grid item>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}} xs={12} md={6}>
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Link href='/'>
    <Image src='/Rectangle 74.png' width={200} height={37}  alt="logo" />
    </Link>
      </Stack>  
      <Link href='/login'>
         Already Have An Account?Sign In
         </Link>
      </Stack>
               <Typography variant="h6" className={styles.title1}  textAlign="flex-end">
                  Get Started With RipplED
               </Typography>
               <TextField
               id="filled-start-adornment"
               label="Full Name"
               name="email-address"
               variant="filled"
               className={styles.field}
               InputProps={{
                startAdornment:
                <InputAdornment position="start">
                
                </InputAdornment>,
               }}
               />
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
               <TextField
               id="filled-full-width standard-adornment-password"
               label="Password"
               name="password"
               fullWidth
               variant="filled"
               className={styles.field}
               InputProps={{
                endAdornment:
                <InputAdornment position="end">
                <Button sx={{color:'#B8B8B8'}}><VisibilityOffIcon /></Button>
                </InputAdornment>,
               }}
               />

<TextField
          id="filled-select-currency"
          select
          label="Sign Up as"
          value={age}
          fullWidth
          className={styles.field}
          onChange={handleChange}
          variant="filled"
        >
         
            <MenuItem value={10}>
              Tutor
            </MenuItem>
            <MenuItem value={20}>
              Student
            </MenuItem>
        
        </TextField>

               <Typography variant="h5" className={styles.textss}  textAlign="flex-end">
                  By continuing you indicate that you read and agreed to the Terms of Use.
               </Typography>
      <Link href="/">
      <a className={styles.btn2}>Sign Up</a>
      </Link>

      <Typography className={styles.one1} variant="h7">or</Typography>
       

      <Link href="/">
      <a className={styles.btn23}><Image src='/icons8-google-48.png' alt="" height={25} width={24} marginTop="10px"/>SIGN UP WITH GOOGLE</a>
      </Link>
            </Grid>

        </Grid>

        <Grid sx={{px:9, py:5, display:{xs:'none', md:'flex'}}} className={styles.sect} item container alignContent="center" direction="column" xs={12} md={6}>
           <img src='/Group 10713.png' alt="" width={550}  height={450} />
           <a className={styles.btn24} sx={{py:2}}><img src='/Vector.png' alt='/' width={20} height={20} sx={{mt:5}} />Top Notch Stock Resources</a>

           <Typography variant="h7" className={styles.btn20}>
          Today, we create innovative solutions<br /> to the challenges that consumers face in both their<br /> everyday lives and events.
          </Typography>
            </Grid>
          
      </Grid>
     </div>


      </>

      )

      }