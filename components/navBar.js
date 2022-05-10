import { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NavBar = () => {
  const minWidth1200px = useMediaQuery("(min-width:1200px)");

  return (
    <Box
      sx={{
        height: "70px",
        width: "100%",
        position: "fixed",
        display: "flex",
        background: "#fff",
        zIndex: 1000,
        boxShadow: "1px 0 15px 1px rgba(0,0,0,.1)",
        top:0
      }}
    >
      {minWidth1200px && <WideScreenNavbar />}
      {!minWidth1200px && <SmallScreenNavBar />}
    </Box>
  );
};

const NAV_TAB_STYLE = {
  minWidth: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#212222;",
  borderRadius: 0,
};

const NavTabLink = ({ title, route }) => {
  return (
    <Link href={route}>
      <a>
        <Button sx={NAV_TAB_STYLE}>{title}</Button>
      </a>
    </Link>
  );
};

const WideScreenNavbar = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "120px",
          fontWeight: 700,
          fontSize: "25px",
        }}
      >
        <Link href="/">
          <a
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            logo
          </a>
        </Link>
      </Box>

      <Box
        sx={{
          height: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <NavTabLink title="Home" route="/" />
        <NavTabLink title="About us" route="/#about" />
        
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        
        <Typography sx={{fontSize:'14px',fontWeight:'400px'}}>CONTACT US NOW : 0610 333 003</Typography>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "120px",
        }}
      />
    </>
  );
};




const SmallScreenNavBar = () => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

  const toggleDrawer = (_, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawerMenu(open);
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "120px",
          fontWeight: 700,
          fontSize: "25px",
        }}
      >
        <Link href="/">
          <a
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            LOGO
          </a>
        </Link>
      </Box>

      <Box
        sx={{
          height: "100%",
          flex: 1,
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      <div>
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawerMenu}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          <Box
            sx={{
              height: "100%",
              width: "300px",
              background: "#fff",
              p: 2,
            }}
          >
            <List sx={{ width: "100%" }} id="small-screen-nav-routes">
              {[
                {
                  title: "Home",
                  route: "/",
                },
                {
                  title: "About Us",
                  route: "/#about",
                },
              ].map((link, index) => (
                <>
                  <Link href={link.route}>
                    <a
                      sx={{ color: "#212222" }}
                      onClick={toggleDrawer("right", false)}
                    >
                      <ListItem button key={link}>
                        <ListItemText primary={link.title} />
                        <ListItemIcon sx={{ minWidth: "unset" }}>
                          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                        </ListItemIcon>
                      </ListItem>
                    </a>
                  </Link>
                </>
              ))}
            </List>
          </Box>
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default NavBar;
