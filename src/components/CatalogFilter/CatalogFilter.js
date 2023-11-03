import React from "react";
import SelectSort from "../SelectSort/SelectSort";
import InputSection from "../InputSection/InputSection";
import ApplyButton from "../ApplyButton/ApplyButton";
import "./CatalogFilter.css";

const CatalogFilter = () => {
  return (
    <div className="inner">
      <SelectSort />
      <InputSection />
      <ApplyButton />
    </div>
  );
};

export default CatalogFilter;
