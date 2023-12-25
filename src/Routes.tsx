import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Test from "./pages/Test";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
