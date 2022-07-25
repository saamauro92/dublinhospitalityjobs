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
        className={
          headerBig
            ? "p-0 text-center relative overflow-hidden bg-no-repeat  bg-center bg-cover mb-5 md:mb-5 lg:mb-0  h-[500px] "
            : "p-0 text-center relative overflow-hidden bg-no-repeat  bg-center bg-cover mb-5 md:mb-5 lg:mb-0 border-b md:h-[85px] lg:h-[100px] h-[72px] "
        }
        style={{
          backgroundImage: `${
            headerBig
              ? "url('https://res.cloudinary.com/dtycp96d8/image/upload/v1658784105/pexels-luciann-photography-3566191-_1__wyozzc.webp')"
              : ""
          }`,
        }}
      >
        <NavBar headerBig={headerBig} />
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{
            backgroundColor: `${headerBig ? "rgba(0, 0, 0, 0.6)" : ""}`,
          }}
        >
          <div className="flex  justify-center items-center h-full ">
            <div className="text-white lg:px-0 md:px-0 text-left  z-50">
              {headerBig ? (
                <h4 className="font-semibold text-base  px-3 sm:px-0 w-[18rem] sm:text-xl sm:w-[24rem] md:text-2xl md:w-[30rem] lg:text-2xl w-70 lg:w-[30rem] ">
                  {" "}
                  {phrase}{" "}
                </h4>
              ) : null}

              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
