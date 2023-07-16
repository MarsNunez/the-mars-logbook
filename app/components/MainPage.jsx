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
      <MainPostCard />
      <PostCardsWrapper />
      <Link href={"/posts"}>
        <div className="flex items-center gap-1 w-fit pr-2 px-4">
          <p>See all</p>
          <BsArrowRightShort />
        </div>
      </Link>
    </div>
  );
};

export default MainPage;
