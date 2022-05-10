import {Button} from "@mui/material";

export default function ProductHeaderButton({header}){
    return(
        <Button
        variant="filled"
        sx={{
          background: "#ef8729",
          color: "#eee",
          fontWeight: "900",
          borderRadius: "16px",
          "&:hover":{
              background:"transparent",
              color:"#ef8729"
          }
        }}
      >
        {header}
      </Button>
    )
}