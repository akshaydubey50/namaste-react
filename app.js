import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";
import BodyLayout from "./src/components/BodyLayout";

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - SearhInput
 *  - ResturantContainer
 * Footer
 *  - CopyRight
 *  - Footer Links
 *  - Address
 */




const Applayout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <BodyLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
