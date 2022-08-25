import { useEffect, useState } from "react";
import { createContext } from "react";
import { Button } from "reactstrap";
import ParentContainer from "./indexArrow";

export const nameContext = createContext("");
const NameProvider = nameContext.Provider;

export const colorChange = createContext(true);
const ColorProvider = colorChange.Provider;

function ContextApi() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("rgb(16, 16, 16)");
  const handleColor = () => {
    if (color === "rgb(16, 16, 16)") {
      setColor("green");
      return;
    } else if (color === "green") {
      setColor("red");
      return;
    } else if (color === "red") {
      setColor("blue");
      return;
    }
    setColor("rgb(16, 16, 16)");
  };

  return (
    <>
      <div className="mainContainer">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={handleColor}>color</Button>
        <ColorProvider value={color}>
          <NameProvider value={name}>
            <ParentContainer />
          </NameProvider>
        </ColorProvider>
      </div>
    </>
  );
}
export default ContextApi;
