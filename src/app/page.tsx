"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
    id: number;
    title: string;
};

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/api/blog")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h2>📚 Danh sách bài viết</h2>
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
