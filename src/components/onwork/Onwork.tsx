import React, { useEffect } from 'react';
import './Onwork.scss';
import { useTranslation } from "react-i18next";
import { gsap } from 'gsap';


function Onwork() {
  const { t } = useTranslation();

  useEffect(() => {
    onLoadElement();
  }, []);

  const onLoadElement = () => {
    gsap.fromTo(
      '.onwork__title',
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
    <section className="onwork">
      <div className="onwork__container container">
        <h2 className="onwork__title">{t("work.title")}</h2>
      </div>
    </section>
  );
}

export default Onwork;
