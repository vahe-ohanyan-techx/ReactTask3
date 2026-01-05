import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
