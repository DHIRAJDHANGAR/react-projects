import { DECREMRNT, INCREMENT } from "./action";

const initialData = [
  { id: 1, name: "google", prize: 10 },
  { id: 2, name: "amazon", prize: 20 },
  { id: 3, name: "facebook", prize: 30 },
];

const initState = { counter: 1 };

const CounterReducer = (state = 0, action) => {
  console.log("LN11: ", state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMRNT:
      return state - 1;

    default:
      return state;
  }
};
export default CounterReducer;
