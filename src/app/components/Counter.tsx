"use client"; // Nếu bạn đang dùng App Router trong Next.js 13+

import { useState, useEffect } from "react";

type CounterProps = {
  initialCount: number;
};

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  // Khi component mount, lấy dữ liệu từ localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null && !isNaN(parseInt(savedCount, 10))) {
      setCount(parseInt(savedCount, 10));
    } else {
      setCount(initialCount); // Nếu không có dữ liệu, dùng giá trị mặc định
    }
  }, []); // Chạy 1 lần khi component mount

  // Mỗi khi count thay đổi, lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Giá trị hiện tại: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        Tăng
      </button>
    </div>
  );
};

export default Counter;
