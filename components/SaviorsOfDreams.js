import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button, Stack } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const SaviorsOfDreams = () => {
  return (
    <Box sx={{width: "100%", height: "500px",mt:2}}>
      <Swiper
        id="contact-swiper"
        direction={"horizontal"}
        speed={3500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: 'url("/savior-imag/img1.png")',
              height: "500px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.9) 0,rgba(0,0,0,.5) 100%)",
                padding: {
                  lg: "0 100px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Box sx={{background:'#f9b33a', height:'150px',minWidth:'170px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection: "column",mr:4}}>
                <span style={{fontSize:'14px',color:'#fff'}}>Our Vision</span>
                <span style={{fontSize:'25px',color:'#fff'}}>Comfort</span>
                <span style={{fontSize:'14px',color:'#fff'}}>where impossible</span>
              </Box>
                

              <Box sx={{mr:4,color:'#fff'}}>
                <Typography align="left" sx={{fontWeight:'100',fontSize:'30px'}}>Saviors of your dream</Typography>
                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>

                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>
              </Box>
              
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: 'url("/savior-imag/img2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat:'no-repeat'
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.9) 0,rgba(0,0,0,.5) 100%)",
                padding: {
                  lg: "0 100px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Box sx={{background:'#f9b33a', height:'150px',minWidth:'170px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection: "column",mr:4}}>
                <span style={{fontSize:'14px',color:'#fff'}}>Our Vision</span>
                <span style={{fontSize:'25px',color:'#fff'}}>Comfort</span>
                <span style={{fontSize:'14px',color:'#fff'}}>where impossible</span>
              </Box>
                

              <Box sx={{mr:4,color:'#fff'}}>
                <Typography align="left" sx={{fontWeight:'100',fontSize:'30px'}}>Saviors of your dream</Typography>
                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>
                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: 'url("/savior-imag/img3.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.9) 0,rgba(0,0,0,.5) 100%)",
                padding: {
                  lg: "0 100px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Box sx={{background:'#f9b33a', height:'150px',minWidth:'170px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection: "column",mr:4}}>
                <span style={{fontSize:'14px',color:'#fff'}}>Our Vision</span>
                <span style={{fontSize:'25px',color:'#fff'}}>Comfort</span>
                <span style={{fontSize:'14px',color:'#fff'}}>where impossible</span>
              </Box>
                

              <Box sx={{mr:4,color:'#fff'}}>
                <Typography align="left" sx={{fontWeight:'100',fontSize:'30px'}}>Saviors of your dream</Typography>
                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>
                <Typography align="left">Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</Typography>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default SaviorsOfDreams;
