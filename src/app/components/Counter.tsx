"use client"
import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

const Counter: React.FC<CounterProps> = ({ initialCount }) => { 
  const [count, setCount] = useState(initialCount)
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2>Giá trị ban đầu: {initialCount}</h2> 
      <button onClick={() => setCount(count + 1)}>Tăng</button> 
      <h2>Giá trị giá trị hiện tại: {count}</h2> 
    </div>
  );
};

export default Counter;
