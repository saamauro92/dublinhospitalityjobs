import { Dispatch, SetStateAction } from "react";

interface Props {
  setHowToApply?: Dispatch<SetStateAction<string>> | any;
  howToApply?: string;
}

const HowToApplyFields = ({
  howToApply,
  setHowToApply,
}: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-bold leading-tight text-xl mt-0 mb-2 text-center text-blue-600">
        How to Apply{" "}
      </h5>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 pt-10"
      >
        Please write a description on how to apply for this job.
      </label>

      <textarea
        value={howToApply}
        onChange={(e) => setHowToApply(e.target.value)}
        className="
             h-[100px]
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
      ></textarea>
    </>
  );
};

export default HowToApplyFields;
