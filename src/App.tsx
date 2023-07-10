import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Call from "./components/api/Call";
import {NavBar} from "./NavBar";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/call" Component={Call} />
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
