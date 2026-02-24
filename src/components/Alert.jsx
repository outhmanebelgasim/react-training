import React from "react";
import wallpaper from "../assets/images/wallpaperflare.com_wallpaper (1).jpg";

function Alert() {
  const handleClick = (event) => {
    event.target.style.display = "none";
  };

  return (
    <div>
      <img src={wallpaper} onClick={handleClick} alt="React logo" />
    </div>
  );
}

export default Alert;
