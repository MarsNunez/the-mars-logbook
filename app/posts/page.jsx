"use client";
import Navbar from "../components/Navbar";
import PostCardWrapper from "../components/subcomponents/PostsCardsWrapper";
import { use } from "react";
import { getPosts } from "../../services";

const PostsPage = () => {
  const posts = use(getPosts()) || [];
  return (
    <div className="screen">
      <Navbar page="postspage" />
      <h2 className="text-center text-2xl md:text-4xl mt-5 md:my-14 font-medium">
        Once upon a time on <span className="text-[#f96d00]">Mars...</span>
      </h2>
      <div className="px-4 max-w-4xl mx-auto">
        <PostCardWrapper posts={posts.reverse()} />
      </div>
    </div>
  );
};

export default PostsPage;
