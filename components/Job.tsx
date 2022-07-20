import Link from "next/link";
import { JobTypes } from "../types/types";

import { Markup } from "interweave";
import { useEffect, useState } from "react";

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
            ? " mx-4 flex flex-col  justify-center py-5  border-b-2 border-t-2"
            : "mx-4 flex flex-col justify-center py-5 border-b-2 "
        }
      >
        <Link href={`/jobs/${data.attributes.slug}`}>
          <h1 className="font-semibold text-xl my-2 capitalize cursor-pointer text-blue-600">
            {" "}
            {data.attributes.title}{" "}
          </h1>
        </Link>
        <div className="flex space-x-2 items-en  items-baseline   ">
          <i className="fas fa-map-marker-alt"></i>
          <p className=" text-md my-2 capitalize ">
            {data.attributes.location}
          </p>
        </div>
        <div className="flex space-x-2 items-en  items-baseline ">
          <i className="far fa-clock"></i>
          <p className=" text-md my-2 capitalize">{data.attributes.rate}</p>
        </div>
        <div> </div>
        {hasMounted && (
          <Markup
            noHtml={false}
            className="overflow-hidden   max-h-24"
            content={data.attributes.description}
          />
        )}
        <div>
          <p className=" text-md my-2 capitalize float-left">
            Posted: {data.attributes.date}
          </p>
          <Link href={`/jobs/${data.attributes.slug}`}>
            <button className="float-right px-6 py-2.5 bg-blue-600 text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Read More / Apply
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
