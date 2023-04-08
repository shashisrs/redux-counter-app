import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,resetter } from "../redux/slices/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
   <div>
     <div className="flex text-xl items-center">
      <button className="m-2 text-blue-600 border-r-2  border-cyan-800 p-2" onClick={() => dispatch(increment())}>Increment</button>
      <div className="p-2 text-blue-950 text-2xl">{count}</div>

      <button className="m-2 text-blue-600 border-l-2 border-cyan-800 p-2" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    <div className="flex justify-center">
        <button className="text-blue-900 font-bold border-cyan-800 p-2 bg-slate-400 w-full" onClick={()=>dispatch(resetter())}>Reset</button>
    </div>
   </div>
  );
};
export default Counter;
