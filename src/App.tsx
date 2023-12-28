import "./App.css";
import MyRoutes from "./Routes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app-container" style={{ backgroundColor: "#E7E7E7" }}>
        <Navbar />
        <MyRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
