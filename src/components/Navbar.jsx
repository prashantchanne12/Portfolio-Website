import LinkedInImage from "../assets/images/linkedin.png";
import GitHubImage from "../assets/images/github.png";
import { MdAlternateEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-5 px-2 flex items-center">
      <span className="font-semibold text-white text-xl tracking-wider bg-black p-2 rounded">
        PC
      </span>
      <div className="flex ml-16 items-center space-x-5">
        <div>
          <img
            src={LinkedInImage.src}
            className="w-full h-20"
            alt="Linkedin Logo"
          />
        </div>
        <div>
          <img
            src={GitHubImage.src}
            className="w-full h-11"
            alt="Linkedin Logo"
          />
        </div>
        <div className="flex items-center">
          <MdAlternateEmail size={22} />
          <span className="font-medium text-gray-800"> prchanne@iu.edu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
