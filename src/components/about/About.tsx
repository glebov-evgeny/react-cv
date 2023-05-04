import React from 'react';
import './About.scss';
import { useTranslation } from "react-i18next";
// import ExperienceCard from '../_ui/experienceCard/ExperienceCard';

function About() {
  const { t } = useTranslation();
  
  // type itemProps = {
  //   name: string;
  //   date: string;
  //   company: { 
  //     name: string; 
  //     link: string 
  //   };
  //   duties: string[];
  //   stack: string[];
  //   links: Array<{ item: string, image: string }>;
  //   id: string;
  // };

  // const companyItems = t<string, itemProps[]>('experience.info', { returnObjects: true });

  return (
    <section className="about">
      <div className="about__container container complex">
        <div className="complex__aside">
          <h2 className="about__title s-title">{t("about.title")}</h2>
        </div>
        <div className="complex__main">
          {/* <div className="experience__block">
            {companyItems.map((item: itemProps) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
