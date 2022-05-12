import React from 'react'
import { Box} from "@mui/material";
import ProductItem from './products/ProductItem'
import Products from './products/Products'


const ItemsSection = () => {
  return (
    <Box sx={{margin:'50px 0'}}>
        <Box sx={{display:'flex',width:'100%',justifyContent:'space-between'}}>
          <Products />
        </Box>
    </Box>
  )
}

export default ItemsSection