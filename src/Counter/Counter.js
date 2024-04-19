import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "./CountSlice";

const Counter = () => {
    // const [count,setCount]=useState(0);
    const initialState=useSelector(state=>state.counter.firstValue);
    console.log("initialState",initialState)
    const dispatch = useDispatch()

  return (
    <div>
      <div className="container m-4 p-4 text-center d-flex justify-content-center align-items-center">
      <div className="border border-info rounded p-5">
      <h2 className="mb-5">Counter</h2>
        <Button className="me-2" type="button" onClick={()=>dispatch(increment())}>Increment</Button>{" "}
        <Button className="me-2 " >{initialState}</Button>{" "}
        <Button className="me-2" type="button" onClick={()=>dispatch(decrement())}>Decrement</Button>{" "}
      </div>
      </div>
    </div>
  );
};

export default Counter;
