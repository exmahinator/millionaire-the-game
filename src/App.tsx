import React from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/homePage/HomePage";
import GamePage from "./pages/gamePage/GamePage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
