/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/App/Header";

import Layout from "../components/App/Layout";
import Job from "../components/Job";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";
import { fetchAPI } from "../utils";

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
      <Header headerBig={true}>
        <SearchInput
          handleSearch={handleSearch}
          name={name}
          setName={setName}
        />
      </Header>

      <div className="lg:mt-1 lg:mx-auto text-center xl:w-6/12 lg:pt-10 lg:px-2 mb-5">
        <h1 className=" text-blue-600 font-bold mx-4 text-xl   ">
          Latest offers ({foundJobs.length} found)
        </h1>
      </div>

      <div className="lg:mt-1 lg:mx-auto xl:w-6/12 lg:px-2  h-auto mb-20 ">
        {foundJobs && foundJobs.length > 0 ? (
          foundJobs
            .slice(0, 20)
            .reverse()
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

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await fetchAPI("/jobs", { populate: "*" });

  return {
    props: {
      jobs: jobs?.data,
    },
    revalidate: 1,
  };
};
