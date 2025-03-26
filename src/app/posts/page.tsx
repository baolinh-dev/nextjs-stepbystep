"use client";
import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // 🚀 Fetch danh sách bài viết
  useEffect(() => {
    fetch("/api/posts", { cache: "force-cache" }) // Đặt options đúng vị trí
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // 🚀 Thêm bài viết mới
  const addPost = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setPosts([...posts, data]); // Cập nhật danh sách bài viết
  };

  // 🚀 Xóa bài viết
  const deletePost = async (id: number) => {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>

      {/* Form thêm bài viết */}
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Tiêu đề"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Nội dung"
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addPost}>
          Thêm
        </button>
      </div>

      {/* Hiển thị danh sách bài viết */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border p-4 mb-2">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <button
              className="bg-red-500 text-white px-4 py-1 mt-2"
              onClick={() => deletePost(post.id)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
