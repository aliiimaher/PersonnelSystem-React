import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Dashboard from "./pages/userPanel/Dashboard";
import LeaveReq from "./pages/LeaveReq";
import Recruitment from "./pages/Recruitment";
import AboutUs from "./pages/AboutUs";
import PaySalary from "./pages/payment/PaySalary";
import CompletePayment from "./pages/payment/CompletePayment";
import NewsArchive from "./pages/NewsArchive";
import TripHistory from "./pages/histories/TripHistory";
import LeaveHistory from "./pages/histories/LeaveHistory";

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
        <Route path="/pay-salary" element={<PaySalary />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/complete-payment/:personnelNumber"
          element={<CompletePayment />}
        />
        <Route path="/news-archive" element={<NewsArchive />} />
        <Route
          path="/history-trip/:personnelNumber"
          element={<TripHistory />}
        />
        <Route
          path="/history-leave/:personnelNumber"
          element={<LeaveHistory />}
        />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
