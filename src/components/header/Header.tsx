import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Menu from "../menu/Menu";
import AllContext from "../../store/store";

import "./Header.scss";

function Header(props: any) {
  const { t, i18n } = useTranslation();
  const ctx = useContext(AllContext);

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <NavLink to='/' className='header__logo'>
        <svg xmlns="http://www.w3.org/2000/svg" className="header__logo-home" viewBox="0 0 48 48" width="48px" height="48px">
          <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.4,13.8l-3.6,2.9c-1.4,1.1-2.3,2.9-2.3,4.7v18.1c0,1.1,0.9,2,2,2h20"/>
          <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M35,41.5h3.5c1.1,0,2-0.9,2-2V21.4c0-1.8-0.8-3.6-2.3-4.7L24.6,6c-0.4-0.3-0.9-0.3-1.2,0l-4.6,3.6"/>
          <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M18.5,35.7v-8.2c0-0.6,0.4-1,1-1h8.9c0.6,0,1,0.4,1,1v14"/>
        </svg>
        <span className="header__logo-name">{t("header.name")}</span>
        <span className="header__logo-name">{t("header.surname")}</span>
      </NavLink>
      <Menu />
      <div className="header__logic">
        <button className="header__button header__button-theme" onClick={ctx.changeColorTheme}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header__icon-image"
        >
            <g clipPath="url(#clip0_578_178)">
              <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" />
            </g>
            <defs>
              <clipPath id="clip0_578_178">
                <rect width="24" height="24" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="header__button header__button-lang" onClick={i18n.language === 'en' ? () => changeLanguage("ru") : () => changeLanguage("en")}>
          <span>{ i18n.language === 'en' ? "RU" : "EN" }</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
