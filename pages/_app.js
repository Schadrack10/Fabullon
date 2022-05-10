import "../styles/globals.css";
import React from "react";
import PageHead from "../components/PageHead.js";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import { Slide } from "@mui/material";
import { SnackbarProvider } from "notistack";
import {Button} from "@mui/material";


function MyApp({ Component, pageProps }) {
  const notistackRef = React.createRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarProvider
        maxSnack={2}
        preventDuplicate={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={3000}
        ref={notistackRef}
        action={(key) => (
          <Button
            onClick={onClickDismiss(key)}
            variant="outlined"
            size="small"
            style={{ color: "#fff", opacity: 0.7 }}
          >
            Dismiss
          </Button>
        )}
        TransitionComponent={Slide}
      >
        <PageHead />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </SnackbarProvider>
    </>
  );
}
export default MyApp;
