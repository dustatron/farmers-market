import React from "react";
import Months from "./Months/Months";
import Days from "./Days/Days";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1> App </h1>
      <Days />
      <Months />
      <Footer />
    </div>
  );
}

export default App;
