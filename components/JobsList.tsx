import { JobTypes } from "../types/types";
import Job from "./Job";

const JobsList = (): JSX.Element => {
  const jobs = [
    {
      id: 1,
      title: "Barista Full Time - ",
      location: "dublin 3",
      description:
        " Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "13.00 Per hour",
      start: "now",
    },
    {
      id: 2,
      title: "Cleaner Part Time  ",
      location: "dublin 3",
      description:
        " Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "11.00 Per hour",
      start: "now",
    },
    {
      id: 3,
      title: "Barman - Full Time  ",
      location: "dublin 3",
      description:
        " Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
    {
      id: 4,
      title: "Barman - Full Time  ",
      location: "dublin 3",
      description:
        " Lorem ipsum dolor sit amet consecteturetur adipi adipisicing elit. Qui odi   omnis  quaerat? Tenetur. officiis nostrum voluptates modi praesentium rerum totam ab",
      rate: "12.00 Per hour",
      start: "now",
    },
  ];

  return (
    <>
      <div className="lg:mt-1 lg:mx-20 xl:w-6/12 lg:pt-10 lg:px-2 mb-5">
        <h1 className=" text-blue-600 font-bold mx-4 text-xl   ">
          Latest offers...
        </h1>
      </div>

      <div className="lg:mt-1 lg:mx-20 xl:w-6/12  border lg:pt-10 lg:px-2  mb-10">
        {jobs.length > 0 && jobs.map((job) => <Job data={job} key={job.id} />)}
      </div>
    </>
  );
};

export default JobsList;
