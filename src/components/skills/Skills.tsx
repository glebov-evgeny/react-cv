import React from 'react';
import './Skills.scss';
import { useTranslation } from "react-i18next";
import SkillsCard from '../_ui/skillsCard/SkillsCard';

function Skills() {
  const { t } = useTranslation();
  type itemProps = {
    title: string;
    id: number;
    grade: number;
    points: string[];
    info: string;
  };

  const skillsItems = t<string, itemProps[]>('skills.item', { returnObjects: true });

  return (
    <section className="skills">
      <div className="skills__container container complex">
        <div className="complex__aside">
          <h2 className="skills__title s-title">{t("skills.title")}</h2>
        </div>
        <div className="complex__main">
          <div className="skills__block">
          {skillsItems.map((item: itemProps) => (
              <SkillsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
