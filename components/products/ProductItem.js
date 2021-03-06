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
      <ul style={{ listStyleType: "disc", padding:0, margin:0 }}>
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
    xs: "50%",
  },

  maxwidth: {
    xs: '300px'
  },
  fontSize: {
    xs: '1px'
  },
  maxHeight: {
  
    xs: '450px',
    lg: 'auto'
  },
  bgcolor: "#fff",
  boxShadow: 24,
  borderRadius: '12px',
  p: 2,
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
      <Box>

        <Box
          sx={{
            height: "100%",
            border: "1px solid #f9b33a",
            borderRadius: '10px',
            color: "rgba(1,1,1,0.5)",
            fontWeight: "900",
            maxHeight: "370px",
            height: "370px",
            // background: 'rgb(255,255,0)',
            margin: '50px 5px',
            width: {
              xs: "300px",
              sm: "300px",
              md: "250px",
            },
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            // padding: "8px",
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box sx={{ width: '100%', height: '15%', background: '#f9b33a', borderRadius: '10px 10px 0 0', display: 'flex', justifyContent: "flex-end" }} x>
            <Button onClick={handleOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </Button>
          </Box>
          <Box sx={{ background: '#fff', margin: "0 auto", height: '60%', width: '100%', padding: '10px' }}>
            <img
              src={currentImg}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                "&:hover": {

                  background: "#ef8729",
                },
              }}
            />
          </Box>
          <Box
            sx={{

              height: "25%",
              padding: "0 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: '#f9b33a',
              borderRadius: '0 0 10px 10px '

            }}
          >
            <Typography color="white" sx={{ fontWeight: "bolder" }} noWrap={false} variant="p">{productName} </Typography>
          </Box>
        </Box>

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
                  style={{fontWeight:'bolder'}}
                >
                  {productName}
                </Typography>
              </Box>
              <Divider sx={{
                m: "8px 0px",
                height: '6px',
                background: '#f9b33a',
                transform: ' skew(50deg)'
              }} />
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
                      maxWidth: "200px",
                      maxHeight: "80vh",
                      margin:'20px 0'
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: {
                      xs: "baseline",
                      lg: "flex-start",
                      md:'flex-start'
                    },
                    flexDirection: "column",
                  }}
                >
                  <h1
                    style={{
                      margin:'10px 0',
                      fontSize: "25px",
                  
                    }}
                  >
                    More About {productName}
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
      </Box>




    </div>
  );
}
