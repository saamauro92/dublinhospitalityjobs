import { Dispatch, SetStateAction } from "react";

interface Props {
  title?: string;
  setTitle?: Dispatch<SetStateAction<string>> | any;
  positionTime?: string;
  setPositionTime?: Dispatch<SetStateAction<string>> | any;
}

const TitleField = ({
  title,
  setTitle,
  positionTime,
  setPositionTime,
}: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-center text-blue-600">
        Job Title{" "}
      </h5>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 pt-10"
      >
        Please write your job title.
      </label>
      <input
        type="text"
        className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 pt-10"
      >
        Please select if your job is full time / part time.
      </label>
      <select
        className="form-select appearance-none w-full   block  px-3 py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        onChange={(e) => setPositionTime(e.target.value)}
        value={positionTime}
      >
        <option value="  Full Time"> Full Time</option>
        <option value="Part Time">Part Time</option>
      </select>
    </>
  );
};

export default TitleField;
