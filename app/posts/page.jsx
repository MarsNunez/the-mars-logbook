import Navbar from "../components/Navbar";
import PostCardWrapper from "../components/subcomponents/PostsCardsWrapper";

const PostsPage = () => {
  return (
    <div className="screen">
      <Navbar page="postspage" />
      <h2 className="text-center text-2xl md:text-4xl mt-5 md:my-14 font-medium">
        Once upon a time on <span className="text-[#f96d00]">Mars...</span>
      </h2>
      <div className="px-4 max-w-4xl mx-auto">
        {/* <PostCardWrapper />
        <PostCardWrapper /> */}
      </div>
    </div>
  );
};

export default PostsPage;
