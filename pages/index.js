import Head from 'next/head'
import { useEffect } from "react";
import { Box } from "@mui/material";
import AboutSection from '../components/about/AboutSection';
import ContactUs from '../components/ContactUs';
import SaviorsOfDreams from '../components/SaviorsOfDreams';

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box>
      <AboutSection />
      <SaviorsOfDreams />
      <ContactUs />

    </Box>
  )
}
