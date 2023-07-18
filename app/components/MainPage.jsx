import Link from "next/link";
import Navbar from "./Navbar";
import Header from "./subcomponents/Header";
import MainPostCard from "./subcomponents/MainPostCard";
import PostCardsWrapper from "./subcomponents/PostsCardsWrapper";
import { BsArrowRightShort } from "react-icons/bs";

const MainPage = () => {
  return (
    <div>
      <Navbar page="mainpage" />
      <Header />
      <div className="md:px-4 max-w-4xl mx-auto">
        <MainPostCard />
        <div className="px-4 md:px-0">
          <PostCardsWrapper />
        </div>
        <Link href={"/posts"}>
          <div className="flex items-center gap-1 w-fit pl-4 md:pl-0 mt-2">
            <p>See all</p>
            <BsArrowRightShort />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
