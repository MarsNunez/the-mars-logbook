import Link from "next/link";
import Badge from "./Badge";

const PostCard = () => {
  return (
    <Link href={"/posts/10"}>
      <div className="border-t pt-3 flex flex-col gap-1 pb-4">
        <figure className="hidden">
          <img src="/img/test.jpg" alt="card-image" />
        </figure>
        <p className="font-medium text-xs">19 Jan 2001</p>
        <h3 className="font-medium">Migrating to Linear 101</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac felis
          egestas, congue tortor eget.
        </p>
        <div className="flex gap-2 flex-wrap mt-1">
          <Badge name={"Tech"} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
