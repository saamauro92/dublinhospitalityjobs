import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ErrorToast = ({ children }: Props): JSX.Element => {
  return (
    <div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
      {children}
    </div>
  );
};

export default ErrorToast;
