import React from 'react'
import { Box} from "@mui/material";
import ProductItem from './products/ProductItem'


const ItemsSection = () => {
  return (
    <Box sx={{margin:'50px 0',padding:'0 63px'}}>
        <Box sx={{display:'flex',border:'1px solid red',width:'100%',justifyContent:'space-between'}}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Box>

        <Box sx={{display:'flex',border:'1px solid red',width:'100%',justifyContent:'space-between',mt:5}}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Box>

    </Box>
  )
}

export default ItemsSection