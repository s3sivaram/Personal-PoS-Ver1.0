import React, { useContext } from "react";
import { GlobalitemsContext } from "./contexts/Globalitems";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import { Icon, Autocomplete, TextField } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Posright.js Component
// Reads the cart data from the GlobalitemsContext "cart" and displays the items in the right side of
// the screen.

const Posright = () => {
  const { cart, setCart } = useContext(GlobalitemsContext);

  const itemsquantity = [250, 500, 750, 1000, 2000];
  // itemsquantity gets displayed in the dropdown of Quantity - Autocomplete component

  const PosrightStyle = {
    // style for the right side of the screen
    color: "gold",
    maxHeight: "470px",
    overflow: "auto",
  };

  const filterGlobalitem = (cart, cartid) => {
    // filter the "cart" and removes the item with the given "cartid" and returns the filtered array
    const tempcart = [...cart];
    const res = tempcart.filter((element) => element.cartID !== cartid);
    return res;
  };

  const handleItemdelete = (cartid) => {
    // This function is called when the user clicks on the delete icon of an item in the right side of the screen.Removes the item from the cart item having the passed cartid.
    setCart(filterGlobalitem(cart, cartid));
  };

  const handleQuantityChange = (event, quantityobj, cartelement) => {
    // This function is called when the user changes the quantity of an item in the right side of the screen.
    // It has two functions -
    // if quantity NOT equal to zero : updates the cart object with the new quantity & cost and if quantity is equal to zero : resets the cart item with the quantity & cost to zero and hilite the delete icon with yellow color background

    // type of quantityobj can be  "object" or string based on how the quantity is changed.
    // if quantity is changed through the dropdown it's an object,if it's changed through the keyboard stroke it's a string.

    let tempCart = [...cart];

    if (quantityobj !== null) {
      // check if the quantity is changed through the dropdown or the keyboard stroke-refer comments above
      if (typeof quantityobj === "string") {
        quantityobj = parseInt(quantityobj);
      } else if (typeof quantityobj === "object") {
        quantityobj = parseInt(quantityobj.value);
      }

      tempCart.find((element) => {
        if (element.cartID === cartelement.cartID) {
          element.cost = (quantityobj / 1000) * cartelement.price;
          element.quantity = quantityobj;
        }
        return null; // to avoid compile warning of "expected return"
      });
      setCart(tempCart);
    } else {
      // if quantity is equal to zero mutate the tempcart element with the quantity & cost to zero and hilite the delete icon with yellow color background
      tempCart.find((element) => {
        if (element.cartID === cartelement.cartID) {
          element.cost = 0;
          element.quantity = 0;
        }
        return null; // to avoid compile warning of "expected return"
      });
      setCart(tempCart);
    }
  };

  return (
    <div style={PosrightStyle}>
      <h1
        style={{
          color: "blue",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        Ordered Items
        <Badge
          badgeContent={cart.length || "0"}
          color="secondary"
          sx={{
            margin: "10px",
            backgroundColor: "gold",
            borderRadius: "50%",
          }}
        >
          <ShoppingCartIcon color="action" />
        </Badge>
        <Icon
          style={{
            marginLeft: "170px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={() => setCart([])}
          title="Clear Cart"
        >
          <DeleteSweepTwoToneIcon />
        </Icon>
      </h1>
      {cart.map((element, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid black",
          }}
        >
          <p style={{ flex: "3" }}>
            <span style={{ color: "blue" }}>{element.name} </span>
          </p>
          {/* <p style={{ flex: "3" }}> */}
          <span>
            <Autocomplete
              freeSolo
              title="Click to Select Quantity or type number & press enter"
              defaultValue="1kg"
              size="small"
              value={element.quantity}
              getOptionLabel={(option) => option.toString()}
              id="combo-box-demo"
              options={itemsquantity}
              sx={{ width: 100 }}
              variant="outline"
              required
              onChange={(e, quantityobj) =>
                handleQuantityChange(e, quantityobj, element)
              }
              renderInput={(params) => (
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "red",
                    },
                  }}
                  {...params}
                  size="small"
                  required
                  label="Grams/Litre"
                />
              )}
            />
          </span>
          {/* </p> */}
          <p style={{ flex: "3" }}>
            <span style={{ color: "blue", marginLeft: "10px" }}>
              Rs:
              {element.cost}
            </span>
          </p>
          <Icon
            color="error"
            onClick={() => handleItemdelete(element.cartID)}
            title="Delete Item"
          >
            <DeleteForeverIcon
              sx={{
                cursor: "pointer",
                // change the color of the delete icon to yellow when quantity is equal to zero
                backgroundColor: element.quantity === 0 ? "yellow" : null,
              }}
            />
          </Icon>
        </div>
      ))}
    </div>
  );
};

export default Posright;
