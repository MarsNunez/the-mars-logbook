import { FaMicrochip, FaClover, FaPoop } from "react-icons/fa6";
import { BsFillBookFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { BiSolidPlanet } from "react-icons/bi";

export const getBadgeIcon = (label) => {
  let icon;
  switch (label) {
    case "tech":
      icon = <FaMicrochip />;
      break;
    case "life":
      icon = <BiSolidPlanet />;
      break;
    case "books":
      icon = <BsFillBookFill />;
      break;
    case "shit":
      icon = <FaPoop />;
      break;
    case "random":
      icon = <FaClover />;
      break;
    default:
      icon = <HiSparkles />;
  }

  return icon;
};
