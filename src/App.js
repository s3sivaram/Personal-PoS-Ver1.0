import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import Globalitems from "./Components/contexts/Globalitems";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <Container>
      <Globalitems>
        <Navbar />
      </Globalitems>
    </Container>
  );
}

export default App;
