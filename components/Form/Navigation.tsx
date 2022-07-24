import { Dispatch, SetStateAction } from "react";

interface Props {
  step?: Dispatch<SetStateAction<string>> | any;
  setStep?: Dispatch<SetStateAction<string>> | any;
  fieldGroups?: Element[] | any;
  handleSubmit?: () => void;
  loading?: boolean;
}

const Navigation = ({
  step,
  setStep,
  fieldGroups,
  handleSubmit,
  loading,
}: Props): JSX.Element => {
  return (
    <>
      <div className=" flex justify-center gap-10 ">
        {step > 0 && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                setStep(step - 1);
              }}
              className="inline-block pr-4 py-2.5 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <i className="fas fa-arrow-left m-2"></i> Back
            </button>
          </div>
        )}
        {step < fieldGroups.length - 1 && (
          <div className="flex  justify-center">
            <button
              type="button"
              onClick={() => {
                setStep(step + 1);
              }}
              className="inline-block pl-4 py-2.5 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Next <i className="fas fa-arrow-right m-2"></i>
            </button>
          </div>
        )}
        {step === fieldGroups.length - 1 && (
          <>
            <button
              type="button"
              className={
                "inline-block px-6 py-2.5 bg-green-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greem-800 active:shadow-lg transition duration-150 ease-in-out"
              }
              onClick={handleSubmit}
            >
              {loading ? (
                <>
                  <div
                    className="spinner-grow inline-block w-2 h-3 bg-current rounded-full opacity-0 text-gray-300"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow inline-block w-2 h-3 bg-current rounded-full opacity-0 text-gray-300"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow inline-block w-2 h-3 bg-current rounded-full opacity-0 text-gray-300"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </>
        )}
      </div>
      {/*       <p className="pt-10">
        {" "}
        * Once sent your ad will be reviewed and after payment is completed will
        take up to 24 hours to show up in the listing.
      </p> */}
    </>
  );
};

export default Navigation;
