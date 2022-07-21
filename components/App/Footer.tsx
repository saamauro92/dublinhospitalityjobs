import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="text-center text-white bg-slate-600 mt-10 h-max">
        <div className="text-center text-gray-300 p-4 bg-slate-900 ">
          <a className="text-gray-300" href="https://tailwind-elements.com/">
            Dublin Hospitality Jobs
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
