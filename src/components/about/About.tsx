import React from 'react';
import './About.scss';
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__container container complex">
        <div className="complex__aside">
          <h2 className="about__title s-title">{t("about.title")}</h2>
        </div>
        <div className="complex__main about__main">
          <p className="about__text s-text">{t("about.text_01")}</p>
          <p className="about__text s-text">{t("about.text_02")}</p>
          <p className="about__text s-text">{t("about.text_03")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
