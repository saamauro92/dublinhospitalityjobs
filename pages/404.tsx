import Link from "next/link";
import { NextPage } from "next/types";
import Header from "../components/App/Header";
import Layout from "../components/App/Layout";

const ErrorPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Header headerBig={false} />
      <div className="md:mt-20 sm:mt-20 lg:mx-auto xl:w-6/12 lg:px-2  h-screen mb-20 ">
        <div className="mx-4 flex flex-col  justify-center py-5  border-b-2 ">
          <h1 className=" text-2xl text-blue-500"> 404 Error</h1>
          <h1 className=" text-xl text-slater-300 mt-4">
            {" "}
            Oops! The page you are looking for was not found.
          </h1>
          <p className="mt-10">Maybe this will help:</p>
          <Link href={"/"}>
            <button className="btn text-white bg-blue-500 mt-4 w-20 rounded py-3">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
