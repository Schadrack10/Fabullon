import Head from 'next/head'
import { useEffect } from "react";
import { Box } from "@mui/material";

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



    </Box>
  )
}
