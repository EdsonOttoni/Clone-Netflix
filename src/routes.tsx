import React from "react";
import {
  BrowserRouter,
  Routes as Road,
  Route,
} from "react-router-dom";

import Browser from "./pages/Browser";
import DashBoard from "./pages/DashBoard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Road>
        <Route path="/" element={<DashBoard />} />
        <Route path="/browser" element={<Browser />} />
      </Road>
    </BrowserRouter>
  )
}