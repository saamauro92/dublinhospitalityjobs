import { Dispatch, SetStateAction } from "react";

interface Props {
  handleSearch?: Dispatch<SetStateAction<string>> | any;
  name?: string;
  setName?: Dispatch<SetStateAction<string>> | any;
}

const SearchInput = ({ name, handleSearch, setName }: Props): JSX.Element => {
  return (
    <>
      <div className="text-center  text-blue-600 font-bold  text-2xl  pb-2 ">
        <input
          className="px-2 shadow-md  rounded-tl-md  rounded-bl-md  pl-5 text-gray-600  py-2 w-[16] md:w-[28rem] lg:w-[33rem] mt-8 font-thin focus:outline-none "
          placeholder="Search"
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          onClick={handleSearch}
          className="bg-white p-2  text-gray-500 rounded-tr-md  rounded-br-md pr-5 "
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
