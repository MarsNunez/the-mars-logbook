import PostCard from "./PostCard";

const PostCardWrapper = ({ posts }) => {
  return (
    <div className="mt-5 max-w-xl mx-auto">
      {posts.map((post) => {
        return <PostCard key={post.node.id} post={post} />;
      })}
    </div>
  );
};

export default PostCardWrapper;
