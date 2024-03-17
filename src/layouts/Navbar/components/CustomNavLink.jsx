import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, icon, text, highlight }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-slate-700 lg:bg-primary lg:bg-opacity-5 lg:text-primary lg:rounded-lg"
          : ""
      }
    >
      <div
        className={`hover:cursor-pointer active:bg-primary lg:hover:bg-neutral px-8 py-4 lg:px-4 lg:py-4 lg:rounded-lg text-sm flex gap-5 items-center lg:blok ${
          highlight && "lg:bg-primary lg:text-white lg:font-bold"
        }`}
      >
        <span className="lg:hidden text-2xl">{icon}</span>
        <span>{text}</span>
      </div>
    </NavLink>
  );
};

export { CustomNavLink };
