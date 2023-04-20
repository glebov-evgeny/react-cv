import React from 'react';
import './Intro.scss';
import {gsap, Power2} from 'gsap';
import photo_01 from '../../assets/img/intro/face-01.png';
import photo_02 from '../../assets/img/intro/face-02.png';
import photo_03 from '../../assets/img/intro/face-03.png';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

function Intro() {
  const { t } = useTranslation();

  let timeout:any;
  const parallaxHandler = (event:any) => {
      if(timeout) clearTimeout(timeout);
      setTimeout(callParallax.bind(null, event), 1);
  }

  function callParallax(event:any){
      parallaxIt(event, '.intro__decoration-01', 20);
      parallaxIt(event, '.intro__decoration-02', -50);
      parallaxIt(event, '.intro__decoration-03', 30);
      parallaxIt(event, '.intro__decoration-04', 20);
      parallaxIt(event, '.intro__decoration-05', -50);
      parallaxIt(event, '.intro__decoration-06', 30);
  }

  function parallaxIt(e:any, target:any, movement:number){
      gsap.to(target, 1, {
          x: (e.clientX - window.innerWidth / 2) / movement,
          y: (e.clientY - window.innerHeight / 2) / movement,
          ease:Power2.easeOut
      })
  }

  return (
    <section className="intro">
      <div className="intro__container container">
        <div className="intro__content">
          <div className="intro__photo intro__photo-mobile">
            <img src={photo_01} alt="Glebov Evgeny" />
          </div>
          <h1 className="intro__title">{t("header.surname")} <br/><span>{t("header.name")}</span></h1>
          <p className="intro__subtitle">{t("intro.title")} <br/>{t("intro.subtitle")}</p>
          
        </div>
        <div className="intro__aside" onMouseMove={parallaxHandler}>
          <div className="intro__marquee-box">
            <Marquee className="intro__marquee" speed={1} direction={'right'}>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
              <p>{t("intro.description")}</p>
            </Marquee>            
          </div>
          <div className="intro__animation">
            <div className="intro__photo intro__photo-tablet">
              <img src={photo_02} alt="Glebov Evgeny" />
            </div>
            <div className="intro__photo intro__photo-desktop">
              <img src={photo_03} alt="Glebov Evgeny" />
            </div>
            <div className="intro__decoration intro__decoration-01">
              <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13.6603" y="53.6603" width="80" height="80" transform="rotate(-30 13.6603 53.6603)" stroke="white" strokeWidth="20"/>
              </svg>
            </div>
            <div className="intro__decoration intro__decoration-02">
              <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30.803" y="9.54075" width="65" height="65" transform="rotate(19.0939 30.803 9.54075)" stroke="white" strokeWidth="15"/>
              </svg>
            </div>
            <div className="intro__decoration intro__decoration-03">
              <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6.83013" y="27.3648" width="40" height="40" transform="rotate(-30 6.83013 27.3648)" stroke="white" strokeWidth="10"/>
              </svg>
            </div>
            <div className="intro__decoration intro__decoration-04">
              <svg width="342" height="343" viewBox="0 0 342 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="34.1506" y="135.143" width="200" height="200" transform="rotate(-30 34.1506 135.143)" stroke="white" strokeWidth="50"/>
              </svg>
            </div>
            <div className="intro__decoration intro__decoration-05">
              <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="78.5966" y="26.1774" width="160" height="160" transform="rotate(19.0939 78.5966 26.1774)" stroke="white" strokeWidth="40"/>
              </svg>
            </div>
            <div className="intro__decoration intro__decoration-06">
              <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13.6603" y="46.1603" width="65" height="65" transform="rotate(-30 13.6603 46.1603)" stroke="white" strokeWidth="20"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
