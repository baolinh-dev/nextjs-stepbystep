import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() { 
    /* eslint-disable @typescript-eslint/no-explicit-any */
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts") // Gọi API từ client
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>📝 Danh sách bài viết</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
