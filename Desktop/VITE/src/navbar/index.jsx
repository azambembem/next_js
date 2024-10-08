// import { Link } from "react-router-dom"; // Link orqali ham bersa u pagedan bu pagega utsa buladi. Lekin NavLink orqali activeligini ham aniqlasa buladi.
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-full flex gap-4 items-center justify-center bg-slate-500">
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="history">History</NavLink>
    </div>
  );
};

export default Navbar;
