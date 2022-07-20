import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   py-2  z-20 w-full relative flex  justify-between px-20 ">
        <div>
          <h2 className="font-semibold text-slate-300 text-4xl ">Dublin</h2>
          <h4 className="font-semibold text-white text-xl mb-6">
            Hospitality Jobs
          </h4>
        </div>
        <div className=" lg:mt-1 lg:mx-20  lg:px-2  h-auto ">
          <Link href="/post">
            <button
              type="button"
              className="inline-block px-6 py-2.5  bg-white  text-slate-600 font-bold  text-xs leading-tight  rounded shadow-md  hover:shadow-lg focus:bg-slate-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-200 active:shadow-lg transition duration-150 ease-in-out"
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
