import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AddBoxTwoTone } from "@mui/icons-material";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 2,
    marginTop: theme.spacing(1),
    minWidth: '97%',

    // color:
    //   theme.palette.mode === "light"
    //     ? "rgb(55, 65, 81)"
    //     : theme.palette.grey[300],
    // boxShadow:
    // "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));





const Banner = () => {

  // 
  const [content, setContent] = useState([
    {
      id: 1,
      name: 'Procucts of your choice',
      price: 'Display Price',
      description: 'Affordable and Durabale',
      color:'Colour Available'
    },
  ])


  const changeContent = (product) => {

  if(product == 'chair'){
    setContent([{
      id: 1,
      name: 'Chairs',
      price: '$11.99',
      description: 'Affordable and Durabale chairs Available',
      color:'All color available'

    }])
  }
    if(product == 'table'){
    setContent([{
      id: 1,
      name: 'Table',
      price: '$20.99',
      description: 'Affordable and Durabale Table Available',
      color:'All color available'
    }])
   }
   if(product == 'cupboard'){
    setContent([{
      id: 1,
      name: 'CupBoard',
      price: '$20.99',
      description: 'Affordable and Durabale cupboard Available',
      color:'Black and white',
      
    }])
   }
   if(product == 'bed'){
    setContent([{
      id: 1,
      name: 'Bed',
      price: '$147.99',
      description: 'Comfortable and Durabale Bed Available',
      color:'Black and white',
      
    }])
   }
 
  }



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        background: "#f9b33a",
        width: "100%",
        minHeight: '70vh',
        mt: 8.7,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        // pt: 3, 
        padding: {
          md: '0 70px 40px 70px',
          sm: '0',
          xs: "0"
        },
        position: "relative",
        pb: 3,
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2} columns={12}>
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              // pl:1,
              // justifyContent: "space-between",
              padding: '0 70px',
            }}
          >
            <Box sx={{ width: "180px" }}>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: "white" }}
              >
                Products
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{}}
              >
                <Box sx={{ height: '500px', background: '', display: 'flex' }}>

                  <Box sx={{ width: '20%', height: '100%', border: '3px solid #f9b33a' }}>
                    <MenuItem onClick={()=>changeContent('chair')} disableRipple>
                      <h3>Chair</h3>
                    </MenuItem>
                    <MenuItem onClick={()=>changeContent('table')} disableRipple>
                      <h3>Table</h3>
                    </MenuItem>
                    <MenuItem onClick={()=>changeContent('cupboard')} disableRipple>
                      <h3>Cupboard</h3>
                    </MenuItem>
                    <MenuItem onClick={()=>changeContent('bed')} disableRipple>
                      <h3>Bed</h3>
                    </MenuItem>
                  </Box>
                  <Box sx={{ width: '80%', height: '100%', border: '3px solid #f9b33a', padding: "10px" }}>
                    {content.map(item => (
                      <Box>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>{item.color}</p>
                        <p>{item.price}</p>
                      </Box>
                    ))}
                  </Box>
                </Box>

              </StyledMenu>
            </Box>

            <Link href="/#contact" target="_blank">
              <a>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "black",
                    width: "100px",
                    color: "white",
                  }}
                >
                  CONTACT US
                </Typography>
              </a>
            </Link>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{ width: "120px", display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: '0 25px' }}
          >
            <Box
              sx={{
                height: "35px",

                width: {
                  lg: "100%",
                  xs: "100%",
                  md: '100%',

                },
                borderRadius: "20px",
                display: "flex",
                margin: {
                  xs: "20px",
                  md: "20px",
                },
              }}
            >
              <input
                type="search"
                style={{
                  width: "80%",
                  borderRadius: "20px 0 0 20px",
                  padding: "0 25px",
                  background: "lightgrey",
                  opacity: "0.9",
                  border: "none",
                  objectFit: 'cover'
                }}
                placeholder="Search..."
              />

              <Box
                sx={{
                  width: { lg: "39.9%", xs: "55%", md: '20%' },
                  borderRadius: "0 20px 20px 0",
                  background: "lightgrey",
                  display: "flex",
                  justifyContent: "space-around",
                  opacity: "0.9",
                  alignItems: "center",
                  height: "100%",
                  padding: "0 10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    height: "100%",
                    heigh: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { lg: "12px", xs: "10px", width: "100px" },
                    }}
                  >
                    ALL PRODUCTS
                  </Typography>
                  <KeyboardArrowDownIcon fontSize="small" />
                </Box>

                <SearchIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 2, mt: 4 }}>
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={6} sx={{ display: "flex", margin: 0, padding: '0 70px' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: '100%',
                padding: '45px 0',
                // alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
                ml: 0,
                mb: { xs: "30px" },
              }}
            >
              {/* <Typography align="start">
                <span style={{ fontSize: "60px", fontWeight: "800", letterSpacing: '2px', margin:'0' }}>
                  Turning Your
                </span>
                <br />
                <span style={{ fontSize: "45px" }}>Home into paradise</span>
                <br />
                <span>Our products are designed</span>
                <br />
                <span>to bring comfort and beauty</span>
                <br />
                <span>your home</span>
              </Typography> */}
              <Typography variant="h1" sx={{ fontWeight: 'bolder', margin: '10px 0', lineHeight: "60px" }} fontSize="70px">
                Turning Your
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: '500', margin: " 2px 10px " }} fontSize="35px">
                Home into paradise
              </Typography>
              <Typography variant="p" sx={{ fontWeight: '500', margin: " 2px 10px " }} fontSize="18px">
                Our products are designed
              </Typography>
              <Typography variant="p" fontSize="18px" sx={{ fontWeight: '500', margin: " 2px 10px " }} >
                to bring comfort and beauty
              </Typography>
              <Typography variant="p" fontSize="18px" sx={{ fontWeight: '500', margin: " 2px 10px " }} >
                your home
              </Typography>
              <Box sx={{ padding: "20px 0" }}>
                <Button href="/#about" sx={{ background: '#000', '&:hover': { background: '#222' }, padding: 2 }} variant="contained">
                  <Typography variant="h6">for more</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "start", padding: '0 50px' }}
          >
            <img
              src="./banner7.jpeg"
              width="100%"
              height='auto'
              style={{ borderRadius: "7px", marginRight: 80 }}
              alt="bannerImg"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
