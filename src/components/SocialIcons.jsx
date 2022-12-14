import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <ul className="flex flex-row justify-center gap-4">
      <li>
        <a
          href="#"
          aria-label="facebook"
          className="block rounded-full border-[0.0625rem] border-pale-blue p-[0.35rem] text-custom-blue transition-colors duration-300 ease-in-out hover:bg-custom-blue hover:text-white dark:border-gray-700 dark:hover:text-gray-900"
        >
          <FaFacebookF aria-hidden="true" focusable="false" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="twitter"
          className="block rounded-full border-[0.0625rem] border-pale-blue p-[0.35rem] text-custom-blue transition-colors duration-300 ease-in-out hover:bg-custom-blue hover:text-white dark:border-gray-700 dark:hover:text-gray-900"
        >
          <FaTwitter aria-hidden="true" focusable="false" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="instagram"
          className="block rounded-full border-[0.0625rem] border-pale-blue p-[0.35rem] text-custom-blue transition-colors duration-300 ease-in-out hover:bg-custom-blue hover:text-white dark:border-gray-700 dark:hover:text-gray-900"
        >
          <FaInstagram aria-hidden="true" focusable="false" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
