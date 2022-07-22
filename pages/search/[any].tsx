import { useRouter } from "next/router";
import { useState, useEffect, SetStateAction } from "react";
import Header from "../../components/App/Header";
import JobsList from "../../components/JobsList";
import SearchInput from "../../components/SearchInput/SearchInput";
import { JobTypes } from "../../types/types";
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
      if (router.query.search) {
        const searchedWord = router.query.search.toString();

        setParam(searchedWord);
      }
      if (param.length > 0) {
        const keyword = param;

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
      }
    }
    search();
  }, [jobs, param, router]);

  return (
    <>
      <Header headerBig={true}>
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

export default AnySearch;
