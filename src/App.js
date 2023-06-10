import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Tick from "./components/Tick";
import Stich from "./components/Stich";

function App() {
  return (
   <BrowserRouter>
   <Menu/>
   <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/tick`} element={<Tick/>} />
      <Route path={`/stich`} element={<Stich/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
