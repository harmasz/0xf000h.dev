import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="fixed flex flex-row-reverse w-full p-8">
      <nav>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Navbar;
