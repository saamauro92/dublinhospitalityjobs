/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import "tw-elements";
import Layout from "../components/App/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-center bg-gray-100 text-blue-600 font-bold  text-2xl  py-16 h-screen px-6">
        <h1>Latest hospitality jobs in Dublin...</h1>
        <input
          type="text "
          className="px-2 shadow-md rounded py-1 w-80 mt-8"
          placeholder="search job"
        />
      </div>
    </Layout>
  );
};

export default Home;
