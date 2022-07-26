import { Dispatch, SetStateAction, useState } from "react";
import { JobTypes } from "../../types/types";
import { useRouter } from "next/router";

interface Props {
  jobs?: JobTypes[];
  foundJobs?: JobTypes[];
  setFoundJobs?: Dispatch<SetStateAction<string>> | any;
  name: string;
  setName: Dispatch<SetStateAction<string>> | any;
  setMakeShallowPage?: Dispatch<SetStateAction<string>> | any;
  responsive?: boolean;
}

const SearchInput = ({
  jobs,
  name,
  setName,
  foundJobs,
  setFoundJobs,
  responsive,
}: Props): JSX.Element => {
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    if (name.length === 0) return router.push("/");
    const keyword = name;

    if (keyword !== "") {
      const results = jobs?.filter((job) => {
        return job.attributes.keyword
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      /*       setFoundJobs(results); */
      router.push(
        { pathname: `/search/${name}`, query: { search: name } },
        `/search?q=${name}`
      );
    } else {
      setFoundJobs(jobs);
    }
  };

  return (
    <>
      <div
        className={
          responsive
            ? "text-center  text-blue-600 font-bold  text-base md:text-2xl pb-2 hidden sm:inline-block"
            : "text-center  text-blue-600 font-bold  md:text-2xl  sm:hidden   "
        }
      >
        <input
          className={
            router.pathname.includes("/jobs") ||
            router.pathname.includes("/post")
              ? "px-2 shadow-sm   rounded-tl-md  rounded-bl-md rounded-br-none  rounded-tr-none bg-zinc-100  pl-5 text-gray-600  py-2 my-5   w-[16rem] sm:w-[15rem]  md:w-[24rem] lg:w-[30rem] mt-8 font-thin focus:outline-none "
              : "px-2 shadow-md rounded-tl-md  rounded-bl-md rounded-br-none  rounded-tr-none pl-5 text-gray-600  w-[16rem] sm:w-[24rem] md:w-[28rem] lg:w-[33rem] py-2   mt-8 font-thin focus:outline-none "
          }
          placeholder="Search job"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          onClick={handleSearch}
          className={
            router.pathname.includes("/jobs") ||
            router.pathname.includes("/post")
              ? "bg-zinc-100 p-2  text-gray-500  sm:inline-block  border-slate-300 shadow-sm rounded-tr-md  rounded-br-md pr-5 "
              : "bg-white p-2  text-gray-500 rounded-tr-md  rounded-br-md  pr-5 "
          }
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
