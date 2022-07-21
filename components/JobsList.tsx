import { Dispatch, SetStateAction } from "react";
import { JobTypes } from "../types/types";
import Job from "./Job";

interface Props {
  foundJobs?: JobTypes[];
}

const JobsList = ({ foundJobs }: Props): JSX.Element => {
  return (
    <>
      <div className="lg:mt-1 lg:mx-auto text-center xl:w-6/12 lg:pt-10 lg:px-2 mb-5 ">
        {foundJobs && foundJobs.length > 0 && (
          <h1 className=" text-blue-600 font-bold mx-4 text-xl   ">
            Latest offers ({foundJobs.length} found)
          </h1>
        )}
      </div>
      <div className="lg:mt-1 lg:mx-auto xl:w-6/12 lg:px-2  h-auto mb-20 ">
        {foundJobs && foundJobs.length > 0 ? (
          foundJobs
            .slice(0, 20)
            .reverse()
            .map((job, index) => <Job data={job} key={index} index={index} />)
        ) : (
          <div className="mx-4 my-4 mb-14 pb-12 border-b-2">
            <h2 className="font-semibold text-md my-2 ">No jobs found! </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default JobsList;
