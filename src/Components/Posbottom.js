import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { GlobalitemsContext } from "./contexts/Globalitems";

const PosbottomStyle = {
  border: "2px",
  borderStyle: "solid",
  borderColor: "black",
  alignItems: "center",
  textAlign: "center",
  maxHeight: "100px",
  marginTop: "25px",
  backgroundColor: "skyblue",
  color: "red",
};

const Posbottom = () => {
  const { cart } = useContext(GlobalitemsContext);

  const handlecartTotal = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.cost || 0;
    });
    return total;
  };

  return (
    <div style={PosbottomStyle}>
      <Typography variant="h5" component="h3">
        <span style={{ color: "blue" }}>Total Cost :</span> Rs{" "}
        {handlecartTotal(cart)}
      </Typography>
    </div>
  );
};

export default Posbottom;
