import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Home from "./Home";
import Busmap from "./component/Busmap";
import Buslist from "./component/Buslist";
import PassengerDetails from "./component/PassengerDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Home" element={<Home />}/>
      <Route path="/Busmap" element={<Busmap />}/>
      <Route path="/Buslist" element={<Buslist />}/>
      <Route path="/PassengerDetails" element={<PassengerDetails />}/>
    </Routes>
  </Router>
);

export default App;
