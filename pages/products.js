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
import ProductHeaderButton from "../components/products/ProductHeaderButton";
import { productsArr } from "../state/products";
import { Catergories } from "../state/Catergories";
import { useState } from "react";
import SaviorOfDreams from '../components/SaviorsOfDreams'
import ContactUs from '../components/ContactUs'

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
    <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        // background:'#f8f8f8',
        padding: {
          xs: "70px 40px",
          md: "80px 60px",
          lg: "80px 40px",
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
        <Typography fontSize={25} variant="h2\5">Filter by :</Typography>
        <Select  value={filterChoice} onChange={handleFilterChange}>
          <MenuItem  value="">{"All"}</MenuItem>
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
        <Box
          sx={{
            margin: "21px 0",
            height:'10px',
            background:'#f9b33a',
            transform:' skew(50deg)'
          }}
        />
      </Box>

      <Typography
        variant="h3"
        component="div"
        gutterBottom
        align="center"
        color="#000"
        style={{ fontWeight: "400", fontFamily:'monospace' ,fontSize:'35px'}}
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
      <SaviorOfDreams/>
      <ContactUs/>
    
    
    
    </>
  );
}
