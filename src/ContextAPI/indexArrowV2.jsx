import { useContext } from "react";
import { colorChange, nameContext } from "./App";

const ChildContainer = () => {
  const meraName = useContext(nameContext);
  const myTheme = useContext(colorChange);

  return (
    <>
      <div style={{ backgroundColor: myTheme }}>Mera naam {meraName}</div>
    </>
  );
};
export default ChildContainer;
