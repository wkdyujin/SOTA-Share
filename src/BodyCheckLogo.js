import { Link } from "react-router-dom";
import React, { useState, Component, setState } from "react";

class BodycheckLogo extends Component {
  render() {
    return (
      <Link to="/main">
        {
          <button
            className="title"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              marginLeft: "0px",
            }}
          >
            Body Check
          </button>
        }
      </Link>
    );
  }
}

export default BodycheckLogo;
