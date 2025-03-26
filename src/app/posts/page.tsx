// src/app/posts/page.tsx
import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};
async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts(); // Fetch dữ liệu trên server trước khi render

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">
              {post.content || "No content available."}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
