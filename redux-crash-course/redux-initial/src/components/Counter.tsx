import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h1>Counter X</h1>
      <button onClick={() => dispatch(increment())}>Increment</button> <br />
      <button onClick={() => dispatch(incrementByValue(10))}>incrementByValue10</button>
      <div>
        <span>{count}</span>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
