import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between border-b px-3 py-2 items-center">
        <h1 className="text-xl font-medium">
          The <span className="text-[#f96d00]">Mars'</span> Logbook
        </h1>
        <ul className="flex gap-2 text-3xl items-center">
          <li>
            <FaTwitterSquare />
          </li>
          <li>
            <FaGithubSquare />
          </li>
          <li>
            <PiStackOverflowLogoFill className="text-4xl" />
          </li>
        </ul>
      </div>
      <nav>
        <ul className="flex justify-center gap-6 border-b">
          <li className="border-b-2 py-1 border-[#f96d00] font-medium text-[#f96d00]">
            Home
          </li>
          <li className="border-b-2 border-transparent py-1">Posts</li>
          <li className="border-b-2 border-transparent py-1">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
