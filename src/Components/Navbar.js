import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Inventory from "./Inventory";
import Pos from "./Pos";
import { AppBar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tabcolor: {
    backgroundColor: "gold",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ textAlign: "left" }}>
            A Personal Point of Sale system
          </Box>
          <Box style={{ textAlign: "right" }}>s3sivaram@gmail.com</Box>
        </Box>
      </AppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        style={{ marginTop: "30px" }}
      >
        <Tab
          value="one"
          label="Home"
          classes={{ selected: classes.tabcolor }}
        />
        <Tab
          value="two"
          label="Inventory"
          classes={{ selected: classes.tabcolor }}
        />
      </Tabs>

      {value === "one" && <Pos />}
      {value === "two" && <Inventory />}
    </>
  );
};
