import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/LoginForm";
// import "./App.css";
import DataSource from "./pages/components/datasource/dataSource";

const DefaultLayout = import("./routes/defaultLayout");

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" name="Login" element={<Login />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/datasource" name="Home" element={<DataSource />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
