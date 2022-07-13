/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import "tw-elements";
import Layout from "../components/App/Layout";
import Job from "../components/Job";
import JobsList from "../components/JobsList";

const Home: NextPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Barista Full Time - ",
      location: "dublin 3",
      description:
        " Lorem ipsum dolor sit html amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "13.00 Per hour",
      start: "now",
    },
    {
      id: 2,
      title: "Cleaner Part Time  ",
      location: "dublin 3",
      description:
        "Cleaner Part Time  Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "11.00 Per hour",
      start: "now",
    },
    {
      id: 3,
      title: "Barwoman - Full Time  ",
      location: "dublin 3",
      description:
        " Barwoman - Full Time Lorem ipsum dolor sit amet html consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
    {
      id: 4,
      title: "shop assistance - Full Time  ",
      location: "dublin 3",
      description:
        "  shop assistance - Full Time Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
    {
      id: 1,
      title: "Barista Full Time - ",
      location: "dublin 3",
      description:
        " Barista Full Time -  Lorem ipsum dolor sit html amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "13.00 Per hour",
      start: "now",
    },
    {
      id: 2,
      title: "Cleaner Part Time  ",
      location: "dublin 3",
      description:
        " Cleaner Part Time  Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "11.00 Per hour",
      start: "now",
    },
    {
      id: 3,
      title: "Barwoman - Full Time  ",
      location: "dublin 3",
      description:
        " Barwoman - Full Time Lorem ipsum dolor sit amet html consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
    {
      id: 4,
      title: "shop assistance - Full Time  ",
      location: "dublin 3",
      description:
        " shop assistance - Full Time - css Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
  ];

  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const keyword = name;

    if (keyword !== "") {
      const results = jobs.filter((job) => {
        return job.description.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundJobs(results);
    } else {
      setFoundJobs(jobs);
    }
  };
  return (
    <Layout>
      <div className="text-center  text-blue-600 font-bold  text-2xl  py-10 px-6">
        <form onSubmit={handleSearch}>
          <input
            className="px-2 shadow-md rounded py-1 w-80 mt-8 font-thin"
            placeholder="Search"
            type="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 p-1  text-white rounded">
            go
          </button>
        </form>
      </div>

      <div className="lg:mt-1 lg:mx-20 xl:w-6/12 lg:pt-10 lg:px-2 mb-5">
        <h1 className=" text-blue-600 font-bold mx-4 text-xl   ">
          Latest offers...
        </h1>
      </div>

      <div className="lg:mt-1 lg:mx-20 xl:w-6/12  lg:pt-10 lg:px-2  h-auto mb-10">
        {" "}
        {/*  ? ADD BORDER ??  */}
        {foundJobs && foundJobs.length > 0 ? (
          foundJobs
            .slice(0, 20)
            .map((job, index) => <Job data={job} key={index} />)
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </Layout>
  );
};

export default Home;
