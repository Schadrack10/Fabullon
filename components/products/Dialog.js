// import * as React from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import ProductItem from "./ProductItem";

// function RenderProductDescription({ productDescription }) {
//   if (productDescription) {
//     return (
//       <ul style={{ listStyleType: "disc" }}>
//         {productDescription.map((description, index) => {
//           console.log(description);
//           return <li>{description}</li>;
//         })}
//       </ul>
//     );
//   } else {
//     return <div>{"No Description for this product"}</div>;
//   }
// }

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2, minWidth: "350px" }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function CustomizedDialogs({
//   productName,
//   productDescription,
//   productImg,
// }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   console.log(productDescription);
//   return (
//     <div>
//       <Box onClick={handleClickOpen}>
//         <ProductItem
//           productImg={
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dC0Km8u_Gp6U3n8sdvNYcRSVh2Un_PKbYg&usqp=CAU"
//           }
//           productName={productName}
//           productPrice={"500"}
//         />
//       </Box>

//       <BootstrapDialog fullWidth={true}
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//         >
//           {productName}
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           {/* <Typography gutterBottom>{prodectDescription}</Typography>
//           <Typography gutterBottom>{prodectDescription2}</Typography> */}

//           <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2} columns={12}>
//               <Grid
//                 item
//                 xs={12}
//                 md={6}
//                 lg={6}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img src={productImg} style={{ objectFit: "cover" }} />
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 md={6}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: {
//                     xs: "baseline",
//                     lg: "baseline",
//                   },
//                   flexDirection: "column",
//                 }}
//               >
//                 <h1
//                   style={{
//                     fontSize: "24px",
//                   }}
//                 >
//                   Description
//                 </h1>
//                 <Typography
//                   gutterBottom
//                   sx={{
//                     p: {
//                       xs: "16px",
//                     },
//                   }}
//                 >
//                   <RenderProductDescription
//                     productDescription={productDescription}
//                   />
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Box>
//         </DialogContent>
//       </BootstrapDialog>
//     </div>
//   );
// }
