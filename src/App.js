import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/SignUp" Component={SignUp} />
          <Route exact path="/SignIn" Component={SignIn} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
