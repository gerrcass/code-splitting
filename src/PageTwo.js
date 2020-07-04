import React from "react";

const Page2 = ({ onChangeRoute }) => {
  return (
    <>
      <header className="App-header">HEADER</header>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="btn" onClick={() => onChangeRoute("page1")}>
          Page1
        </button>
        <button className="btn" disabled>
          Page2
        </button>
        <button className="btn" onClick={() => onChangeRoute("page3")}>
          Page3
        </button>
      </div>
    </>
  );
};

export default Page2;
