"use client"; // Nếu dùng App Router trong Next.js 13+

import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Cập nhật thời gian mỗi giây
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold">Đồng hồ</h2>
      <p className="text-2xl mt-2">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
