import { useState } from "react";
import CountNumberV2 from "./indexV2";

const Component_A = () => {
  const [count, setCount] = useState(0);
  const countNumber = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={countNumber}>countnum</button>
      <CountNumberV2 count={count} setCount={setCount} />
    </>
  );
};
export default Component_A;
