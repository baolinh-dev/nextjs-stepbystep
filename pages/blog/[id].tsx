import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query; 
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    
    fetch(`/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find((postItem: any) => postItem.id.toString() === id);
        setPost(foundPost);
      });
  }, [id]);

  if (!post) {
    return <h1>Đang tải...</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
