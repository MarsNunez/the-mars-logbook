"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import Header from "./subcomponents/Header";
import MainPostCard from "./subcomponents/MainPostCard";
import PostCardsWrapper from "./subcomponents/PostsCardsWrapper";
import { BsArrowRightShort } from "react-icons/bs";

import { use } from "react";
import { getPosts } from "../../services";

const MainPage = () => {
  const posts = use(getPosts()) || [];
  return (
    <div>
      <Navbar page="mainpage" />
      <Header />
      <div className="md:px-4 max-w-4xl mx-auto">
        <MainPostCard post={posts.reverse()[0]} />
        <div className="px-4 md:px-0">
          <PostCardsWrapper posts={posts.reverse().reverse().slice(1)} />
        </div>
        <Link href={"/posts"}>
          <div className="flex items-center gap-1 w-fit mt-3 mx-auto">
            <p className="">See all</p>
            <BsArrowRightShort />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
