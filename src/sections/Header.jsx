import React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
        <a
          href="#"
          className="px-4 py-1 rounded-full text-ms font-semibold hover:bg-white/20 hover:text-black transition duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="px-4 py-1 rounded-full text-ms font-semibold hover:bg-white/20 hover:text-black"
        >
          Projects
        </a>
        <a
          href="#"
          className="px-4 py-1 rounded-full text-ms font-semibold hover:bg-white/20 hover:text-black"
        >
          About
        </a>
        <a
          href="#"
          className="px-4 py-1 rounded-full text-ms font-semibold bg-white text-black hover:bg-white/70 hover:text-black"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
