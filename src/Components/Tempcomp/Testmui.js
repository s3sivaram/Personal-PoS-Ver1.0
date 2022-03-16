import React, { useState } from "react";
import { TextField } from "@mui/material";

export const Testmui = () => {
  const [dataerror, setDataerror] = useState(false);
  return (
    <div>
      <TextField
        variant="outlined"
        error={dataerror}
        helperText={dataerror && "Please enter atleast 5 chars"}
        onChange={(e) => {
          if (e.target.value.length < 5) {
            setDataerror(true);
          } else {
            setDataerror(false);
          }
        }}
      ></TextField>
    </div>
  );
};
