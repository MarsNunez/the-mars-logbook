import Navbar from "./Navbar";
import Header from "./subcomponents/Header";
import MainPostCard from "./subcomponents/MainPostCard";
import PostCardsWrapper from "./subcomponents/PostsCardsWrapper";

const MainPage = () => {
  return (
    <div>
      <Navbar page="mainpage" />
      <Header />
      <MainPostCard />
      <div className="px-4">
        <PostCardsWrapper />
      </div>
    </div>
  );
};

export default MainPage;
