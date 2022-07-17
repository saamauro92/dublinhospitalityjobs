import { useState } from "react";
import RichEditor from "./RichEditor";

const JobForm = (): JSX.Element => {
  return (
    <>
      <div className="lg:mt-1 lg:mx-20 xl:w-6/12 lg:px-2  mb-20  pb-20 ">
        <div className="mx-4 flex flex-col justify-center py-5 mt-20 ">
          <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">
            Post A Job
          </h5>
          <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
            - You can submit your job description using the form below.
          </p>
          <p className="text-xl font-light leading-relaxed  mb-4 text-gray-800">
            - Or you can email us your job to jobs@dublinhospitalityjobs.com.
          </p>

          <div className="flex flex-wrap justify-between mt-10">
            <div className="mb-3 w-80">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="mb-3 w-80">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email:
              </label>
              <input
                type="text"
                className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>
          <RichEditor />
          <div className="flex mt-20 pt-20 md:pt-0 ">
            <div className="mb-3 w-80">
              <p className="mb-3"> Select your ad type</p>
              <select
                className="form-select appearance-none w-full   block  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                {/*     <option selected>Select Ad Type</option> */}
                <option value="1">Standard (14,99 E)</option>
                <option value="2">Premium (24,99 E)</option>
              </select>
            </div>
          </div>
          <div className="flex  mt-10">
            <p>
              {" "}
              * Once sent your ad will be reviewed and after payment is
              completed will take up to 24 hours to show up in the listing.
            </p>
          </div>
          <div className="flex  mt-10">
            <button
              type="button"
              className="mb-2 w-96 inline-block px-6 py-2.5 bg-blue-600 text-white font-bold text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobForm;
