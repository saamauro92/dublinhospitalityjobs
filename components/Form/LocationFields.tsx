import { Dispatch, SetStateAction } from "react";

interface Props {
  location?: string;
  setLocation?: Dispatch<SetStateAction<string>> | any;
}

const LocationFields = ({ location, setLocation }: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-center text-blue-600">
        Job location{" "}
      </h5>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 pt-10"
      >
        Please write your jobs location.
      </label>
      <input
        type="text"
        className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </>
  );
};

export default LocationFields;
