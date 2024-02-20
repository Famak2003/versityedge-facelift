import { NavLink } from "react-router-dom";

function NavLinks({ item }) {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "var(--blue)" : "black",
        };
      }}
      to={item.path}
    >
      {item.text}
    </NavLink>
  );
}
export default NavLinks;
