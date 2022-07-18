/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Layout from "../components/App/Layout";
import Job from "../components/Job";
import { JobTypes } from "../types/types";

interface Props {
  jobs: JobTypes[];
}

const Home = ({ jobs }: Props) => {
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const keyword = name;

    if (keyword !== "") {
      const results = jobs.filter((job) => {
        return job.attributes.description
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setFoundJobs(results);
    } else {
      setFoundJobs(jobs);
    }
  };
  return (
    <Layout>
      <div className="text-center  text-blue-600 font-bold  text-2xl pt-8 pb-2 px-6">
        <form onSubmit={handleSearch}>
          <input
            className="px-2 shadow-md rounded text-gray-600 py-1 w-80 mt-8 font-thin focus:outline-0"
            placeholder="Search"
            type="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 p-1  text-white rounded">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="lg:mt-1 lg:mx-20 xl:w-6/12 lg:pt-10 lg:px-2 mb-5">
        <h1 className=" text-blue-600 font-bold mx-4 text-xl   ">
          Latest offers ({foundJobs.length} found)
        </h1>
      </div>

      <div className="lg:mt-1 lg:mx-20 xl:w-6/12 lg:px-2  h-auto mb-20">
        {foundJobs && foundJobs.length > 0 ? (
          foundJobs
            .slice(0, 20)
            .map((job, index) => <Job data={job} key={index} index={index} />)
        ) : (
          <div className="mx-4 my-4 mb-14 pb-12 border-b-2">
            <h2 className="font-semibold text-md my-2 ">No results found! </h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://dublinhospitalityjobs-backend.herokuapp.com/api/jobs"
  );
  const jobsdata = await res.json();
  const jobs = jobsdata.data;

  return {
    props: {
      jobs,
    },
  };
}
