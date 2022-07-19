import Link from "next/link";
import { useState } from "react";
import ContactFields from "./Form/ContactFields";
import DescriptionFields from "./Form/DescriptionFields";
import JobTypeFields from "./Form/JobTypeFields";
import Navigation from "./Form/Navigation";
import SuccessField from "./Form/SuccessField";
import TitleField from "./Form/TitleField";
import RichEditor from "./RichEditor";

const JobForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Standard");
  const [loading, setLoading] = useState(false);
  const [jobsent, setJobSent] = useState(false);

  /*  STEPS LOGIC */
  const [step, setStep] = useState(0);

  const fieldGroups = [
    <JobTypeFields type={type} setType={setType} key={1} />,
    <ContactFields
      name={name}
      email={email}
      setName={setName}
      setEmail={setEmail}
      key={1}
    />,
    <TitleField title={title} setTitle={setTitle} key={1} />,
    <DescriptionFields setDescription={setDescription} key={1} />,
  ];

  const handleSubmit = () => {
    if (!name || !email) return alert("Please complete all the fields");

    if (name.length < 3 || email.length < 3)
      return alert(" Minimum 3 characters in name/email fields");
    if (description.length < 100)
      return alert("Please at least 100 characteres ");
    setLoading(true);
    fetch("https://dublinhospitalityjobs-backend.herokuapp.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: title,
          description: description,
          type: type,
          location: "",
          company: "",
          email: email,
          date: Date.now(),
        },
      }),
    }).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        setJobSent(true);
        setDescription("");
        setName("");
        setType("Standar");
        setEmail("");
        setTitle("");
      } else {
        alert(
          "Error, pleaes make sure to complete fields with valid information (Email)"
        );
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
          <div className="mx-4 flex flex-col justify-center py-5 mt-20 ">
            <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">
              Post A Job
            </h5>
            <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
              - You can submit your job description using the form below.
            </p>
            <p className="text-xl font-light leading-relaxed  mb-4 text-gray-800">
              - Or you can email us your job to jobs@dublinhospitalityjobs.com.
            </p>
            <div className="border p-20 flex flex-col justify-center">
              {fieldGroups[step]}
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
      )}
    </>
  );
};

export default JobForm;
