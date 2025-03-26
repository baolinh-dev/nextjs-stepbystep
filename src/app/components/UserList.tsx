"use client"; // Nếu bạn đang dùng App Router trong Next.js 13+

import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Lỗi khi lấy dữ liệu");
      }
      const data = await response.json();
      setUsers(data); 
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []); // useEffect chạy 1 lần khi component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Lỗi: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
