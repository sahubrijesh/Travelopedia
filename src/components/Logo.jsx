import React from 'react';

function Logo({ width = '48' }) { // Set default width to 48px
  const imageUrl = "https://i.ibb.co/kJcNBL1/travelopedia-high-resolution-logo-black-transparent.png";
  
  return (
    <div className="w-52">
      <img src={imageUrl} alt="logo" /> {/* Use Tailwind CSS classes to set width */}
    </div>
  );
}

export default Logo;