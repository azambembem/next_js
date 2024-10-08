import { Outlet, useOutlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const About = () => {
  const hasOutlet = useOutlet();
  if (hasOutlet) return <Outlet />;
  return <NavLink to={"company"}>Company</NavLink>;
};

export default About;
