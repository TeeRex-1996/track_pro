import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ValidatedRoute from "./components/ValidatedRoute";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ValidatedRoute />}>
          <Route path="/home" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
