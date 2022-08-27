import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Register from "./components/Authorization/Register";
import Login from "./components/Authorization/Login";
import ScienceBlock from "./components/ScienceBlock";
import DirectionBlock from "./components/DirectionBlock";
import Tests from "./components/Tests";
import Score from "./components/Score";
import Students from "./components/Students";
import Results from "./components/Results";
import Redirect from "./components/Redirect";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Redirect />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="science" element={<ScienceBlock />} />
          <Route path="direction" element={<DirectionBlock />} />
        </Route>
        <Route path="/tests" element={<Tests />} />
        <Route path="/score" element={<Score />} />
        <Route path="/students" element={<Students />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
