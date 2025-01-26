import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Mobile Menu Toggle Button */}
      <div
        className="sm:cursor-pointer fixed top-6 left-6 z-[999] rounded-lg bg-white/40 p-2 shadow-lg hover:bg-white/60 transition-colors duration-200"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed z-[999] flex items-center gap-4 bg-slate-200/60 px-4 py-2 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-8" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => {
              setActive(i);
              setShowMenu(false); // Close menu on item click (for mobile)
            }}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer hover:bg-dark_primary/20 transition-colors duration-200 ${
              i === active && "bg-dark_primary text-white"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;