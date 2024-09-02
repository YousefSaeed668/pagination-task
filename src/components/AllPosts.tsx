import { Post } from "./Post";

async function getAllPosts(pageNumber: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
  );
  const data = await response.json();
  return data;
}

export async function AllPosts({ pageNumber }: { pageNumber: number }) {
  const allPosts: Post[] = await getAllPosts(pageNumber);
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 min-h-screen">
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
