import Navbar from "@/app/components/Navbar";

const Post = () => {
  return (
    <div>
      <Navbar page={"postspage"} />
      <div className="p-3">
        <div className="border-b mb-3">
          <h2 className="text-3xl font-semibold mb-3">
            Stop Procrastinating, this is your life ashole!
          </h2>
        </div>
        <img src="/img/test.jpg" alt="post-img" />
      </div>
    </div>
  );
};

export default Post;
