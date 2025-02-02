import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs"; // Added missing import

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" /> {/* Added icon inside Link */}
        Back {/* Added text inside Link */}
      </Link>
    </div>
  );
};

export default BackButton;
