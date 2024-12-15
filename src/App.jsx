import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ContextProvider from "./components/Context/Context";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <>
      <ContextProvider>
        <div className="main">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Feed />
        </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
