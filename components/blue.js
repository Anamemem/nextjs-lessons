import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Box, Stack, Grid, Divider, Button } from '@mui/material';

const Blue = () => {
    return ( 
      <> 
      <Grid container  className={styles.bg9} sx={{backgroundImage: `url('/Rectangle 327.png')`}}>
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
     
       
      </>
      
     );
}
 
export default Blue;