import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box, useMediaQuery } from "@mui/material";



const Footer = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");
  const [processing, setIsProcessing] = useState(false);

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
            <Link href="/#about">
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
            <Link href="/">
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
            <Link href="/#contact">
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
            <Link href="/">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/products">
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
            <Link href="/">
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
            <Link href="/">
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
            <Link href="/">
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
          <Button
                sx={{
                  background: "#fff !important",
                  borderRadius: 0,
                  paddingLeft: "14px",
                  mt: 4,
                  pr: 1.3,
                  color: "#000",
                  pointerEvents: processing ? "none" : "auto",
                  opacity: processing ? 0.8 : 1,
                  height: "36px",
                  width: "100px",
                  fontSize:'14px'
                }}
                size="small"
                color="secondary"
              >
                {processing ? (
                  <>
                    VIEWING MAP
                    <Box sx={{ ml: 1 }}>
                      {/* <GooSpinner size={30} color="#fff" loading={true} /> */}
                    </Box>
                  </>
                ) : (
                  <>
                    VIEW MAP
                   
                  </>
                )}
              </Button>
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

    </Box>
  );
};

export default Footer;
