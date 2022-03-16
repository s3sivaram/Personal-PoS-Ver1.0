import { Grid } from "@mui/material";
import React from "react";
import Posleft from "./Posleft";
import Posright from "./Posright";
import Posbottom from "./Posbottom";

// This is the main component hosting the left and the right side of the screen.
// Posleft.js component:Leftside is the list of items to select from.
// Posright.js component:Rightside is the list of items selected and stored in the cart.
// Posbottom.js component:Posbottom is the total cost of the items selected.

const Pos = () => {
  const borderStyle = {
    marginTop: "18px",
    minHeight: "500px",
    maxheight: "300px",
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={7} style={borderStyle}>
          <Posleft />
        </Grid>
        <Grid item xs={5} style={borderStyle}>
          <Posright />
        </Grid>
      </Grid>
      <Posbottom />
    </div>
  );
};

export default Pos;
