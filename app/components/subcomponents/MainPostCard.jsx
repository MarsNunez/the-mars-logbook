import Link from "next/link";
import Badge from "./Badge";
import moment from "moment/moment";

const MainPostCard = ({ post }) => {
  const { title, createdAt, entry, id, img, badges } = post.node;
  return (
    <Link href={`/posts/${id}`}>
      <div className="md:bg-slate-100 h-56 md:h-fit md:grid grid-cols-2 relative md:rounded-lg md:overflow-hidden">
        <figure className="w-full h-full">
          <img
            src={img.url}
            alt="MainPostImage"
            className="md:min-h-[280px] h-full w-full object-cover object-center"
          />
        </figure>
        <div
          className="px-5 pb-5 md:pb-0 pt-10 md:pt-0 bg-gradient-to-t from-gray-700 absolute 
        md:static to-transparent bottom-0 text-white md:text-[#222831] w-full 
        md:text-center md:bg-gradient-to-t md:from-transparent h-fit my-auto"
        >
          <p className="text-xs md:font-base md:text-sm">
            {moment(createdAt).format("MMMM Do - YYYY")}
          </p>
          <h3 className="font-medium my-1 md:text-2xl">{title}</h3>
          <p className="text-xs line-clamp-3 md:text-base md:text-gray-600">
            {entry}
          </p>
          <div className="mt-3 hidden md:flex gap-2 justify-center">
            {badges.map((badge) => (
              <Badge id={badge.name} name={badge.name} key={badge.name} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainPostCard;
