import React from "react";

const Option = ({ placeholder, setOption }) => {
  return (
    <input
      type="text"
      className="w-full p-2 rounded-lg shadow-x border-2"
      placeholder={placeholder}
      onChange={(e) => {
        setOption(e.target.value);
      }}
    />
  );
};

export default Option;
