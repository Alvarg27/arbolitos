import React from "react";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={() => {
        onClick ? onClick() : "";
      }}
      className={`h-[40px] flex  ${className}`}
    >
      <span className="m-auto">{children}</span>
    </button>
  );
};

export default Button;
