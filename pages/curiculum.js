import Head  from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
 import Footer from "../components/Footer";
 import Navbar from "../components/Navbar";
import { Grid, Stack, Box,Divider } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import CardMedia from '@mui/material/CardMedia';


import IconButton from '@mui/material/IconButton';

 
import styles from '../styles/Home.module.css'

const card = (
  <Grid>

  </Grid>
);


export default function Project() {

  return (
    <>
    <Head>
<title> Rippled | Home</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
    <div>
      <Navbar />
      <Grid container sx={{px: 6}}>
        <Grid item md={6}>
          <h1 className={styles.t}>RipplED curriculum is designed to<br />
help empower the prestigious<br />
African child grow and glow.</h1>
<p className={styles.ts}>We empower high school students ages 10 - 18 to<br />
become innovators and global change agents.</p>

<Stack direction="row" spacing={1}>

<p >Want to upload your project? </p> <button className={styles.btn}>Upload A Project </button>
</Stack>
        </Grid>
        <Grid item md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>

        <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  >


      <Image src='/c.png' height={430} width={420} alt='' />
  </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/Rectangle 1.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Create a plan, build your team and find a trainer!
          </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
      
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/Rectangle 2.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Emotional Intelligence
          </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
       
         
        
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/Rectangle 2.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
         <h3  className={styles.gol}>
        
         Design Thinking
            </h3>
          
        
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
      
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/Rectangle 2.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Storytelling
          </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
       
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/Rectangle 1.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Leadership
          </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
       
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/day3.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Collaboration
          </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
         
          </IconButton>
          <IconButton aria-label="play/pause">
          
          </IconButton>
         
        </Box>
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
      <Grid container sx={{px: 5,pt: 2,pb: 2}}>
        <Grid item xs={12}>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image="/day3.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h3  className={styles.gol}>
        
        Global Citizenship
            </h3>
          <Typography  component="div">
            <button className={styles.gd}>Get Started</button>
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
     
        </Grid>
      </Grid>
      
        <Grid container  className={styles.bg2} sx={{backgroundImage: `url('/bg.png')`}}>
    
    <Grid item md={6} >
    <h1 className={styles.pa}>You Can Become A <br />Rippled Sponsor or<br /> Partner </h1>
    </Grid>
    <Grid item md={6}>
    <p className={styles.wad}>Our students are reaching communities<br />
    with their solutions and we need your<br />
    help to enable them scale their impact.</p>
    <Stack 
     direction="row"
     justifyContent="center"
     alignItems="center"
     spacing={1}
     >
       
       <button className={styles.btnf}>Sponsor</button>
       
       <button className={styles.btnf}>Partner</button>
    </Stack>
    </Grid>
                
            </Grid>
            <Grid container sx={{px: 2, pt: 10}}>
         <Grid item md={6}>
         <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  >

         <Image src='/col-md-6.png' style={{cursor: 'pointer'}} height={250} width={370} alt='' />
  </Stack>

         </Grid>
         <Grid item md={6}>
         <h1 className={styles.tre}>Watch Our Students<br /> In Action</h1>
<p className={styles.ta}>From acting for Quality Education, to advocating for<br />
Gender Equality to  Championing climate causes, our<br />
students are working towards the actualization of<br />
the SDGs by 2030</p>
<h5 style={{color: '#0071B8', cursor:'pointer'}}>Learn More </h5>
         </Grid>
        </Grid>
       
       

      <Grid container sx={{px: 4, pt: 10}}>
         <Grid item md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

         <Image src='/Group 184.png' style={{cursor: 'pointer'}} height={600} width={700} alt='' />
  </Stack>

         </Grid>
         <Grid item md={6} sx={{pt: -5}}>
            <h1>Get In Touch With Us</h1>
            <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
          <p style={{padding: 10}}>Name</p>
          <input className={styles.in} placeholder='Your Name'></input>

            </Grid>
            <Grid item xs={12} md={6}>
            <p style={{padding: 10}}>Subject</p>
            <input className={styles.in} placeholder='choose subject'></input>

  
            </Grid>
            <Grid item xs={12} md={6}>
            <p style={{padding: 10}}>Company</p>
            <input className={styles.in} placeholder='text here'></input>

   
            </Grid>
            <Grid item xs={12} md={6}>
            <p style={{padding: 10}}>Email</p>

            <input className={styles.in} placeholder='Your email address'></input>

            </Grid>
            <Grid item xs={12} >
               <p style={{padding: 10}}>Message</p>
               <textarea className={styles.mes} placeholder='start typing here'></textarea>
            </Grid>
            <button className={styles.btnf}>Submit</button>
         </Grid>
            </Grid>
        </Grid>
              <Footer />
    </div>
    </>
  )
}
