import React from "react";
import image from "../assets/images/wallpaperflare.com_wallpaper (1).jpg";
import "../styles/card.css";

function Card() {
  return (
    <div className="card">
      <img className="img" alt="profile picture" src={image}></img>
      <h2 className="title">Yunu</h2>
      <p className="p">Black Clover Anim</p>
    </div>
  );
}
export default Card;
