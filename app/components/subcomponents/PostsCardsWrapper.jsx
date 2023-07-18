import Link from "next/link";
import PostCard from "./PostCard";
import { BsArrowRightShort } from "react-icons/bs";

const PostCardWrapper = () => {
  return (
    <div className="mt-5">
      <PostCard />
      <PostCard />
      <PostCard />
      <Link href={"/posts"}>
        <div className="flex items-center gap-1 w-fit">
          <p>See all</p>
          <BsArrowRightShort />
        </div>
      </Link>
    </div>
  );
};

export default PostCardWrapper;
