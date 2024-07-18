import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
  const [color, setColor] = useState("purple");
  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setColor(randomColor);
    console.log(randomColor);
  };
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={changeColor}
      className="color-box"
    ></div>
  );
}
