import { Container, Paper, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridclass: {
    // border: "1px solid black",
    // padding: "10px",
  },
});

const Layout = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={1} marginTop={2}>
        <Grid item xs={12} className={classes.gridclass}>
          <Paper
            elevation={3}
            sx={{ minHeight: "95vh", backgroundColor: "lightgreen" }}
          >
            Side Menu Side Menu Side Menu Side Menu
          </Paper>
        </Grid>
        <Grid item xs={9} className={classes.gridclass}>
          <Paper elevation={6} sx={{ minHeight: "95vh" }}>
            Main content
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
