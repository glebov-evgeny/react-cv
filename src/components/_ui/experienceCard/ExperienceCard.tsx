import React from 'react';
import './ExperienceCard.scss';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function ExperienceCard(props:any) {
  const { item } = props;
  const { t } = useTranslation();


  

  return (
    <div className="experience__card">
      <h2 className="experience__card-title">{item.name}</h2>
      <div className="experience__card-top">
        <Link to={item.company.link} target='_blank' className="experience__card-name">{item.company.name}</Link>
        <p className="experience__card-date">{item.date}</p>
      </div>
      <p className="experience__card-subtitle">{t("experience.responsibilities")}</p>
      <ul className="experience__card-duties">
        {item.duties.map((dutie:string, index:number)=><li className="experience__card-dutie" key={index}>{dutie}</li>)}
      </ul>
      <p className="experience__card-subtitle">{t("experience.stack")}</p>
      <ul className="experience__card-stacks">
        {item.stack.map((stack:string, index:number)=><li className="experience__card-stack" key={index}>{stack}</li>)}
      </ul>
      {item.links && 
      <div className="experience__card-bottom">
        <p className="experience__card-subtitle">{t("experience.example")}</p>
        {item.links.map((link: { item: string; image: string },index:number)=>
          <Link to={link.item} className="experience__card-links" style={{"backgroundImage": `url("/react-cv/img/${link.image}.png")`}} key={index} />
        )}
      </div>
      }
    </div>
  );
}

export default ExperienceCard;
