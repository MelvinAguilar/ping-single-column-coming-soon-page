import logo from "../assets/logo.svg";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} className="dark:filter-white md:mt-[45px]" alt="ping" />
      </a>

      <ToggleThemeButton />
    </header>
  );
};

export default Header;
