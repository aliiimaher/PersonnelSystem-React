import "./App.css";
import MyRoutes from "./Routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app-container" style={{ backgroundColor: "#E7E7E7" }}>
        <Navbar />
        <MyRoutes />
      </div>
    </>
  );
}

export default App;
