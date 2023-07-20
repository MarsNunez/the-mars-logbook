import Link from "next/link";
import Badge from "./Badge";
import moment from "moment/moment";

const PostCard = ({ post }) => {
  const { title, createdAt, entry, id, img, badges } = post.node;
  return (
    <Link href={`/posts/${id}`}>
      <hr />
      <div className="md:flex gap-7 md:my-2 md:px-3 py-3 md:hover:bg-slate-100 rounded-md duration-150 ease-in-out">
        <div className="flex flex-col gap-1">
          <figure className="hidden">
            <img src="/img/test.jpg" alt="card-image" />
          </figure>
          <p className="font-medium text-xs">
            {moment(createdAt).format("MMMM Do - YYYY, h:mm a")}
          </p>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm line-clamp-2">{entry}</p>
          <div className="flex gap-2 flex-wrap mt-1">
            {badges.map((badge) => (
              <Badge id={badge.name} name={badge.name} />
            ))}
          </div>
        </div>
        <img
          src={img.url}
          alt="card-img"
          className="w-44 h-32 rounded-lg object-cover object-center hidden md:block"
        />
      </div>
    </Link>
  );
};

export default PostCard;
