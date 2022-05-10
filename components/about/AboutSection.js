import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import YellowDot from "./YellowDot";
// import { SectionHeader } from "../../utils";

const AboutSection = () => {
  return (
    <Box
      style={{
        padding: 8,
        width: "100%",
        background: "black",

        color: "white",
        marginTop: 70,
        padding: "130px 0px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        align="left"
        sx={{
          fontSize: "20px",
          fontWeight: "400",
          marginBottom: "60px",
          width: "85%",
          // mr:'50px'
        }}
      >
        ABOUT US
      </Typography>

      <Box sx={{ mt: 4, fontSize: "11px", width: "90%", mb: 2 }}>
        <Grid container spacing={2} columns={12}>
          <Grid
            xs={12}
            md={3}
            sx={{ padding: "0 20px", mt: 2, display: "flex" }}
          >
            <YellowDot />
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={3}
            sx={{ padding: "0 20px", mt: 2, display: "flex" }}
          >
            <YellowDot />
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={3}
            sx={{ padding: "0 20px", mt: 2, display: "flex" }}
          >
            <YellowDot />
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={3}
            sx={{ padding: "0 20px", mt: 2, display: "flex" }}
          >
            <YellowDot />
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;
