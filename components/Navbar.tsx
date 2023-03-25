import SwitchThemeIcon from "./theme";

const Navbar = () => {
  return (
    <div className="fixed flex flex-row-reverse w-full p-8">
      <nav>
        <SwitchThemeIcon />
      </nav>
    </div>
  );
};

export default Navbar;
