import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const JobForm = (): JSX.Element => {
  return (
    <>
      <QuillNoSSRWrapper theme="snow" />
    </>
  );
};

export default JobForm;
