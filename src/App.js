import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar, { NavbarDui } from "./Navbar/Navbar";

function App() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "400px",
      width: "500px",
      overflow: "auto",
    },
  };

  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;