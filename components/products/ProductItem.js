import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
// import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Stack, Divider, Grid } from "@mui/material";

function RenderProductDescription({ productDescription }) {
  if (productDescription) {
    return (
      <ul style={{ listStyleType: "disc" }}>
        {productDescription.map((description, index) => {
          console.log(description);
          return <li key={index}>{description}</li>;
        })}
      </ul>
    );
  } else {
    return <div>{"No Description for this product"}</div>;
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "80%",
  },
  maxHeight:{
    xs:'85vh',
    lg:'auto'
  },
  bgcolor: "blue",
  boxShadow: 24,
  p: 4,
};

export default function ProductItem({
  productName,
  productPrice,
  productImg,
  productDescription,
  index,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let currentImg = "/products/" + productImg;

  return (
    <div>
      <Button sx={{'&:hover':{background:"white"}}} onClick={handleOpen}>
        <Box
          sx={{
            height: "100%",
            border: "1px solid rgba(1,1,1,0.1)",
            borderRadius:'10px',
            color: "rgba(1,1,1,0.5)",
            fontWeight: "900",
            maxHeight: "370px",
            height: "370px",
            background:'',
            margin:'0 5px',
            width: {
              xs: "300px",
              sm:"300px",
              md: "315px",
            },
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            textAlign: "center",
            "&:hover": {
              // border: "1px solid #ef8729",
              // color: "#ef8729",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={currentImg}
            alt=""
            style={{
              height: "65%",
              objectFit: "contain",
              padding: "32px",
              margin: "0 auto",
            }}
          />
          <Divider
            sx={{
              "&:hover": {
                background: "#ef8729",
              },
            }}
          />
          <Stack
            sx={{
              padding: "0 8px",
              marginTop: "8px",
              minHeight: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography noWrap={false} variant="p">{productName} </Typography>
          </Stack>
        </Box>
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} id="modal-id">
            <Box>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {productName}
              </Typography>
            </Box>
            <Divider sx={{ m: "8px 0px" }} />
            <Grid container spacing={2} columns={12}>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={currentImg}
                  style={{
                    objectFit: "contain",
                    minWidth: "200px",
                    height: "250px",
                    maxHeight: "80vh",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: {
                    xs: "baseline",
                    lg: "baseline",
                  },
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Description
                </h1>
                <Typography
                  gutterBottom
                  sx={{
                    p: {
                      xs: "16px",
                    },
                  }}
                >
                  <RenderProductDescription
                    productDescription={productDescription}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
