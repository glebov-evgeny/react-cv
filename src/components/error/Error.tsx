import React, { useEffect } from 'react';
import './Error.scss';
import { useTranslation } from "react-i18next";
import { gsap } from 'gsap';


function Error() {
  const { t } = useTranslation();

  useEffect(() => {
    onLoadElement();
  }, []);

  const onLoadElement = () => {
    gsap.fromTo(
      '.error__title',
      {
        // Откуда
        opacity: 0,
        scale: 0.8,
        y: -75,
      },
      {
        // Куда
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3,
        ease: 'elastic',
        repeat: 0, // по умолчанию 0, бесконечно -1
      },
    )
  }

  return (
    <section className="error">
      <div className="error__container container">
        <h2 className="error__title">{t("error.title")}</h2>
      </div>
    </section>
  );
}

export default Error;
