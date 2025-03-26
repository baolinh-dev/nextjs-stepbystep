"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    // Dừng nếu count <= 0
    if (count <= 0) return;

    // Tạo một interval để giảm count mỗi giây
    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // Cleanup khi count thay đổi hoặc component bị unmount
    return () => clearInterval(intervalId);
  }, [count]); // useEffect chạy lại khi count thay đổi

  return (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold">Đếm ngược</h2>
      <p className="text-3xl mt-2 text-red-500">{count}</p>
    </div>
  );
};

export default Clock;
