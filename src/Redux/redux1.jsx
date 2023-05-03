import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Redux1 = () => {
  const count = useSelector((state) => state.meraCounter);
  const dispatch = useDispatch();
  console.log("COUNT : ", count);
  return (
    <>
      <p>I'm Redux {count.value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};
export default Redux1;
