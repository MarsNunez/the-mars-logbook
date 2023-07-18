import Link from "next/link";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";
const Navbar = ({ page }) => {
  return (
    <div>
      <div className="flex justify-between border-b px-3 py-2 items-center">
        <Link href={"/"}>
          <h1 className="text-xl font-medium md:text-3xl">
            The <span className="text-[#f96d00]">Mars'</span> Logbook
          </h1>
        </Link>
        <div className="flex gap-2 text-3xl md:text-5xl items-center">
          <Link href={"https://twitter.com/MarsNunezDev"} target="_blank">
            <FaTwitterSquare />
          </Link>
          <Link href={"https://github.com/MarsNunez"} target="_blank">
            <FaGithubSquare />
          </Link>
          <Link
            href={"https://stackoverflow.com/users/11356864/mars-nunez"}
            target="_blank"
          >
            <PiStackOverflowLogoFill className="text-4xl md:text-[3.50rem]" />
          </Link>
        </div>
      </div>
      <nav>
        <div className="flex justify-center gap-3 border-b md:text-lg">
          <Link href={"/"}>
            <div
              className={`border-b-2 py-1 md:py-2 ${
                page == "mainpage"
                  ? "border-[#f96d00] font-medium text-[#f96d00]"
                  : "border-transparent"
              } hover:bg-slate-100 px-2`}
            >
              Home
            </div>
          </Link>
          <Link href={"/posts"}>
            <div
              className={`border-b-2 py-1 md:py-2 ${
                page == "postspage"
                  ? "border-[#f96d00] font-medium text-[#f96d00]"
                  : "border-transparent"
              } hover:bg-slate-100 px-2`}
            >
              Posts
            </div>
          </Link>
          <Link href={"/about"}>
            <div
              className={`border-b-2 py-1 md:py-2 ${
                page == "aboutpage"
                  ? "border-[#f96d00] font-medium text-[#f96d00]"
                  : "border-transparent"
              } hover:bg-slate-100 px-2`}
            >
              About
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
