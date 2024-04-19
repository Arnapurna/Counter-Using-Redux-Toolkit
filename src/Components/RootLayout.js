import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import Store from "../Store/Store";

const RootLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
