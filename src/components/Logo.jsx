import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

function Logo({ width = "48" }) {
  // Set default width to 48px
  const imageUrl =
    "https://i.ibb.co/z6CzH27/travelopedia-high-resolution-logo-transparent-1.png";

  return (
    <div className="w-52">
      <Link to="/">
        <img src={imageUrl} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
