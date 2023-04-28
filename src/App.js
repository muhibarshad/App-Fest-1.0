import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./frontend/components/registration/login";
import Signup from "./frontend/components/registration/signup";
import Dashboard from "./frontend/components/dashboard/dashboard";
import CreateCourse from "./frontend/components/dashboard/createCourse";
import OnlineClasses from "./frontend/components/dashboard/onlineClasses";
import Assignments from "./frontend/components/dashboard/assignments";
import DashboardST from "./frontend/components/studentDashboard/dashboard_st";
import Request from "./frontend/components/dashboard/requests";
import Chat from "./frontend/components/studentDashboard/chat";
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
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/secuduled-online-classes" element={<OnlineClasses />} />
          <Route path="/view-courses" element={<DashboardST />} />
          <Route path="/enrollment-request" element={<Request />} />
          <Route path="/group-chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
