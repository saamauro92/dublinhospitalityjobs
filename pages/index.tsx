/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import "tw-elements";
import Layout from "../components/App/Layout";
import JobsList from "../components/JobsList";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-center  text-blue-600 font-bold  text-2xl  py-10 px-6">
        <input
          type="text "
          className="px-2 shadow-md rounded py-1 w-80 mt-8 font-thin"
          placeholder="Search"
        />
      </div>

      <JobsList />
    </Layout>
  );
};

export default Home;
