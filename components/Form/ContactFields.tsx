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
      <div className="mb-3 ">
        <h2 className="text-center "> Contact Details</h2>
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Name:
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
          Email:
        </label>
        <input
          type="text"
          className="form-control  block w-full px-3 py-1.5  text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  roundedtransitionease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </>
  );
};

export default ContactFields;
