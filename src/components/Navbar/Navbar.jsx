import React, { useEffect, useState } from "react";
import css from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

/**
 * Component for the navigation bar.
 *
 * @returns {JSX.Element} - The rendered Navbar component.
 */
const Navbar = () => {
  const [create, setCreate] = useState(true);
  const [view, setView] = useState(false);
  const [other, setOther] = useState(false);
  const route = useLocation();

  useEffect(() => {
    // Sets the active navigation based on the current route
    if (route.pathname === "/") {
      setCreate(true);
      setView(false);
      setOther(false);
    } else if (route.pathname === "/view") {
      setView(true);
      setCreate(false);
      setOther(false);
    } else {
      setOther(true);
      setCreate(false);
      setView(false);
    }
  }, [route.pathname]);

  const links = [
    { id: 1, name: "View Employees", href: "/view" },
    { id: 2, name: "Create Employee", href: "/" },
  ];

  return (
    <nav className={css.navbar}>
      {/* Brand logo */}
      <div className={css.brand}>
        <img src={logo} alt="Company Logo" className={css.logo} />
      </div>

      <ul className={css.links}>
        {/* Conditional rendering of navigation links */}
        {create ? (
          <li className={css.link}>
            <Link to={links[0].href}>{links[0].name}</Link>
          </li>
        ) : view ? (
          <li className={css.link}>
            <Link to={links[1].href}>{links[1].name}</Link>
          </li>
        ) : other ? (
          links.map((link) => {
            return (
              <li className={css.link} key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            );
          })
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
