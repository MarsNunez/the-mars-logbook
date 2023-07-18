"use client";
import Navbar from "@/app/components/Navbar";
import Badge from "@/app/components/subcomponents/Badge";
import PostCardWrapper from "@/app/components/subcomponents/PostsCardsWrapper";
import { getBadgeIcon } from "@/app/helpers";

const Post = () => {
  return (
    <div className="screen">
      <Navbar page={"postspage"} />
      <div className="p-3">
        <div className="border-b mb-3">
          <h2 className="text-3xl font-semibold mb-3">
            Stop Procrastinating, this is your life ashole!
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap mt-1 mb-5">
          <Badge bigger={true} icon={getBadgeIcon("life")} name={"Life"} />
        </div>
        <p className="mb-5 italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          arcu urna, blandit eget tellus ut, hendrerit consequat lacus. Praesent
          eu ligula vitae arcu pharetra facilisis.
        </p>
        <img src="/img/test.jpg" alt="post-img" />
        <p className="mt-5 first-letter:text-7xl first-letter:float-left first-letter:mr-3 leading-7 mb-5">
          Where’s this Huberman Lab podcast episode that I recently listened to
          on Spotify called Leverage Dopamine to Overcome Procrastination &
          Optimize Effort. I’ll also link the Youtube version here in case you
          don’t have Spotify. The episode is a deep dive into how dopamine works
          in relation to driving our cravings and sense of motivation. There is
          A LOT of detail and I had to slow down from my usual listening speed
          and relisten to some places, but understanding the full dopamine
          system was very insightful. After he covers how the system naturally
          works, he explains things you can do in order to optimize both
          baseline and peak dopamine levels to get yourself into a state of
          motivation and stay in it.
        </p>
        <hr />
        <h3 className="text-2xl font-medium mt-5">3 Latest posts</h3>
        <PostCardWrapper />
      </div>
    </div>
  );
};

export default Post;
