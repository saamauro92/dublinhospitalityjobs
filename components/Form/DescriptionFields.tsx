import { Dispatch, SetStateAction } from "react";
import RichEditor from "../RichEditor";

interface Props {
  setDescription?: Dispatch<SetStateAction<string>> | any;
}

const DescriptionFields = ({ setDescription }: Props): JSX.Element => {
  return (
    <>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700"
      >
        Job Description:
      </label>
      <RichEditor setDescription={setDescription} />
    </>
  );
};

export default DescriptionFields;
