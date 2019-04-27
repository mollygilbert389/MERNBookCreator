import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, clear: "both", paddingTop: 120, textAlign: "center", marginTop: '10px' }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
