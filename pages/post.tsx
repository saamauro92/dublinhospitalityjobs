/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Header from "../components/App/Header";
import JobForm from "../components/JobForm";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";
import { fetchAPI } from "../utils/utils";
import { NextSeo } from "next-seo";
interface Props {
  jobs: JobTypes[];
}

const Post = ({ jobs }: Props) => {
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  return (
    <>
      <NextSeo
        title="Post a Job  - Dublin Hospitality Jobs"
        description=""
        openGraph={{
          title: "Dublin Hospitality Jobs",
          description: "Fresh Dublin Hospitality jobs offers",
          site_name: "Dublin hospitality jobs",
        }}
      />
      <Header headerBig={false}>
        {jobs && (
          <SearchInput
            jobs={jobs}
            name={name}
            setName={setName}
            foundJobs={foundJobs}
            setFoundJobs={setFoundJobs}
            responsive={true}
          />
        )}
      </Header>

      {jobs && (
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
          responsive={false}
        />
      )}
      <JobForm />
    </>
  );
};

export default Post;
export const getStaticProps: GetStaticProps = async () => {
  const jobs = await fetchAPI("/jobs", { populate: "*" });

  return {
    props: {
      jobs: jobs.data,
    },
    revalidate: 1,
  };
};
