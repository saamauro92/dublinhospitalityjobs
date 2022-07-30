const Stepper = (): JSX.Element => {
  return (
    <>
      <ul className="stepper mt-8 mb-8 flex flex-wrap">
        <li className="stepper-step  flex-1">
          <div className="stepper-head">
            <span className="stepper-head-icon bg-blue-400"> 1 </span>
            <span className="stepper-head-text font-bold">
              {" "}
              Fill out form below
            </span>
          </div>
        </li>
        <li className="stepper-step  flex-1">
          <div className="stepper-head">
            <span className="stepper-head-icon bg-blue-400"> 2 </span>
            <span className="stepper-head-text font-bold">
              {" "}
              24hs Review time{" "}
            </span>
          </div>
        </li>
        <li className="stepper-step  flex-1">
          <div className="stepper-head">
            <span className="stepper-head-icon bg-blue-400"> 3 </span>
            <span className="stepper-head-text font-bold"> Done! </span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Stepper;
