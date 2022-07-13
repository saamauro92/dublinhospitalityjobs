import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-2 bg-slate-900 relative flex items-center w-full justify-center">
        <div className=" lg:ml-auto px-6 ">
          <Link href="/post">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
