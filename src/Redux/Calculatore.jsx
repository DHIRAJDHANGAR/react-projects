import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  division,
  modulus,
  multiply,
  subtract,
} from "./CalculatoreSlice";

const Calculatore = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const result = useSelector((state) => state.meraCalculator.result);
  const dispatch = useDispatch();

  const dispatchAddition = () => {
    dispatch(addition({ num1, num2 }));
  };
  const dispatchSubtract = () => {
    dispatch(subtract({ num1, num2 }));
  };
  const dispatchMultiply = () => {
    dispatch(multiply({ num1, num2 }));
  };
  const dispatchDivision = () => {
    dispatch(division({ num1, num2 }));
  };
  const dispatchModulus = () => {
    dispatch(modulus({ num1, num2 }));
  };

  //   console.log("result : ", result);

  return (
    <>
      <div>
        Num1 :
        <input
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="enter number"
        />
      </div>
      <div>
        Num 2:
        <input
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="enter number"
        />
      </div>
      <div>
        <button onClick={dispatchAddition}>Addition</button>
        <button onClick={dispatchSubtract}>Subtract</button>
        <button onClick={dispatchMultiply}>Multiply</button>
        <button onClick={dispatchDivision}>Division</button>
        <button onClick={dispatchModulus}>Modulus</button>
      </div>
      <div>Result : {result}</div>
    </>
  );
};
export default Calculatore;
