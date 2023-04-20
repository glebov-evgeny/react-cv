import React from 'react';
import './Test.scss';
import { useTranslation } from "react-i18next";

function Test() {
  const { t } = useTranslation();

  return (
    <section className="test">
      <div className="container">
        <p className="test__text">{t("btnBack")}</p>
      </div>
    </section>
  );
}

export default Test;
