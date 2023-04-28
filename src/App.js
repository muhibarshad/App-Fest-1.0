import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./frontend/components/registration/login";
import Signup from "./frontend/components/registration/signup";
import Logout from "./frontend/components/registration/logout";
import Dashboard from "./frontend/components/dashboard/dashboard";
import Overview from "./frontend/components/dashboard/overview";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overview" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;