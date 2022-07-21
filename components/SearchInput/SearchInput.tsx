import { Dispatch, SetStateAction, useState } from "react";
import { JobTypes } from "../../types/types";
import { useRouter } from "next/router";

interface Props {
  jobs: JobTypes[];
  foundJobs?: JobTypes[];
  setFoundJobs?: Dispatch<SetStateAction<string>> | any;
  name: string;
  setName: Dispatch<SetStateAction<string>> | any;
  setMakeShallowPage?: Dispatch<SetStateAction<string>> | any;
}

const SearchInput = ({
  jobs,
  name,
  setName,
  foundJobs,
  setFoundJobs,
}: Props): JSX.Element => {
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    if (router.pathname.includes("/post")) {
      if (name.length === 0) return router.push("/");
    }
    if (router.pathname.includes("/jobs")) {
      if (name.length === 0) return router.push("/");
    }
    if (router.pathname.includes("/post"))
      return router.push(
        { pathname: `/search/${name}`, query: { search: name } },
        `/search/${name}`
      );
    if (router.pathname.includes("/jobs"))
      return router.push(
        { pathname: `/search/${name}`, query: { search: name } },
        `/search/${name}`
      );

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
    <>
      <div className="text-center  text-blue-600 font-bold  text-2xl  pb-2 ">
        <input
          className="px-2 shadow-md  rounded-tl-md  rounded-bl-md  pl-5 text-gray-600  py-2 w-[16] md:w-[28rem] lg:w-[33rem] mt-8 font-thin focus:outline-none "
          placeholder="Search"
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          onClick={handleSearch}
          className="bg-white p-2  text-gray-500 rounded-tr-md  rounded-br-md pr-5 "
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
