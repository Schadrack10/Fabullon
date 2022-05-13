import { Box, Grid, Typography, Button } from "@mui/material";
import ProductItem from "./ProductItem";
import Dialog from "./Dialog";
import Link from "next/link";
import { productsArr } from "../../state/products";
import * as React from "react";
// import { SectionHeader } from "../../utils";

export default function Products() {

  return (
    <Box
    id="products"
      sx={{
        minHeight: "100vh",
        width: "100%",
        padding: "16px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <SectionHeader text={"PRODUCTS"} /> */}
      <Grid container >
        {productsArr.map((product,index)=>{
          if(index < 8){

            return(
            <Grid key={index}
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            sx={{
              p: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background:"coral"
            }}
          >
            <ProductItem
              productName={product.name}
              productDescription={product.description}
              productDescription2="Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
              productImg={product.image}
              />
          </Grid>
          )
        }
        })}
      </Grid>
      <Box
        sx={{
          padding: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/products">
          <a>
            <Button
              variant="filled"
              sx={{
                fontWeight: "900",
                color: "white",
                background: "#f9b33a",
                maxWidth: "400px",
                "&:hover": {
                  color: "#ef8729",
                },
              }}
            >
              MORE PRODUCTS
            </Button>
          </a>
        </Link>
      </Box>
    </Box>
  );
}
