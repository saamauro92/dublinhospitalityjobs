import { JobTypes } from "../types/types";

type Props = {
  data: JobTypes;
  index: number;
};

const Job = ({ data, index }: Props): JSX.Element => {
  return (
    <>
      <div
        className={
          index == 0
            ? " mx-4 flex flex-col  justify-center py-5  border-b-2 border-t-2"
            : "mx-4 flex flex-col justify-center py-5 border-b-2 "
        }
      >
        <h2 className="font-semibold text-md my-2 capitalize">{data.title} </h2>

        <div className="flex space-x-2 items-en  items-baseline ">
          <i className="fas fa-map-marker-alt"></i>
          <p className=" text-md my-2 capitalize ">{data.location}</p>
        </div>
        <div className="flex space-x-2 items-en  items-baseline ">
          <i className="fas fa-euro-sign"></i>

          <p className=" text-md my-2 capitalize">{data.rate}</p>
        </div>

        <p className=" text-md my-2  capitalize">{data.description}</p>

        <div>
          <p className=" text-md my-2 capitalize float-left">
            Posted: {data.start}
          </p>

          <button className="float-right px-6 py-2.5 bg-blue-600 text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Read More / Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Job;
