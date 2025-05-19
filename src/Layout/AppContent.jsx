import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { CContainer, CSpinner } from "@coreui/react";

import routes from "../routes/routes";
const AppContent = () => {
  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContent;
