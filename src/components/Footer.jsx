import SocialIcons from "./SocialIcons";
import Attribution from "./Attribution";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <SocialIcons />
      <p className="mt-4 text-sm text-custom-gray">
        &copy; Copyright Ping. All rights reserved.
      </p>
      {/* <Attribution /> */}
    </footer>
  );
};

export default Footer;
