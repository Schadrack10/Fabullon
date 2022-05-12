import React from "react";
import Grid from "@mui/material/Grid";
import { Box, IconButton, Button, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "#fcc200",
        width: "100%",
        height: "600px",
        mt: 9,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        pt: 5,
        padding: "0 60px",
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={6} sx={{ display: "flex", alignItems: "center",justifyContent:'flex-start'}}>
            <Box sx={{ width: "180px"}}>
            <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    height: "100%",
                    width: "70%",
                    heigh:'100%',
                    alignItems:'center'
                  }}
                >
                  <Typography sx={{ fontSize:'15px',color:'white',mr:2}}>
                    PRODUCTS
                  </Typography>
                  <KeyboardArrowDownIcon fontSize="small" sx={{pb:'5px',color:'white'}} />
                </Box>
            </Box>

            <Link href="/#contact" target="_blank">
              <a>
                <Typography sx={{ fontSize: "15px", ml: 10, color: "white" }}>
                  CONTACT US
                </Typography>
              </a>
            </Link>
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              sx={{
                height: "35px",
                minWidth: "200px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                type="search"
                style={{
                  width: "60%",
                  borderRadius: "20px 0 0 20px",
                  padding: "0 20px",
                  background: "lightgrey",
                  opacity: "0.9",
                  border: "none",
                }}
                placeholder="Search..."
              />

              <Box
                sx={{
                  width: {lg:"39.9%", xs:'50%'},
                  borderRadius: "0 20px 20px 0",
                  background: "lightgrey",
                  display: "flex",
                  justifyContent: "space-around",
                  opacity: "0.9",
                  alignItems: "center",
                  height: "100%",
                  
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    height: "100%",
                    width: "70%",
                    heigh:'100%',
                    alignItems:'center'
                  }}
                >
                  <Typography sx={{ fontSize: {lg: '12px', xs:'10px'}}}>
                    ALL PRODUCTS
                  </Typography>
                  <KeyboardArrowDownIcon fontSize="small" />
                </Box>

                <SearchIcon fontSize="small"/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                ml: 7,
                mb: {  xs: '30px' }
              }}
            >
              <Typography>
                <span style={{ fontSize: "39px", fontWeight: "700" }}>
                  Turning Your
                </span>
                <br />
                <span style={{ fontSize: "25px" }}>Home into paradise</span>
                <br />
                <span>Our products are designed</span>
                <br />
                <span>to bring comfort and beauty</span>
                <br />
                <span>your home</span>
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={7}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img src="./banner7.jpeg" width="80%" height="auto" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          background: "#111",
          // height: {lg:"100px", xs:'130px'},
          display: "flex",
          alignItems: "center",
          padding: {md:"20px 0px", xs:'40px 0 0 0'},
          mt: { xs:'10px' }
        }}
      >
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                pt: 2,
                mb: 2,

              }}
            >
              <Button sx={{ color: "#fff", background: "#71797E !important",mb: { xs:'10px' } }}>
                Featured Products
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // transform: "translate(-8px,0)",
                justifyContent: "flex-end",
                pr: 8,
                height: "100%",
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
  );
};

export default Banner;
