import Link from "next/link";
import { JobTypes } from "../types/types";
import { useEffect, useState } from "react";
import Moment from "react-moment";
type Props = {
  data: JobTypes;
  index: number;
};

const Job = ({ data, index }: Props): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    /*  this sorts markup intervewave issue at rehydrate*/
    setHasMounted(true);
  }, []);

  return (
    <>
      <div
        className={
          index == 0
            ? " mx-4 flex flex-col  justify-around gap-1 py-5  border-b-2 border-t-2"
            : "mx-4 flex flex-col justify-around gap-1 py-5 border-b-2 "
        }
      >
        <Link href={`/jobs/${data.attributes.slug}`}>
          <h1 className="font-semibold text-md md:text-xl my-2 capitalize leading-relaxed cursor-pointer text-blue-600">
            {" "}
            {data.attributes.title}{" "}
          </h1>
        </Link>
        <div className="flex space-x-2 items-en  items-baseline   ">
          <i className="fas fa-map-marker-alt"></i>
          <p className="text-sm sm:text-md my-2 capitalize text-slater-800  leading-relaxed">
            {data.attributes.location}
          </p>
        </div>
        <div className="flex space-x-2 items-en  items-baseline ">
          <i className="far fa-clock"></i>
          <p className=" text-sm sm:text-md my-2 text-slater-800 capitalize leading-relaxed">
            {data.attributes.rate}
          </p>
        </div>

        <p className="text-base sm:text-md font-light leading-relaxed mt-0 mb-4 text-slater-800 overflow-hidden">
          {data.attributes.description.slice(0, 200) + "..."}
        </p>

        <p></p>
        <div className="flex justify-between">
          <p className=" text-base sm:text-md text-slater-800  my-2 capitalize leading-relaxed">
            Posted{" "}
            {
              <Moment
                format="DD MMM "
                withTitle
                date={data.attributes.date}
              ></Moment>
            }
          </p>
          <Link href={`/jobs/${data.attributes.slug}`}>
            <button className="    px-6 py-2.5 bg-blue-600 text-white font-bold text-sm sm:text-md  leading-relaxed  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Read More...
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
