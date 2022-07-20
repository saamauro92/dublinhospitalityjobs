import { ReactNode } from "react";
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  children?: ReactNode;
  headerBig?: boolean;
};

const Header = ({ children, headerBig }: Props): JSX.Element => {
  const phrase =
    "Your most unhappy customers are your greatest source of learning.” -Bill Gates";

  return (
    <>
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat  bg-center bg-cover  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtycp96d8/image/upload/v1658331164/pexels-luciann-photography-3566191_1_qhokvw.jpg')",
          height: `${headerBig ? "400px" : "250px"}`,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
              <h2 className="font-semibold text-4xl mb-4">Dublin</h2>
              <h4 className="font-semibold text-xl mb-6">Hospitality Jobs</h4>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
