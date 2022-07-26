/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/App/Header";
import JobsList from "../../components/JobsList";
import SearchInput from "../../components/SearchInput/SearchInput";
import { JobTypes } from "../../types/types";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next/types";
import { fetchAPI } from "../../utils/utils";
interface Props {
  jobs: JobTypes[];
}

const AnySearch = ({ jobs }: Props) => {
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);
  const [param, setParam] = useState("");
  const router = useRouter();

  useEffect(() => {
    function search() {
      if (router.query.q) {
        const searchedWord = router.query.q.toString();

        setParam(searchedWord);
      }
      if (param.length > 0) {
        const keyword = param;

        if (keyword !== "") {
          const results = jobs.filter((job) => {
            return job.attributes.keyword
              .toLowerCase()
              .includes(keyword.toLowerCase());
          });
          setFoundJobs(results);
        } else {
          setFoundJobs(jobs);
        }
      }
    }
    search();
  }, [jobs, param, router]);

  return (
    <>
      <NextSeo
        title={
          "You search for" +
          " " +
          `${router.query.q}` +
          " - Dublin Hospitality Jobs"
        }
        description=""
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

      <p className="text-center lg:mt-2">You search for "{router.query.q}"</p>

      <JobsList foundJobs={foundJobs} />
    </>
  );
};

export default AnySearch;
export const getStaticProps: GetStaticProps = async () => {
  const jobs = await fetchAPI("/jobs", { populate: "*" });

  return {
    props: {
      jobs: jobs.data,
    },
    revalidate: 1,
  };
};
