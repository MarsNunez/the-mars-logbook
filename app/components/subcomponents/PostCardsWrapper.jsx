import PostCard from "./PostCard";
import { BsArrowRightShort } from "react-icons/bs";

const PostCardWrapper = () => {
  return (
    <div className="mt-5 px-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <div className="flex items-center gap-1 w-fit pr-2">
        <p>See all</p>
        <BsArrowRightShort />
      </div>
    </div>
  );
};

export default PostCardWrapper;
