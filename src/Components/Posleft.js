import React, { useContext } from "react";
import { Paper, Grid } from "@mui/material";
import { GlobalitemsContext } from "./contexts/Globalitems";

// Posleft.js Component
// Reads the data from the GlobalitemsContext "rows" and displays the items in the left side of
// the screen.

const Posleft = () => {
  let obj = { name: "s1" };

  const { cart, setCart } = useContext(GlobalitemsContext);
  // cart is the state variable that stores the items selected by the user

  const { rows } = useContext(GlobalitemsContext);
  // rows stores all the items in the inventory

  const containerStyle = {
    // style for the Grid container of the left side of the screen.
    maxHeight: "470px",
    maxwidth: "300px",
    overflow: "auto",
  };

  const borderStyle = {
    // style for each Grid item of Paper - Item
    alignItems: "center",
    textAlign: "center",
    maxHeight: "250px",
    maxwidth: "220px",
  };

  const imageStyle = {
    // style for the image of each item
    height: "75px",
    width: "75px",
  };

  const handleItemclick = (element, index) => {
    // This function is called when the user clicks on an item in the left side of the screen.
    // updates the Cart object with the selected item.
    obj["index"] = index;
    obj["name"] = element.item;
    obj["price"] = element.price;
    obj["quantity"] = 1000;
    obj["cartID"] = Math.floor(Math.random() * 1000);
    obj["cost"] = (obj["quantity"] / 1000) * obj["price"];

    setCart([...cart, obj]);
  };

  return (
    <Grid container style={containerStyle} spacing={0.5}>
      {rows.map((element, index) => (
        // map through the rows data and display each item in the left side of the screen
        <Grid item xs={12} sm={6} key={index} style={borderStyle}>
          <Paper
            elevation={6}
            sx={{ width: "200px", "&:hover": { cursor: "pointer" } }}
            onClick={(e) => handleItemclick(element, index)}
            title="click to add to cart"
          >
            <h1>{element.item}</h1>
            <img src={element.imageURL} alt={element.alt} style={imageStyle} />
            <h2>Rs.{element.price}</h2>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posleft;
