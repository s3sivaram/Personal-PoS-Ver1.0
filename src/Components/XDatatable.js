import React, { useEffect } from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import axios from "axios";
import { data, fields } from "./data";

const mycalcdata = data;

const Datatable = () => {
  const columns = fields;

  useEffect(() => {
    console.log("use Effect of datatable");
    axios.get("http://127.0.0.1:3001/inventory/getdata").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Container>
      <Box>
        <Typography align="center" variant="h4"></Typography>
      </Box>
      <Box m={16}>
        <Paper elevation={6}>
          {/* <MaterialTable
            columns={columns}
            data={mycalcdata}
            options={{
              sorting: true,
              search: true,
              searchFieldAlignment: "right",
              searchAutoFocus: true,
              searchFieldVariant: "standard",
              filtering: true,
              paging: true,
              pageSizeOptions: [2, 5, 10],
              grouping: true,
            }}
            title="Inventory Data"
          /> */}
        </Paper>
      </Box>
    </Container>
  );
};

export default Datatable;
