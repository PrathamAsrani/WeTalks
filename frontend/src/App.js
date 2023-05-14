import React from "react";
import "./App.css";
import WeText from "./components/WeText";
import Landing from "./Pages/Landing";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Sign-in" element={<WeText/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
