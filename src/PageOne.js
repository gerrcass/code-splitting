import React from "react";

const Page1 = ({ onChangeRoute }) => {
  return (
    <>
      <header className="App-header">HEADER</header>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="btn" disabled>
          Page1
        </button>
        <button className="btn" onClick={() => onChangeRoute("page2")}>
          Page2
        </button>
        <button className="btn" onClick={() => onChangeRoute("page3")}>
          Page3
        </button>
      </div>
    </>
  );
};

export default Page1;
