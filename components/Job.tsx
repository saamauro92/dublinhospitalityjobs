import { JobTypes } from "../types/types";

type Props = {
  data: JobTypes;
};

const Job = ({ data }: Props): JSX.Element => {
  return (
    <>
      <div className="mx-4 my-4 mb-14 pb-10 border-b-2">
        <h2 className="font-semibold text-md my-2 ">{data.title} </h2>
        <p className=" text-md my-2 ">{data.location}</p>
        <p className=" text-md my-2 ">{data.description}</p>
        <p className=" text-md my-2 ">{data.rate}</p>
        <p className=" text-md my-2 ">{data.start}</p>

        <h2 className=" float-right ">Read More / Apply</h2>
      </div>
    </>
  );
};

export default Job;
