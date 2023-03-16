import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="input-container">
      <input
        className="input"
        placeholder="Enter a color"
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        className="btn btn-color"
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default ChangeColor;
