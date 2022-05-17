import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box, useMediaQuery } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");
  const [processing, setIsProcessing] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#111",
        padding: "68px 68px 0 68px",
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
          <Box sx={{ mt: "50px" }}>
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
            <Link href="https://www.google.com/maps/place/26a+Loveday+St,+Selby+South,+Johannesburg,+2000/@-26.2160634,28.0398166,17z/data=!3m1!4b1!4m5!3m4!1s0x1e950ebe1d7da421:0x1ea4522b95b834fe!8m2!3d-26.2160634!4d28.0420053?hl=en-US">
              <a target="_blank">
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
                    fontSize: "14px",
                  }}
                  size="small"
                  color="secondary"
                >
                  {processing ? <>VIEWING MAP</> : <>VIEW MAP</>}
                </Button>
              </a>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, fontSize: "11px", width: "80%", mb: 2 }}>
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={3} sx={{ pl: "10px" }}>
            {/* {new Date().getFullYear()}COMPANY */}
          </Grid>
          <Grid xs={12} md={3} sx={{ pl: "10px" }}>
            LEGACY & PRIVACY
          </Grid>
          <Grid xs={12} md={3} sx={{ pl: "10px" }}>
            GENERAL TERMS AND CONDITIONS
          </Grid>
          <Grid xs={12} md={3} sx={{ pl: "10px" }}>
            REPAIR TERMS AND CONDITIONS
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 5,
          fontSize: "11px",
          width: "87%",
          display: "fex",
          alignItems: "center",
          justifyContent: "center",
          pb: "5px",
        }}
      >
        {new Date().getFullYear()}COMPANY
      </Box>
    </Box>
  );
};

export default Footer;
