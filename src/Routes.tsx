import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Dashboard from "./pages/userPanel/Dashboard";
import LeaveReq from "./pages/leave/LeaveReq";
import Recruitment from "./pages/Recruitment";
import AboutUs from "./pages/AboutUs";
import PaySalary from "./pages/payment/PaySalary";
import CompletePayment from "./pages/payment/CompletePayment";
import NewsArchive from "./pages/NewsArchive";
import TripHistory from "./pages/histories/TripHistory";
import LeaveHistory from "./pages/histories/LeaveHistory";
import PaymentHistory from "./pages/histories/PaymentHistory";
import CompleteLeaveRequest from "./pages/leave/CompleteLeaveRequest";
import AllLeaveRequest from "./pages/leave/AllLeaveRequest";
import ResTrip from "./pages/trip/ResTrip";
import AllTripRequest from "./pages/trip/AllTripRequest";
import CompleteTripRequest from "./pages/trip/CompleteTripRequest";
import SendMsg from "./pages/messaging/SendMsg";
import SeeAllMsg from "./pages/messaging/SellAllMsg";
import OneMsgPage from "./pages/messaging/OneMsgPage";

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
        <Route
          path="/history-payment/:personnelNumber"
          element={<PaymentHistory />}
        />
        <Route path="/accept-leave" element={<AllLeaveRequest />} />
        <Route
          path="/complete-leave-request/:leave_id"
          element={<CompleteLeaveRequest />}
        />
        <Route path="/res-trip" element={<ResTrip />} />
        <Route path="/accept-trip" element={<AllTripRequest />} />
        <Route
          path="/complete-trip-request/:trip_id"
          element={<CompleteTripRequest />}
        />
        <Route path="/send-msg" element={<SendMsg />} />
        <Route path="/all-msg" element={<SeeAllMsg />} />
        <Route path="/msg/:id" element={<OneMsgPage />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
