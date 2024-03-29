import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setJobsent?: Dispatch<SetStateAction<string>> | any;
}

const SuccessField = ({ setJobsent }: Props): JSX.Element => {
  return (
    <>
      <div className="lg:mt-1 lg:mx-auto xl:w-6/12 lg:px-2 h-screen ">
        <div className="mx-4 flex flex-col justify-center py-5 mt-20 ">
          <h5 className="font-bold leading-tight text-xl  text-blue-600">
            Thanks, your job has been succesfully sent to us.
          </h5>
          <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
            We have sent you a confirmation email. If you do not see the email
            in a few minutes, check your “junk mail” folder or “spam” folder.
          </p>

          <p className="text-xl font-light leading-relaxed  text-gray-800">
            Your job will be review and posted within 24hs if no issues found on
            application.
          </p>
        </div>
        <h5
          className="font-medium leading-tight text-xl mt-5 mx-2 mb-4 text-blue-600"
          onClick={() => setJobsent(false)}
        >
          <a href="">- Post other job</a>
        </h5>{" "}
        <h5 className="font-medium leading-tight text-xl mt-0 mx-2 mb-4 text-blue-600">
          <Link href={"/"}> - Go Back to Jobs </Link>
        </h5>{" "}
      </div>
    </>
  );
};

export default SuccessField;
