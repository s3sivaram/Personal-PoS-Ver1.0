import React, { useState, useContext } from "react";
import { Button, Stack } from "@mui/material";
import { DataGridPro, GridActionsCellItem } from "@mui/x-data-grid-pro";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
// import { data } from "./data";
import { GlobalitemsContext } from "./contexts/Globalitems";
import { makeStyles } from "@mui/styles";

// The table is based on MUI DataGridPro.

const useStyles = makeStyles((theme) => ({
  columnheader: {
    backgroundColor: "lightslategray",
    color: "white",
    fontWeight: "bold",
  },
  row: {
    backgroundColor: "lightblue",
    color: "black",
  },
}));

const Inventory = () => {
  const tempobj = {
    id: uuidv4(),
    date: new Date().toLocaleDateString(),
    item: "ADDED ITEM",
    price: 0,
    quantitypurchased: 0,
    unit: "grams",
    quantitysold: 0,
    costcollected: 0,
  };

  const { rows, setRows } = useContext(GlobalitemsContext);

  const fields = [
    // Row heading definitions for the Inventory Table
    {
      headerName: "ID",
      field: "id",
      description: "Id should be unique",
      width: 20,
    },
    {
      headerName: "Item",
      field: "item",
      width: 100,
      description: "Item name",
      editable: true,
    },
    {
      headerName: "Date",
      field: "date",
      width: 100,
      editable: true,
      type: "date",
    },
    {
      headerName: "Price",
      field: "price",
      width: 100,
      editable: true,
      type: "number",
      description: "Sale cost/Kg",
      valueFormatter: (params) => {
        return ` Rs  ${params.value}`;
      },
    },
    {
      headerName: "Purchase(grams)",
      field: "quantitypurchased",
      width: 150,
      editable: true,
    },
    {
      headerName: "Sold(grams)",
      field: "quantitysold",
      width: 150,
      editable: true,
    },
    {
      headerName: "Revenue",
      field: "costcollected",
      width: 150,
      editable: true,
      description: "Amount collected till now",
    },
    {
      headerName: "Image URL",
      field: "imageURL",
      width: 350,
      editable: true,
      description: "URL of the Image",
    },
    {
      headerName: "Action",
      field: "action",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="secondary"
          onClick={(e) => deleteUser(e, params)}
          // showInMenu
        />,
      ],
    },
  ];
  const classes = useStyles();

  // this line is kept for future reference.... const [columns, setColumns] = useState(fields);
  const [columns] = useState(fields);

  let tempobj1;

  const deleteUser = (e, params) => {
    setRows((prevrows) => {
      return prevrows.filter((item) => item.id !== params.id);
    });
  };

  const handleAddNewRow = () => {
    tempobj1 = [tempobj, ...rows];
    setRows(tempobj1);
  };

  const handleCellEditCommit = (params) => {
    // this will update the rows array with the new value
    let temprows = [...rows];
    let temprowno = temprows.findIndex((item) => item.id === params.id);
    temprows[temprowno][params.field] = params.value;
    setRows(temprows);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "white", width: "100%" }}
        title="Doubleclick to edit the data"
      >
        <div style={{ marginTop: 20 }}> </div>
        <DataGridPro
          rows={rows}
          columns={columns}
          onCellEditCommit={handleCellEditCommit}
          pagination
          autoHeight
          classes={{
            columnHeaders: classes.columnheader,
            row: classes.row,
          }}
        />
      </div>

      <Stack spacing={2} margin={1} direction="row">
        <Button
          variant="contained"
          onClick={handleAddNewRow}
          title="Click to Add an item to the Inventory List"
        >
          Add item
        </Button>
      </Stack>
    </div>
  );
};

export default Inventory;
