import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"
import Body from "./src/components/Body"

const AppLayout = () => {
  // The below line returns an object of Header , which is the V-DOM of the component  
  console.log('<Header />', <Header />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
