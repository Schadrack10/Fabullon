import React from 'react'
import Grid from "@mui/material/Grid";
import { Box, IconButton, Button, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";


const Banner = () => {
  return (
    <Box sx={{background:'#fcc200',width:'100%',height:'500px',mt:9,display:'flex',justifyContent:'space-between',flexDirection:'column',pl:10,pr:10}}>
        <Box sx={{border:'1px solid black'}}>
        <Grid container spacing={2} columns={12}>
            <Grid xs={12} md={6}>
                
            </Grid>
            <Grid xs={12} md={6}>

            </Grid>
            </Grid>
        </Box>


        <Box sx={{border:'1px solid black'}}>
        <Grid container spacing={2} columns={12}>
            <Grid xs={12} md={6}>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'100%',alignItems:'center'}}>
                    <Typography>Turning Your</Typography>
                    <Typography>Home into</Typography>
                    <Typography>Our products are designed</Typography>
                    <Typography>to bring comfort and beauty</Typography>
                    <Typography>your home</Typography>
                </Box>
            </Grid>
            <Grid xs={12} md={6}>

            </Grid>
            </Grid>
        </Box>



        <Box sx={{background:'#111', height:'100px',display:'flex',alignItems:'center',padding:'20px 0'}}>
        <Grid container spacing={2} columns={12} >
            <Grid xs={12} md={6}> 
                <Box sx={{height:'100%',display:'flex',justifyContent:'center',pt:2,mb:2}}>
                    <Button sx={{color:'#fff',background:'#71797E !important'}}>Featured Products</Button>
                </Box>
            </Grid>


            <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // transform: "translate(-8px,0)",
                justifyContent:'flex-end',
                pr:8,
                height:'100%'
              }}
            >
              

              <Link href="https://www.facebook.com/ActiveMediaIndustries/">
                <a target="_blank">
                  <IconButton sx={{ color: "#fff" }}>
                    <FacebookRoundedIcon />
                  </IconButton>
                </a>
              </Link>

              <Link href="https://www.facebook.com/ActiveMediaIndustries/">
                <a target="_blank">
                  <IconButton sx={{ color: "#fff" }}>
                    <TwitterIcon />
                  </IconButton>
                </a>
              </Link>

              <Link href="https://instagram.com/active_media_industries?utm_medium=copy_link">
                <a target="_blank">
                  <IconButton sx={{ color: "#fff" }}>
                    <InstagramIcon />
                  </IconButton>
                </a>
              </Link>
            </Box>
          
            </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Banner