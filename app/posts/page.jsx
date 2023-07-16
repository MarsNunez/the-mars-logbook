import Navbar from "../components/Navbar";
import PostCardWrapper from "../components/subcomponents/PostsCardsWrapper";

const PostsPage = () => {
  return (
    <div>
      <Navbar page="postspage" />
      <h2 className="text-center text-2xl mt-5 font-medium">
        Once upon a time in <span className="text-[#f96d00]">Mars...</span>
      </h2>
      <PostCardWrapper />
    </div>
  );
};

export default PostsPage;
