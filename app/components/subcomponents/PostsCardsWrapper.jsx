import PostCard from "./PostCard";

const PostCardWrapper = ({ posts }) => {
  console.log(posts);
  return (
    <div className="mt-5">
      {posts.map((post) => {
        return <PostCard key={post.node.id} post={post} />;
      })}
    </div>
  );
};

export default PostCardWrapper;
