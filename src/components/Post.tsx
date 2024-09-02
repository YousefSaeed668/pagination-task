export function Post({ post }: { post: Post }) {
  return (
    <div className="p-4 shadow-md">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
