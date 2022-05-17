import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
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
        mt: 8.7,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        // pt: 3, 
        padding: "0 60px",
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
              justifyContent: "space-between",
              // padding: 6,
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
                sx={{ ml: 4.7 }}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Hello
                </MenuItem>
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
            sx={{ width: "120px", display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                height: "35px",
                width: {
                  lg: "490px",
                  xs: "100%",
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
                  width: { lg: "39.9%", xs: "55%" },
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
          <Grid xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
                height: "100%",
                ml: 7,
                mb: { xs: "30px" },
              }}
            >
              <Typography>
                <span style={{ fontSize: "49px", fontWeight: "700" }}>
                  Turning Your
                </span>
                <br />
                <span style={{ fontSize: "35px" }}>Home into paradise</span>
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
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img
              src="./banner7.jpeg"
              width="65%"
              height="auto"
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
