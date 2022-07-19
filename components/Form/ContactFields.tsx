import { Dispatch, SetStateAction } from "react";

interface Props {
  name?: string;
  email?: string;
  setName?: Dispatch<SetStateAction<string>> | any;
  setEmail?: Dispatch<SetStateAction<string>> | any;
}

const ContactFields = ({
  name,
  email,
  setName,
  setEmail,
}: Props): JSX.Element => {
  return (
    <>
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-center text-blue-600">
        Contact Details{" "}
      </h5>
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 pt-10"
      >
        Please enter your name.
      </label>
      <input
        type="text"
        className="form-control  block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label
        htmlFor="exampleFormControlInput1"
        className="form-label inline-block mb-2 text-gray-700 mt-10"
      >
        Please enter your email address.
      </label>
      <input
        type="text"
        className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};

export default ContactFields;
