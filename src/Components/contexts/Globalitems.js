import React, { createContext, useState } from "react";
import { data } from "../data";
// data is the datastore from which items are picked and stored in the state variable "rows"

export const GlobalitemsContext = createContext();

const Globalitems = ({ children }) => {
  const [cart, setCart] = useState([]); // cart stores items selected by user on screen for sale
  const [rows, setRows] = useState(data); // Rows are the data that is displayed on the screen as items to select
  return (
    <div>
      <GlobalitemsContext.Provider
        value={{ cart, setCart, data, rows, setRows }}
      >
        {children}
      </GlobalitemsContext.Provider>
    </div>
  );
};

export default Globalitems;
