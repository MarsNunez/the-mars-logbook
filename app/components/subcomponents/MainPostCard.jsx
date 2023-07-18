import Link from "next/link";
import Badge from "./Badge";

const MainPostCard = () => {
  return (
    <Link href={"/posts/90"}>
      <div className="md:bg-slate-100 h-56 md:h-fit md:grid grid-cols-2 relative md:rounded-lg md:overflow-hidden">
        <figure className="w-full h-full">
          <img
            src="/img/test2.jpeg"
            alt="MainPostImage"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div
          className="px-5 pb-5 md:pb-0 pt-10 md:pt-0 bg-gradient-to-t from-gray-700 absolute 
        md:static to-transparent bottom-0 text-white md:text-[#222831] w-full 
        md:text-center md:bg-gradient-to-t md:from-transparent h-fit my-auto"
        >
          <p className="text-xs md:font-base md:text-sm">Jan 20 2022</p>
          <h3 className="font-medium my-1 md:text-2xl">
            Adventures from my past
          </h3>
          <p className="text-xs line-clamp-3 md:text-base md:text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            felis egestas, congue tortor eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam ac felis egestas, congue tortor
            eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            felis egestas, congue tortor eget.
          </p>
          <div className="mt-3 hidden md:flex justify-center">
            <Badge name={"Life"} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainPostCard;
