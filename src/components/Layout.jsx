import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
export default function Layout(props) {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "" && <Header />}
      {props.children}
    </div>
  );
}
