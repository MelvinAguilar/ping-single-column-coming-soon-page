import { FaRegTimesCircle } from "react-icons/fa";

const ErrorMessage = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`${className} absolute -bottom-6 left-0 flex items-center gap-2 text-sm font-bold text-red-400`}
      {...props}
      role="alert"
    >
      <FaRegTimesCircle aria-hidden="true" focusable="false" />
      {children}
    </span>
  );
};

export default ErrorMessage;
