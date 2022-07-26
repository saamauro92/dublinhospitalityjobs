import Link from "next/link";
import { JobTypes } from "../../types/types";

interface Props {
  headerBig?: boolean;
}

const NavBar = ({ headerBig }: Props): JSX.Element => {
  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg  py-4  z-20 w-full relative flex  justify-between px-5 md:px-15 lg:px-20 "
        }
      >
        <div className="flex flex-col items-start ">
          <h2
            className={
              headerBig
                ? "text-slate-300 font-semibold  lg:text-4xl cursor-pointer text-base md:text-2xl"
                : "text-slate-600 font-semibold  lg:text-4xl cursor-pointer text-base md:text-2xl"
            }
          >
            <Link href={"/"}>Dublin</Link>
          </h2>
          <h3
            className={
              headerBig
                ? "font-semibold text-white text-sm md:text-base lg:text-2xl mb-6 cursor-pointer"
                : "font-semibold text-slate-400 text-sm md:text-base lg:text-xl mb-6 cursor-pointer "
            }
          >
            <Link href={"/"}>Hospitality Jobs</Link>
          </h3>
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
              Post a Job
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
