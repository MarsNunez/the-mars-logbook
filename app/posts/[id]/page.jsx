// "use client"; NO USAR
import { getPosts } from "@/services";
import { use } from "react";

import Navbar from "@/app/components/Navbar";
import Badge from "@/app/components/subcomponents/Badge";
import PostCardWrapper from "@/app/components/subcomponents/PostsCardsWrapper";
import { getBadgeIcon } from "@/app/helpers";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

// INSTALL THIS
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
// INSTALL THIS

const Post = ({ params }) => {
  const post = use(getPosts()).filter((post) => post.node.id == params.id)[0];
  const latestPosts = use(getPosts()).reverse().slice(0, 3);
  const { title, entry, img, badges, content } = post.node;

  return (
    <div className="screen">
      <Navbar page={"postspage"} />
      <div className="p-3 md:px-6 max-w-4xl mx-auto">
        <div className="border-b mb-3">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-8 md:mt-5">
            {title}
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap mt-1 md:mt-7 mb-5">
          {badges.map((badge) => (
            <Badge
              key={badge.name}
              bigger={true}
              icon={getBadgeIcon(badge.name)}
              name={badge.name.charAt(0).toUpperCase() + badge.name.slice(1)}
            />
          ))}
        </div>
        <img
          src={img.url}
          alt="post-img"
          className="mx-auto md:min-h-[390px] h-full max-h-[200px] object-cover shadow-2xl mt-8"
        />
        <p className="text-center italic text-sm md:text-base mt-7 md:mt-10">
          {entry}
        </p>
        <div className="content mt-5 md:text-lg leading-7 md:leading-9 mb-5 text-justify">
          {/* HERE */}
          <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
          {/* HERE */}
        </div>
        <hr />
        {/* <h3 className="text-2xl font-medium mt-5 text-center">
          Related <span className="text-[#f96d00]">Video</span>.
        </h3>
        <iframe
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          // width="788.54"
          className="w-full mt-5 h-full min-h-[220px] sm:min-h-[443px]"
          type="text/html"
          src="https://www.youtube.com/embed/LSmzPwaemaQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        ></iframe>
        <hr /> */}
        <h3 className="text-2xl font-medium mt-5 text-center">
          My <span className="text-[#f96d00]">3 </span>Latest posts
        </h3>
        <PostCardWrapper posts={latestPosts} />
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

export default Post;
