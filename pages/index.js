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
to create a ripple effect <br />
 in your school and community.</h1>
<p className={styles.ts}>We empower high school students ages 10 - 18 to<br />
become innovators and global change agents.</p>

<Stack direction="row" spacing={1}>

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

        <Grid container sx={{px: 2, pt: 10, pb: 10}}>
         <Grid item md={6}>
         <Stack direction="row"
  justifyContent="center"
  alignItems="center"
 >

         <img src='/image 23.png' style={{cursor: 'pointer'}} height={280} width={355} alt='' />
  </Stack>

         </Grid>
         <Grid item md={6} >
         <h3 className={styles.tre}>RipplED supports your learning<br />
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
 
  </Grid>
  <Grid item md={4}>
    
    </Grid>
    <Grid item md={4}>
    
    </Grid>
</Grid>
          </Grid>
        </Grid>
       
       
        <Grid container  className={styles.bg2} sx={{backgroundImage: `url('/Rectangle 327.png')`}}>
    
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

         <img src='/col-md-6.png' style={{cursor: 'pointer'}} height={250} width={370} alt='' />
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
       
        <h1 className={styles.title}>What Our Students Say</h1>
      <Grid container sx={{p: 8}} spacing={-3}>
       
        <Grid item md={4} >
        <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  
  >
      <img  src='/Rectangle 323.png' height={230} width={270}  alt='' />
  </Stack>
      <CardContent style={{backgroundColor: '#', marginTop: "-25%",textAlign: "left"}}>
   <h1  className={styles.yo}>Blessing Akpan</h1>
   <p className={styles.yo2}>Executive director & founder</p>

      </CardContent>
      <Box sx={{pt: 10}}>

<p  className={styles.text}>An enim nullam tempori<br />
donec porta and blandi<br />
integer velna vitae.</p>
    </Box>
        </Grid>
        <Grid item md={4} >
       
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  
  >


      <img  src='/Rectangle 323.png' height={230} width={270}  alt='' />
  </Stack>
      <CardContent style={{backgroundColor: '#', marginTop: "-25%",textAlign: "left"}}>
      <h1  className={styles.yo}>Blessing Akpan</h1>
   <p className={styles.yo2}>Executive director & founder</p>

      </CardContent>
      <Box sx={{pt: 10}}>

<p  className={styles.text}>An enim nullam tempori<br />
donec porta and blandi<br />
integer velna vitae.</p>
    </Box>
           </Grid>
          <Grid item md={4} >
          <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  
  >


      <img  src='/Rectangle 323.png' height={230} width={270} alt='' />
  </Stack>
      <CardContent style={{backgroundColor: '#', marginTop: "-25%",textAlign: "left"}}>
      <h1  className={styles.yo}>Blessing Akpan</h1>
   <p className={styles.yo2}>Executive director & founder</p>

      </CardContent>
      <Box sx={{pt: 10}}>

<p  className={styles.text}>An enim nullam tempori<br />
donec porta and blandi<br />
integer velna vitae.</p>
    </Box>
           </Grid>
      </Grid>
      <Grid container sx={{px: 4, pt: 10}}>
         <Grid item md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

         <img src='/Group 184.png' style={{cursor: 'pointer'}} height={600} width={700} alt='' />
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
              
    </div>
    </>
  )
}
