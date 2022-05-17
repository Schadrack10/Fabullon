import React from 'react'
import { Box, Typography} from "@mui/material";
import ProductItem from './products/ProductItem'
import Products from './products/Products'


const ItemsSection = () => {
  return (
    <Box sx={{margin:'50px 0'}}>
        <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',flexDirection:'column'}}>
          <Typography variant="h5" align="center" sx={{mb:5}}>
            FEATURED PRODUCTS
          </Typography>
          <Products />
        </Box>
    </Box>
  )
}

export default ItemsSection