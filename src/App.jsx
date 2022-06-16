import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee"
import UpdateEmployee from "./pages/UpdateEmployee"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </main>
  );
}

export default App;


