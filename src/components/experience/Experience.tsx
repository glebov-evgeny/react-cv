import React from 'react';
import './Experience.scss';
import { useTranslation } from "react-i18next";
import ExperienceCard from '../_ui/experienceCard/ExperienceCard';


function Experience() {
  const { t } = useTranslation();
  console.log(process.env.REACT_APP_BASE_URL)
  type itemProps = {
    name: string;
    date: string;
    company: { 
      name: string; 
      link: string 
    };
    duties: string[];
    stack: string[];
    links: Array<{ item: string, image: string }>;
    id: string;
  };

  const companyItems = t<string, itemProps[]>('experience.info', { returnObjects: true });

  return (
    <section className="experience">
      <div className="experience__container container">
        <h1>{process.env.REACT_APP_BASE_URL}</h1>
        <h2 className="experience__title s-title">{t("experience.title")}</h2>
        <div className="experience__block">
          {companyItems.map((item: itemProps) => (
            <ExperienceCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
