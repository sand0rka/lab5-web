import React from "react";
import './SelectSort.css';

const SelectSort = () => {
  return (
    <select name="question" className="select-sort">
      <option style={{ display: "none" }}>Choose option</option>
      <option value="sortByPrice">Sort by price</option>
      <option value="sortByTitle">Sort by title</option>
    </select>
  );
};

export default SelectSort;
