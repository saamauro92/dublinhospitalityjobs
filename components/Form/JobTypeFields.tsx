import { Dispatch, SetStateAction } from "react";

interface Props {
  type?: string;
  setType?: Dispatch<SetStateAction<string>> | any;
}

const JobTypeFields = ({ type, setType }: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-center text-blue-600 ">
        Prices{" "}
      </h5>
      <p className="mb-3 pt-10"> Select your ad type</p>
      <select
        className="form-select appearance-none w-full   block  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        onChange={(e) => setType(e.target.value)}
        value={type}
      >
        <option value="Standard">Standard (14,99 E)</option>
        <option value="Premium">Premium (24,99 E)</option>
      </select>
    </>
  );
};

export default JobTypeFields;
