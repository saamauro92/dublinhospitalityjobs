import { JobTypes } from "../types/types";

type Props = {
  data: JobTypes;
};

const Job = ({ data }: Props): JSX.Element => {
  return (
    <>
      <div className="mx-4 my-4 mb-14 pb-12 border-b-2">
        <h2 className="font-semibold text-md my-2 ">{data.title} </h2>
        <p className=" text-md my-2 ">{data.location}</p>
        <p className=" text-md my-2 ">{data.description}</p>
        <p className=" text-md my-2 ">{data.rate}</p>
        <p className=" text-md my-2 ">{data.start}</p>

        <button className="float-right px-6 py-2.5 bg-blue-600 text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Read More / Apply
        </button>
      </div>
    </>
  );
};

export default Job;
