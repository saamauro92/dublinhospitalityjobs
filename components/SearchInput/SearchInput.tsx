import { Dispatch, SetStateAction } from "react";

interface Props {
  handleSearch?: Dispatch<SetStateAction<string>> | any;
  name?: string;
  setName?: Dispatch<SetStateAction<string>> | any;
}

const SearchInput = ({ name, handleSearch, setName }: Props): JSX.Element => {
  return (
    <>
      <div className="text-center  text-blue-600 font-bold  text-2xl pt-8 pb-2 px-6">
        <input
          className="px-2 shadow-md rounded text-gray-600 py-1 w-80 mt-8 font-thin focus:outline-0"
          placeholder="Search"
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          onClick={handleSearch}
          className="bg-blue-600 p-1  text-white rounded"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
