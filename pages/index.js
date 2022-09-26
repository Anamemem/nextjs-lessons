import Head  from 'next/head'
import Link from 'next/link'
import { Grid, Stack, Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 
import styles from '../styles/Home.module.css'



export default function Home() {

  return (
    <>
    <Head>
<title> Rippled | Home</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
    <div>
      <Grid container sx={{px: 6}}>
        <Grid item md={6}>
          <h1 className={styles.t}>Receive the support you need
to create a ripple effect in<br />
your school and community.</h1>
<p className={styles.ts}>We empower high school students ages 10 - 18 to<br />
become innovators and global change agents.</p>

<Stack direction="row" spacing={2}>

<p >Want to Join Our Community? </p> <button className={styles.btn}>Learn How It Works </button>
</Stack>
        </Grid>
        <Grid item md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>

        <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  >


      <img src='/union.png' height={430} width={420} alt='' />
  </Stack>
        </Grid>
      </Grid>
      <Grid container  className={styles.bg} sx={{backgroundImage: `url('/Rectangle 327.png')`}}>
     <Grid item xs={3} className={styles.ones}>
        <h1>200</h1>
        <p>students</p>
     </Grid>
     <Grid tem xs={3} className={styles.one}>
        <h1>50</h1>
        <p>Projects</p>
     </Grid>
     <Grid item xs={3} className={styles.one}>
        <h1>$5k</h1>
        <p>Projects</p>
     </Grid>
     <Grid item xs={3} className={styles.one}>
        <h1>8K</h1>
        <p>Children & adults</p>
     </Grid>
      

            
        </Grid>

        <Grid container sx={{px: 2, pt: 10, pb: 10}}>
         <Grid item md={6}>
         <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

         <img src='/image 23.png' style={{cursor: 'pointer'}} height={250} width={370} alt='' />
  </Stack>

         </Grid>
         <Grid item md={6} >
         <h3>RipplED supports your learning<br />
and social impact Activities</h3>
<p className={styles.ta}>Through its online platform, RipplED offer<br />
students in Secondary Schools the opportunity<br />
to access skill development opportunities,<br />
mentorship and tailored curriculum to enable<br />
them learn and accelerate their activities<br />
and become global change makers.</p>
<button className={styles.btnf}>Join Our Community </button>
         </Grid>
        </Grid>

        <Grid container sx={{px: 5}}>
          <Grid item md={4} className={styles.hi}>
            <h3>ALL SDGS</h3>
            <p>No poverty </p>
            <p>Zero hunger</p>
            <p>Good health & well-being</p>
            <p>Quality Education</p>
            <p>Genger Equality</p>
            <p>Affordable & clean energy</p>
          </Grid>
          <Grid item md={8}>
<Grid container >
  <Grid item md={4}>
  <Card sx={{ maxWidth: 345 }}>
  <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

         <img src='/image 6.png' style={{cursor: 'pointer'}} height={150} width={370} alt='' />
  </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Masters In English | How To English | How Toiik
Become A Good English Speaker how to inno
Become A Good English Speaker how towklljk
Become A Good English Speaker how to,
        </Typography>
      </CardContent>
    
    </Card>

  </Grid>
  <Grid item md={4}>
    
    </Grid>
    <Grid item md={4}>
    
    </Grid>
</Grid>
          </Grid>
        </Grid>
       
       
      
     
      
      
    </div>
    </>
  )
}
