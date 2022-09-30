import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button, Typography, InputAdornment, Box } from '@mui/material'
import Head  from 'next/head'
import styles from '../styles/Home.module.css'
import MailIcon from '@mui/icons-material/Mail'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import Image from 'next/image';


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


export default function login() {
  return (
    <>
    <Head>
<title>Rippled  | Login</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
    <div>
      <Grid container sx={{ minHeight: '100vh'}} className={styles.text} overFlowY='hidden'>
        <Grid sx={{px:{xs:3,md:9}, py:1, mt:3 }} item container alignContent="center" xs={12} md={6} >
            <Grid item>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}} xs={12} md={6}>
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mt:-8}}>
      <Link href='/'>
    <Image src='/Rectangle 74.png' width={200} height={37}  alt="logo" />
    </Link>
    <Link href='/signup' >
         Do not Have An Account?Sign Up
         </Link>
      </Stack>  
     
      </Stack>
      <Box sx={{mt:3}}>
               <Typography variant="h6" className={styles.title1}  textAlign="flex-end">
                  Welcome Back!
               </Typography>
               <Typography variant="h6" className={styles.texts}  textAlign="flex-end">
                  Please provide your details below to <br /> login to RipplED. Thank You
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
<Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{px:{xs:4,md:5}}}>
    <Stack direction="row" spacing={1} alignItems="flex-start">
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography className={styles.texts}>Remember me</Typography>
      </Stack>  
      <Link href='/forgotpassword'>
         Forgot Password?
         </Link>
</Stack>

      <Link href="/">
      <a className={styles.btn2}>Login</a>
      </Link>

      <Typography className={styles.one1} variant="h7"> or</Typography>
       

      <Link href="/">
      <a className={styles.btn23}><Image src='/icons8-google-48.png' alt="" height={25} width={24}/>LOGIN WITH GOOGLE</a>
      </Link>
      </Box>
            </Grid>

        </Grid>

        <Grid sx={{px:9, py:5, display:{xs:'none', md:'flex'}}} className={styles.sect} item container alignContent="center" direction="column" xs={12} md={6}>
           <Image src='/Group 10712.png' alt="" width={550}  height={450} />
           <a className={styles.btn24}><Image src='/thumbs-up_1f44d 1.png' alt='/' width={20} height={20} />Top Notch Stock Resources</a>

           <Typography variant="h7" className={styles.btn20}>
          Today, we create innovative solutions<br /> to the challenges that consumers face in both their<br /> everyday lives and events.
          </Typography>
            </Grid>
          
      </Grid>
    </div>
    </>
  )
}
