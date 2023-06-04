import React from 'react';
type Props = {
  postsData: Promise<Post[]>;
};
export default async function UserPosts({ postsData }: Props) {
  const posts = await postsData;
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
