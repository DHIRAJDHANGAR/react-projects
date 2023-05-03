import { useDispatch, useSelector } from "react-redux";
import { DECREMRNT, INCREMENT } from "./action";

const FirstComp = () => {
  const selector = useSelector((state) => {
    return state.counterReducer;
  });

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMRNT });
  };

  console.log("LN16: ", selector);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={increment}
            >
              INCREMENT
            </button>
          </div>
          <div className="col-sm" style={{ color: "white" }}>
            {selector}
          </div>
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={decrement}
            >
              DECREMRNT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstComp;
