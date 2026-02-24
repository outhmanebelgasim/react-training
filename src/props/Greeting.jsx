import React from "react";
import PropTypes from "prop-types";

function Greeting({ name = "Guest", age = 0, isGraduate = false }) {
  return (
    <div className="Student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>isGraduate: {isGraduate ? "Yes" : "No"}</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isGraduate: PropTypes.bool.isRequired,
};

Greeting.defaultProps = {
  name: "Guest",
  age: 0,
  isGraduate: false,
};

export default Greeting;
