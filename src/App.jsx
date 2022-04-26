import React from "react";
import Homepage from "./containers/Homepage";
import UserPage from "./containers/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/user/:userId" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
