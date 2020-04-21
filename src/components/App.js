import React from "react";
import Months from "./Months/Months";
import Days from "./Days/Days";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        {/* <h1> App </h1> */}
        <Days />
        <Months />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
