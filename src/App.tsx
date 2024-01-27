import { useEffect, useState } from "react";
import "./App.css";
import MyRoutes from "./Routes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { UserContext } from "./context/UserContext";
import axios from "axios";

function App() {
  const [thisUser, setThisUser] = useState(null);

  const fetchUser = () => {
    axios
      .get("/user/profile/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setThisUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const fetchUser = async () => {
  //   try {
  //     // const headers = {
  //       //   "Content-Type": "application/json",
  //       //   Authorization: "token " + localStorage.getItem("token"),
  //       // };

  //     const response = await axios.get("/user/profile/", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `token ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     console.log(localStorage.getItem("token"));
  //     setThisUser(response.data);
  //     console.log(response.data);
  //     console.log(thisUser);
  //   } catch (error) {
  //     console.error("Error fetching user data: ", error);
  //   }
  // };

  useEffect(() => {
    window.localStorage.getItem("token") !== null ? fetchUser() : {};
  }, []);

  return (
    <>
      <UserContext.Provider value={thisUser ? thisUser : {}}>
        <div className="app-container" style={{ backgroundColor: "#E7E7E7" }}>
          <Navbar />
          <MyRoutes />
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
