import dynamic from "next/dynamic";
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
  value: string;
  onChange?: any;
}

const RichEditor = ({ value, onChange }: Props): JSX.Element => {
  const handleChange = (value: any) => {
    onChange(value);
  };
  return (
    <>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        className="mt-2  h-96"
        value={value}
        onChange={handleChange}
        placeholder="mininum 100 characteres"
      />
    </>
  );
};

export default RichEditor;
