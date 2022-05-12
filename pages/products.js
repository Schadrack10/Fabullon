// import About from "../components/About";
import {
  Box,
  Divider,
  Grid,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import ProductItem from "../components/products/ProductItem";
import Dialog from "../components/products/Dialog";
import ProductHeaderButton from "../components/products/ProductHeaderButton";
import { productsArr } from "../state/products";
import { Catergories } from "../state/Catergories";
import { useState } from "react";

export default function Products() {
  const [index, setIndex] = useState(false);

  const [filterChoice, setFilterChoice] = useState("");
  console.log(Catergories);

  const handleFilterChange = (event) => {
    setFilterChoice(event.target.value);
  };

  const handleIndex = ({ index }) => {
    setIndex(index + 1);
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background:'rgb(242, 242, 242)',
        background:'#fff',
        padding: {
          xs: "70px 40px",
          md: "76px 60px",
          lg: "90px 80px",
        },
      }}
    >
      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: {
            lg: "0px 24px",
            xs: "0px 8px",

          },
        }}
      >
        <Typography sx={{fontWeight:'light', fontFamily:'monospace'}} fontSize="22px" variant="h5">Filter by :</Typography>
        <Select value={filterChoice} onChange={handleFilterChange}>
          <MenuItem value="">{"All"}</MenuItem>
          {Catergories.map((cat, index) => {
            return <MenuItem key={index} value={cat}>{cat}</MenuItem>;
          })}
        </Select>
      </Box>

      <Box
        sx={{
          p: {
            lg: "0px 24px",
            sm: "0px 6px",
            xs: "0px 4px",
          },
        }}
      >
        <Divider
          sx={{
            margin: "21px 0",
          }}
        />
      </Box>

      <Typography
        variant="h4"
         
        component="div"
        gutterBottom
        align="center"

        sx={{ fontWeight: "300", fontFamily:'monospace', letterSpacing:'0px' }}
      >
        {filterChoice}
      </Typography>
      <Grid container>
        {productsArr.sort().map((product, index) => {
          if (filterChoice !== "") {
            if (filterChoice === product.category) {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  sx={{
                    p: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ProductItem
                    productName={product.name}
                    productDescription={product.description}
                    productDescription2="Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                    productImg={product.image}
                  />
                </Grid>
              );
            }
          } else {
            return (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={4}
                lg={3}
                sx={{
                  p: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ProductItem
                  productName={product.name}
                  productDescription={product.description}
                  productDescription2="Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                  productImg={product.image}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
}
