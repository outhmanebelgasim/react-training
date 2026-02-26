import React, { useState, useEffect } from "react";
import "../styles/DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervaleId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervaleId);
  }, []);

  function timeFormat() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridium = time > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)} ${meridium}`;
  }

  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{timeFormat()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
