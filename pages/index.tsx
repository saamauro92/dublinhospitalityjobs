import { GetStaticProps } from "next/types";
import { useEffect, useState } from "react";
import Header from "../components/App/Header";
import JobsList from "../components/JobsList";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";
import { fetchAPI } from "../utils/utils";
import { NextSeo } from "next-seo";
interface Props {
  jobs: JobTypes[];
}

const Home = ({ jobs }: Props) => {
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <NextSeo
        title="Dublin Hospitality Jobs"
        description="Fresh Dublin Hospitality jobs offers"
        openGraph={{
          title: "Dublin Hospitality Jobs",
          description: "Fresh Dublin Hospitality jobs offers",
          site_name: "Dublin hospitality jobs",
        }}
      />
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
