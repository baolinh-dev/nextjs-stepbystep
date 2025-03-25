export default async function BlogPost({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/blog`);
    const posts = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post = posts.find((p: any) => p.id === Number(params.id));

    if (!post) return <h2>🚫 Bài viết không tồn tại!</h2>;

    return (
        <div>
            <h2>📝 {post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}
