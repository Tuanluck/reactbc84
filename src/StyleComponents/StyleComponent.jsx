import React, { useState } from "react";
import cssStyle from "./DemoStyle.module.css";

const StyleComponent = () => {
  let [fSize, setFsize] = useState(30);
  const jsonCss = { color: "red", backgroundColor: "blue" };
  return (
    <div className="container">
      <h3>Style component</h3>
      <p
        style={{
          color: "#fff",
          backgroundColor: "blue",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Lorem ipsum dolor sit amet.
      </p>
      <div style={jsonCss} />
      <p className={cssStyle.pBlue}>Lorem ipsum dolor sit amet.</p>
      <p className={`bg-dark ${cssStyle.pBlue}  ${cssStyle["border-red"]}`}>
        Lorem ipsum dolor sit amet.
      </p>
      <hr />
      <h3 style={{ fontSize: `${fSize}px` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum sit ex
        eligendi enim tempore doloremque fugit dolores molestiae totam?
      </h3>
      <button className="btn btn-success" onClick={()=>{
        setFsize(fSize+1);
      }}>+</button>
      <button className="btn btn-primary mx-2">-</button>
    </div>
  );
};

export default StyleComponent;
