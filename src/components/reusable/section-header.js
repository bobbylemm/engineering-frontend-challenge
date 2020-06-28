import React from "react";

import CustomButton from "./custom-button";

const SectionHeader = ({ heading, btnHandler, btnText }) => (
  <div className="border-b p-6 flex justify-between items-center">
    <h3 className="capitalize">{heading}</h3>
    <CustomButton handler={btnHandler} text={btnText} />
  </div>
);

export default SectionHeader;
