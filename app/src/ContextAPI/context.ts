// Example usage in a component
import React, { useEffect } from "react";
import { useAppContext } from "./AppProvider"; // Adjust the path as needed

const MyComponent: React.FC = () => {
  const { info, setInfo } = useAppContext();

  useEffect(() => {
    console.log("Info value:", info);
  }, [info]);

  return (
    <div>
      <p>Info: {info.toString()}</p>
      <button onClick={() => setInfo(!info)}>Toggle Info</button>
    </div>
  );
};

export default MyComponent;
