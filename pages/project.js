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

 
import styles from '../styles/Home.module.css'

const card = (
  <Grid>
<Card sx={{ maxWidth: 245,height: 345 }}>
      <CardMedia
        component="img"
        height="125"
        width="200"
        image="/image 6.png/"
        alt=""
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "12px", color: "#2A569F", margin: "10px"}}>
        No Poverty
        </Typography>
        <Typography variant="body3" style={{ fontSize: "12px", color: "#2A569F", margin: "10px"}}>
          30th June 2022
        </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
         Masters in English | How To Speak English | How To Become A Good English Speaker |  
         How To Become A Good English Speaker | How To Become A Good English Speaker
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
      <Stack direction="row" justifyContent="space-between" >
        <PeopleIcon />223
        latest
        <Button     size="small">View</Button>
        </Stack>
      </CardActions>
    </Card>
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
          <h1 className={styles.t}>You can view our various project<br />
categories that enables the<br />
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


      <Image src='/p.png' height={430} width={420} alt='' />
  </Stack>
        </Grid>
      </Grid>
      <Grid container  className={styles.bg} sx={{backgroundImage: `url('/bd.png')`}}>
     <Grid item md={3} xs={6} className={styles.ones}>
        <h1>200</h1>
        <p>students</p>
     </Grid>
     <Grid tem md={3} xs={6} className={styles.one}>
        <h1>50</h1>
        <p>Projects</p>
     </Grid>
     <Grid item md={3} xs={6} className={styles.one}>
        <h1>$5k</h1>
        <p>Projects</p>
     </Grid>
     <Grid item md={3} xs={6} className={styles.one}>
        <h1>8K</h1>
        <p>Children & adults</p>
     </Grid>
      

            
        </Grid>

<h2 className={styles.to}>View Our Project Categories</h2>
        <Grid container sx={{px: 5}}>
          <Grid item md={3}>
            <h3 className={styles.sdg}>ALL SDGS</h3>
            <p className={styles.kin}>No poverty </p>
            <p className={styles.kin}>Zero hunger</p>
            <p className={styles.kin}>Good health & well-being</p>
            <p className={styles.kin}>Quality Education</p>
            <p className={styles.kin}>Genger Equality</p>
            <p className={styles.kin}>Affordable & clean energy</p>
          </Grid>
          <Grid item md={8}>
<Grid container spacing={3}>
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
          </Grid>
        </Grid>
</Grid>
<Grid container sx={{px: 5, pt:-4,pb: 5}}>
          <Grid item md={3} sx={{pt: 20,}}>
          <button  className={styles.btn9}>Upload A Project </button>
          </Grid>
          <Grid item md={8}>
<Grid container >
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
  <Grid item md={4} xs={12}>
  {card}
  </Grid>
          </Grid>
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
