import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  const { t } = useTranslation();

  type itemProps = {
    title: string;
    link: string;
    id: string;
  };

  const navItems = t<string, itemProps[]>('header.nav', { returnObjects: true });

  return (
    <nav className="menu">
      {navItems.map((item: itemProps) => (
        <NavLink to={item.link} className='menu__link' key={item.id}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
