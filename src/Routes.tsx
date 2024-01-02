import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Dashboard from "./pages/userPanel/Dashboard";
import LeaveReq from "./pages/LeaveReq";
import Recruitment from "./pages/Recruitment";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/leave" element={<LeaveReq />} />
        <Route path="/recruitment" element={<Recruitment />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
