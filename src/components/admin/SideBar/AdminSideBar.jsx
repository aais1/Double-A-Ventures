import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineStore } from "react-icons/md";

const AdminSideBar = () => {
  return (
    <aside className="bg-gray-800 sticky hidden md:block top-0 h-screen ">
      <header className="px-4 py-3">
        <div className="text-white text-2xl flex items-center justify-between  font-semibold">
          Double'A Ventures <MdOutlineStore style={{ fontSize: "2.4rem" }} />
        </div>
      </header>
      <nav className="px-4 py-3 gap-y-4 font-semibold text-lg">
        <Link
          to="./analytics"
          className=" w-[90%] flex justify-between items-center gap-x-4  mt-4 hover:text-white text-gray-300"
        >
          Analytics <IoAnalyticsOutline style={{ fontSize: "2rem" }} />{" "}
        </Link>
        <Link
          to="./product-listings"
          className=" w-[90%] justify-between flex items-center gap-x-4 mt-4 hover:text-white text-gray-300"
        >
          Products <AiFillProduct style={{ fontSize: "2rem" }} />
        </Link>
        <Link
          to="./users"
          className="w-[90%] justify-between mt-4 flex items-center gap-x-4 hover:text-white text-gray-300"
        >
          Users <FaUsers style={{ fontSize: "2rem" }} />
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
