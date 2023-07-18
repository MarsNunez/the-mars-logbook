import Link from "next/link";
import Badge from "./Badge";

const PostCard = () => {
  return (
    <Link href={"/posts/10"}>
      <hr />
      <div className="md:flex gap-7 md:my-2 md:px-3 py-3 md:hover:bg-slate-100 rounded-md duration-150 ease-in-out">
        <div className="flex flex-col gap-1">
          <figure className="hidden">
            <img src="/img/test.jpg" alt="card-image" />
          </figure>
          <p className="font-medium text-xs">Feb 04 2001</p>
          <h3 className="font-medium">Migrating to Linear 101</h3>
          <p className="text-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            felis egestas, congue tortor eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam ac felis egestas, congue tortor
            eget.
          </p>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge name={"Tech"} />
          </div>
        </div>
        <img
          src="/img/test.jpg"
          alt="card-img"
          className="w-44 h-32 rounded-lg object-cover object-center hidden md:block"
        />
      </div>
    </Link>
  );
};

export default PostCard;
