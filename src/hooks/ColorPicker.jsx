import React, { useState } from "react";
import "../styles/ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const handleColor = (event) => setColor(event.target.value);

  return (
    <div className="color-picker-container">
      <div className="color-box" style={{ backgroundColor: color }}>
        <h2>Color Picker</h2>
        <p>Color code: {color}</p>
        <div className="color-selector">
          <label>Select Color:</label>
          <input
            type="color"
            className="color-input"
            value={color}
            onChange={handleColor}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
