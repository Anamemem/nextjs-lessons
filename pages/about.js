import Head  from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Box, Stack, Grid, Divider, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';




const About = () => {
    return ( 
        <>
         <Head>
<title>Rippled  | About</title>
<meta name='keywords' content='Rippled' /> 
    </Head>
        <div>
         <Navbar />
        <h1 className={styles.title}>About RipplED</h1>
      <p className={styles.text}>RipplED is an SDGs-target initiative that seeks to raise young social impact agents ages 10- 18<br />
       by providing the guidance and support they need to thrive from the start to the finish. In a<br />
        fast-changing world, every young person must possess the skills to enable them thrive and<br />
         succeed. Young people are full of ideas, 
      and it is pertinent that they have complementary<br />
       skills to help them implement these ideas. </p>
            <button className={styles.btn}>Watch A Video Now</button>

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
        <h1 className={styles.title}>Our Solution Model</h1>
        <p className={styles.text}>
        We use a 3-part model to deliver our solution and<br />
         help the students develop knowledge of STEAM<br />
         and  deliver their SDGs centred projects
        </p>
   
           
            <Grid container spacing={5}  sx={{px: 3, pt: 10}} >
                <Grid item md={4} >
                <Card sx={{ maxWidth: 345, height: 385 }}>
                <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

                  <Image src='/Ellipse 9.png' width={45} height={45} alt=' ' />
                  </Stack>
                <CardContent>

                <h1 className={styles.titles}>Deliver Learning Curriculum</h1>
        <p className={styles.text}>
        The team delivers a learning<br />
         curriculum which would enable the<br /> students to learn about their <br/>
         communities, the world, problems and<br /> the key skills required to solve these<br />
          problems. They also get to identify<br /> their roles and strength while being<br />
           part of a team and how to deliver<br /> their responsibilities effectively. 
        </p>
                </CardContent>
                </Card>
                </Grid>
                <Grid item md={4} >
                <Card sx={{ maxWidth: 345 ,height: 385}}>
                <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>

                  <Image src='/Ellipse 10.png' width={45} height={45} alt=' ' />
                  </Stack>
                <CardContent>
                <h1  align="center" className={styles.titles}>Build A Team</h1>
        <p  align="center" className={styles.text}>
        Participants work with their<br /> teams to brainstorm on a problem<br />
         under any of the Sustainable Goals<br /> and map out which approach their <br />
         solution would take. They also work<br /> with their mentor to bring their<br /> solution to life. 

        </p>
        </CardContent>
        </Card>
                </Grid>
                <Grid item md={4} >
                <Card sx={{ maxWidth: 345 ,height: 385}}>
                <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>
             <Image src='/Ellipse 11.png' width={45} height={45} alt=' ' />
                  </Stack>
                <CardContent>
                <h1 className={styles.titles}>Share Their Innovation</h1>
        <p className={styles.text}>
        We support the students by sharing<br /> their innovation on our platform and<br /> encourage them
         to engage in more skills<br /> development opportunities to ensure<br /> the sustainability of their
          work. We also<br /> induct them into
         the community to<br /> access a network of support, global<br /> opportunities and new challenges.
        </p>
        </CardContent>
        </Card>
                </Grid>
            </Grid>
            <h1  className={styles.title}>RipplED Team</h1>
        <p className={styles.text}>
        A squad of talented members
        </p>
<Grid container spacing={5} sx={{px: 2, pt: 10}}>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{mt: -3}}
  >


      <Image  src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent style={{backgroundColor: '#2A569F'}}>
   <h1  className={styles.titles}>Blessing Akpan</h1>
   <p className={styles.text}>Executive director & founder</p>

      </CardContent>
   </Card>
   </Grid>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{mt: -3}}>


      <Image src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent>
   <h1 className={styles.titles}>Aniekan Edet </h1>
   <p className={styles.text}>Web Developer</p>

      </CardContent>
   </Card>
   </Grid>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{mt: -3}}>


      <Image src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent>
   <h1 className={styles.titles}>Godwin Essang</h1>
   <p className={styles.text}>Curiculum designer</p>

      </CardContent>
   </Card>
   </Grid>
</Grid>
<Grid container spacing={5} sx={{px: 2, pt: 10, pb: 20}}>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{mt: -3}}>


      <Image src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent>
   <h1 className={styles.titles}>Blessing Akpan</h1>
   <p className={styles.text}>Executive director & founder</p>

      </CardContent>
   </Card>
   </Grid>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{mt: -3}}>


      <Image src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent>
   <h1 className={styles.titles}>Aniekan Edet </h1>
   <p className={styles.text}>Web Developer</p>

      </CardContent>
   </Card>
   </Grid>
   <Grid item md={4} >
   <Card style={{backgroundColor: '#2A569F'}} sx={{ maxWidth: 345 }}>
   <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{mt: -3}}>


      <Image src='/at.png' height={330} width={420} alt='' />
  </Stack>
      <CardContent>
   <h1 className={styles.titles}>Godwin Essang</h1>
   <p className={styles.text}>Curiculum designer</p>

      </CardContent>
   </Card>
   </Grid>
</Grid>
<Grid container  className={styles.bg2} sx={{backgroundImage: `url('/Rectangle 327.png')`}}>
    
<Grid item md={6}>
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
 spacing={5}
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
  spacing={2}>

         <Image src='/col-md-6.png' style={{cursor: 'pointer'}} height={250} width={370} alt='' />
  </Stack>

         </Grid>
         <Grid item md={6}>
         <h1 className={styles.t}>Watch Our Students<br /> In Action</h1>
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
          <p>Name</p>
          <input className={styles.in} placeholder='Your Name'></input>

            </Grid>
            <Grid item xs={12} md={6}>
            <p>Subject</p>
            <input className={styles.in} placeholder='choose subject'></input>

  
            </Grid>
            <Grid item xs={12} md={6}>
            <p>Company</p>
            <input className={styles.in} placeholder='text here'></input>

   
            </Grid>
            <Grid item xs={12} md={6}>
            <p>Email</p>

            <input className={styles.in} placeholder='Your email address'></input>

            </Grid>
            <Grid item xs={12} >
               <p>Message</p>
               {/* <textarea className={styles.mes} placeholder='start typing here'></textarea> */}
            </Grid>
            <button className={styles.btnf}>Submit</button>
         </Grid>
            </Grid>
        </Grid>
        <Footer />
                 </div>
        </>
     );
}
 
export default About;    