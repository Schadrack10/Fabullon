import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box, IconButton, useMediaQuery } from "@mui/material";


const Footer = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        background: "#111",
        padding: 8,
        paddingLeft: minWidth600px ? 8 : 4,
        paddingRight: minWidth600px ? 8 : 4,
        color: "#fff",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          width: "80%",
          // padding:"0px 50px 30px 40px",
          pb: 4,
        }}
      >
                <Grid item xs={12} md={3}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700 }}>COMPANY</Box>
          <Box>
            <Link href="/software-development">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                About us
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/software-development">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Our Story
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/design-and-marketing#graphic-design">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Contact
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/design-and-marketing#marketing">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
               Blog
              </a>
            </Link>
          </Box>
        </Grid>


        <Grid item xs={12} md={3}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700 }}>OUR PRODUCTS</Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
        </Grid>


        <Grid item xs={12} md={3}>
          <Box sx={{ mt:'50px'}}>
            <Link href="/software-development">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Curvus Couchosos
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/software-development">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/design-and-marketing#graphic-design">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Plaan Buiotk
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/design-and-marketing#marketing">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Xoxing sine Fruastra
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700 }}>STAY UPDATED</Box>
          <Box>
            <Link href="/#about-us">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Curvus Couchosos
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Monstroiuns Manshoek
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                Plaan Buiotk
              </a>
            </Link>
          </Box>
          <Box>
          <Button variant="outlined" size="small" sx={{mt:2, color:'white',outline:'white'}}>View Map</Button>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Box
          sx={{
            margin: "auto",
            width: "80%",
            height: "1px",
          }}
        />
      </Box>

      

      

            <Box sx={{mt:4,fontSize:'11px',width:'80%',mb:2}}>
              <Grid container spacing={2} columns={12}>
                <Grid xs={12} md={3} sx={{pl:'10px'}}>
                {new Date().getFullYear()}COMPANY
                </Grid>
                <Grid xs={12} md={3} sx={{pl:'10px'}}>
                  LEGACY & PRIVACY
                </Grid>
                <Grid xs={12} md={3} sx={{pl:'10px'}}>
                  GENERAL TERMS AND CONDITIONS
                </Grid>
                <Grid xs={12} md={3} sx={{pl:'10px'}}>
                  REPAIR TERMS AND CONDITIONS
                </Grid>
              </Grid>
            </Box>


      {/* <Box
        sx={{
          fontSize: "10px",
          p: 4,
          pb: 0,
          textAlign: "center",
        }}
      >
        @{new Date().getFullYear()} Active Media Industries Pty Ltd
      </Box> */}
    </Box>
  );
};

export default Footer;
