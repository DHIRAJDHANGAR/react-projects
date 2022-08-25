import { useContext } from "react";
import { colorChange, nameContext } from "./App";
import ChildContainer from "./indexArrowV2";

const ParentContainer = () => {
  const myName = useContext(nameContext);
  const myTheme = useContext(colorChange);
  return (
    <>
      <div style={{ backgroundColor: myTheme }}>My name is {myName}</div>
      <ChildContainer />
    </>
  );
};
export default ParentContainer;
