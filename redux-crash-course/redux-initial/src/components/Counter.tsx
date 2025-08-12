import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";
 
export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h1>Counter X</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>
        <span>{count}</span>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
