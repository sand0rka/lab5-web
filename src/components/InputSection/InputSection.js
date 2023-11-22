import React from "react";
import './InputSection.css';

const InputSection = () => {
  return (
    <div className="input">
      <label className="price-label">
        Minimum price <input type="number" name="minPrice" />
      </label>
      <label className="price-label">
        Maximum price <input type="number" name="MaxPrice" />
      </label>
    </div>
  );
};

export default InputSection;
