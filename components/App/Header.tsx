import { ReactNode } from "react";
import SearchInput from "../SearchInput/SearchInput";
import NavBar from "./NavBar";

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
        className="p-0 text-center relative overflow-hidden bg-no-repeat  bg-center bg-cover mb-5 md:mb-5 lg:mb-0 "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtycp96d8/image/upload/v1658331164/pexels-luciann-photography-3566191_1_qhokvw.jpg')",
          height: `${headerBig ? "400px" : "250px"}`,
        }}
      >
        <NavBar />
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white px-5 lg:px-0 md:px-0 text-left">
              <h4 className="font-semibold text-base w-[18rem] sm:text-xl sm:w-[24rem] md:text-2xl md:w-[30rem] lg:text-2xl w-70 lg:w-[30rem] ">
                {" "}
                {phrase}{" "}
              </h4>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
