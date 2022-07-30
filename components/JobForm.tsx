import { useState } from "react";
import ContactFields from "./Form/ContactFields";
import DescriptionFields from "./Form/DescriptionFields";
import HowToApplyFields from "./Form/HowToApplyFields";
import JobTypeFields from "./Form/JobTypeFields";
import LocationFields from "./Form/LocationFields";
import Navigation from "./Form/Navigation";
import SuccessField from "./Form/SuccessField";
import TitleField from "./Form/TitleField";
import Stepper from "./Stepper";

const JobForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [howToApply, setHowToApply] = useState("");
  const [type, setType] = useState("Standard");
  const [positionTime, setPositionTime] = useState("Full Time");
  const [promo, setPromo] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobsent, setJobSent] = useState(false);

  /*  STEPS LOGIC */
  const [step, setStep] = useState(0);

  const fieldGroups = [
    <ContactFields
      name={name}
      email={email}
      setName={setName}
      setEmail={setEmail}
      key={1}
    />,
    <JobTypeFields
      type={type}
      setType={setType}
      promo={promo}
      setPromo={setPromo}
      key={1}
    />,
    <TitleField
      title={title}
      setTitle={setTitle}
      key={1}
      positionTime={positionTime}
      setPositionTime={setPositionTime}
    />,
    <LocationFields location={location} setLocation={setLocation} key={1} />,

    <HowToApplyFields
      howToApply={howToApply}
      setHowToApply={setHowToApply}
      key={1}
    />,
    <DescriptionFields
      description={description}
      setDescription={setDescription}
      key={1}
    />,
  ];

  const handleSubmit = () => {
    if (!name || !email || !location)
      return alert("Please complete all the fields");

    if (name.length < 3 || email.length < 3)
      return alert(" Minimum 3 characters in name/email fields");
    if (location.length < 2)
      return alert(" Minimum 2 characters in location field");

    if (howToApply.length < 10)
      return alert("Please write at least 10 characteres ");
    if (description.length < 100)
      return alert("Please write at least 100 characteres ");

    setLoading(true);
    fetch("https://dublinhospitalityjobs-backend.herokuapp.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },

      body: JSON.stringify({
        data: {
          title: title,
          description: description,
          howToApply: howToApply,
          type: type,
          positionTime: positionTime,
          promo: promo,
          rate: positionTime,
          location: location,
          company: "",
          email: email,
          date: Date.now(),
          keyword: title + " " + description,
          /*        publishedAt: null, */
        },
      }),
    }).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        setJobSent(true);
        setDescription("");
        setHowToApply("");
        setName("");
        setType("Standar");
        setPositionTime("Full Time");
        setPromo("");
        setLocation("");
        setEmail("");
        setTitle("");
      } else {
        alert("Error, please refresh the page and start again");
        setLoading(false);
      }
    });
  };

  return (
    <>
      {jobsent ? (
        <SuccessField setJobsent={setJobSent} />
      ) : (
        <div className="lg:mt-1 lg:mx-auto xl:w-6/12 lg:px-2  mb-20  pb-20 ">
          <div className="mx-4 flex flex-col justify-center py-5  md:mt-20 ">
            <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">
              How does it work? Simple!
            </h5>

            <Stepper />

            <div className="md:border md:shadow-xl lg:border lg:shadow-xl ">
              <div className="  pt-0 lg:min-h-[520px] flex flex-col justify-between">
                {step === 0 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "16.6666667%" }}
                    ></div>
                  </div>
                ) : null || step === 1 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "33.3333333%" }}
                    ></div>
                  </div>
                ) : null}
                {step === 2 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "49%" }}
                    ></div>
                  </div>
                ) : null || step === 3 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                ) : null}
                {step === 4 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                ) : null}
                {step === 5 ? (
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-blue-600 h-1"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                ) : null}

                <div className=" lg:px-10 pt-20 px-0 flex-1  place-content-center md:px-4 ">
                  {fieldGroups[step]}
                </div>
                <div className=" pt-10 mb-4 m-0 ">
                  <Navigation
                    step={step}
                    setStep={setStep}
                    fieldGroups={fieldGroups}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
            {/*             <p className="text-md font-light leading-relaxed mt-8 mb-4 text-gray-800">
              - You can also email us your job to
              jobs@dublinhospitalityjobs.com.
            </p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default JobForm;
