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
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2  text-gray-700"
      >
        Please enter your job description.
      </label>
      <RichEditor setDescription={setDescription} />
    </>
  );
};

export default DescriptionFields;
