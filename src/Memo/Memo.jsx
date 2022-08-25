import { useState } from "react";
import MyCard2 from "./MemoV1";

const MyCard = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <MyCard2 name={"dhiraj"} />
      <MyCard2 name={"vishal"} />
      <MyCard2 name={"vasi"} />
      <MyCard2 name={"sahil"} />
    </>
  );
};
export default MyCard;
