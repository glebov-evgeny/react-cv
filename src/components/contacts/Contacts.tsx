import React from 'react';
import './Contacts.scss';
import { useTranslation } from "react-i18next";


function Contacts() {
  const { t } = useTranslation();
  return (
    <section className="contacts">
      <div className="contacts__container container complex">
        <div className="complex__aside">
          <h2 className="contacts__title s-title">{t("contacts.title")}</h2>
        </div>
        <div className="complex__main">
          <div className="contacts__block">
            <div className="contacts__item">
              <h3 className="contacts__item-title">{t("contacts.social_telegram")}</h3>
              <a href="https://t.me/eaglebov" className="contacts__item-link" target="_blank" rel="noreferrer">@eaglebov</a>
            </div>
            <div className="contacts__item">
              <h3 className="contacts__item-title">{t("contacts.social_email")}</h3>
              <a href="mailto:mailto:eaglebov87@gmail.com" className="contacts__item-link" target="_blank" rel="noreferrer">eaglebov87@gmail.com</a>
            </div>
            <div className="contacts__item">
              <h3 className="contacts__item-title">{t("contacts.social_phone")}</h3>
              <a href="tel:+79162176557" className="contacts__item-link" target="_blank" rel="noreferrer">+7 (916) 217-65-57</a>
            </div>
            <div className="contacts__item">
              <h3 className="contacts__item-title">{t("contacts.social_title")}</h3>
              <a href="https://github.com/glebov-evgeny" className="contacts__item-link" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
