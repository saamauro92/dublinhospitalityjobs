import Link from "next/link";
import { JobTypes } from "../../types/types";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  headerBig?: boolean;
  jobs?: JobTypes;
}

const NavBar = ({ headerBig, jobs }: Props): JSX.Element => {
  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg  py-4  z-20 w-full relative flex  justify-between px-5 md:px-15 lg:px-20 "
        }
      >
        <div className="flex flex-col align-middle items-baseline ">
          <Link href={"/"}>
            <h2
              className={
                headerBig
                  ? "text-slate-300 font-semibold  lg:text-4xl cursor-pointer text-base md:text-2xl"
                  : "text-slate-600 font-semibold  lg:text-4xl cursor-pointer text-base md:text-2xl"
              }
            >
              Dublin
            </h2>
          </Link>
          <Link href={"/"}>
            <h4
              className={
                headerBig
                  ? "font-semibold text-white text-sm md:text-base lg:text-xl mb-6 cursor-pointer"
                  : "font-semibold text-slate-400 text-sm md:text-base lg:text-xl mb-6 cursor-pointer "
              }
            >
              Hospitality Jobs
            </h4>
          </Link>
        </div>

        <div className=" lg:mt-1 h-auto ">
          <Link href="/post">
            <button
              type="button"
              className={
                headerBig
                  ? "inline-block px-6 md:py-4 lg:py-6 py-3   bg-white  text-slate-600 font-bold  text-xs leading-tight  rounded shadow-md  hover:shadow-lg hover:bg-slate-100 focus:bg-slate-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-300 active:shadow-lg transition duration-150 ease-in-out"
                  : "inline-block px-6 md:py-4 lg:py-6 py-3   bg-blue-600  text-white font-bold  text-xs leading-tight  rounded shadow-md  hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out"
              }
            >
              Post Job
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
