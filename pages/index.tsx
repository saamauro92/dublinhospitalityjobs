import { GetStaticProps } from "next/types";
import { useEffect, useState } from "react";
import Header from "../components/App/Header";
import JobsList from "../components/JobsList";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";
import { fetchAPI } from "../utils/utils";

interface Props {
  jobs: JobTypes[];
}

const Home = ({ jobs }: Props) => {
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  return (
    <>
      <Header headerBig={true}>
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
          responsive={true}
        />
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
          responsive={false}
        />
      </Header>

      <JobsList foundJobs={foundJobs} />
    </>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const jobs = await fetchAPI("/jobs", { populate: "*" });

  return {
    props: {
      jobs: jobs.data,
    },
    revalidate: 1,
  };
};
