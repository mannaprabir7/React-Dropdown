import React from "react";
import Select from "react-select";

export default function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "100px auto",
    width: "50%",
  };
  const [value, setValue] = React.useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div style={containerStyle}>
      <label> What is your choice </label>
      <Select
        options={options}
        defaultValue={value}
        placeholder="Select your optiion"
        onChange={setValue}
        noOptionsMessage={() => "No item found..."}
      />
    </div>
  );
}
