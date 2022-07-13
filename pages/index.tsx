/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import "tw-elements";
import Layout from "../components/App/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="mb-40">
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-slate-900 relative flex items-center w-full justify-center">
          <div className=" lg:ml-auto px-6">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Post Job
            </button>
          </div>
        </nav>

        <div className="flex flex-wrap justify-center bg-slate-900">
          <img
            src="https://res.cloudinary.com/dtycp96d8/image/upload/v1657723013/89814f856c3047c1b6705124d50f75f4_7_xxtbci.png"
            className="max-w-sm w-80 h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
            alt=""
          />
        </div>

        <div className="text-center bg-gray-50 text-blue-600 font-bold  text-2xl  py-16 h-screen px-6">
          Latest hospitality jobs in Dublin...
        </div>
      </section>
    </Layout>
  );
};

export default Home;
