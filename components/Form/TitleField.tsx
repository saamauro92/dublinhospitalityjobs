import { Dispatch, SetStateAction } from "react";

interface Props {
  title?: string;
  setTitle?: Dispatch<SetStateAction<string>> | any;
}

const TitleField = ({ title, setTitle }: Props): JSX.Element => {
  return (
    <>
      <div className="mb-3 w-full">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Job Title:
        </label>
        <input
          type="text"
          className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
};

export default TitleField;
