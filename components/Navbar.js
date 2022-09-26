import Link from 'next/link'
import Image from 'next/image';
import  { Grid, Stack }  from '@mui/material'
import styles from '../styles/Home.module.css'



const Navbar = () => {
    return (
        <>
          
            <Grid container >
                <Grid item xs={4} sx={{px: 7}} >
               
                    <Image src='/Rectangle 74.png' width={200} height={37}  alt="logo" />
             

                </Grid>
                <Grid Item md={1}z>
                <Link href="/">Home</Link>

                </Grid>
                <Grid Item md={1}z>
                <Link href="/about">About</Link>
                </Grid>
                <Grid Item md={1}z>
                <Link href="/">Curiculum </Link>
                </Grid>
               <Grid Item md={1}z>
                <Link href="/">Projects </Link>
               </Grid>
               <Grid Item md={1}z>
                <Link href="/">FAQS </Link>
                </Grid>
                <Grid Item xs={2}>
                    
<Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  spacing={2}
>
    <Link href="/login">
<button className={styles.btns}>
    Login
</button>
    </Link>
</Stack>
                </Grid>
            </Grid>
           
        </>
     );
}
 
export default Navbar;