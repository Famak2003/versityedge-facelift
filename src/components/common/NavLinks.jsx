import { NavLink } from "react-router-dom";

export const NavLinks = ({ item }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "var(--blue-texture)" : "black",
        };
      }}
      className=""
      to={item.path}
    >
      {item.text}
    </NavLink>
  );
};
