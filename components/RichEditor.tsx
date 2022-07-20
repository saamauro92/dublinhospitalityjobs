import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [""] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

interface Props {
  setDescription?: Dispatch<SetStateAction<string>> | any;
}

const RichEditor = ({ setDescription }: Props): JSX.Element => {
  const handleChange = (value: string) => {
    setDescription(value);
  };

  return (
    <>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        className="mb-20 pb-10 lg:pb-0 lg:mb-10 h-60 "
        onChange={handleChange}
        placeholder="mininum 100 characteres"
      />
    </>
  );
};

export default RichEditor;
