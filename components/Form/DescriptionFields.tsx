import { Dispatch, SetStateAction } from "react";
import RichEditor from "../RichEditor";

interface Props {
  setDescription?: Dispatch<SetStateAction<string>> | any;
}

const DescriptionFields = ({ setDescription }: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-center text-blue-600">
        Job Description
      </h5>

      <div className="mb-3 xl:w-auto h-full">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Please enter your job description.
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="
             h-[250px]
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          rows={3}
          placeholder="Please enter at least 100 characteres"
        ></textarea>
      </div>
    </>
  );
};

export default DescriptionFields;
