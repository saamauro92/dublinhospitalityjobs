/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/App/Header";
import Layout from "../components/App/Layout";
import JobForm from "../components/JobForm";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";

interface Props {
  jobs: JobTypes[];
}

const Post = ({ jobs }: Props) => {
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  return (
    <Layout>
      <Header headerBig={false}>
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
        />
      </Header>

      <JobForm />
    </Layout>
  );
};

export default Post;
