import React from 'react';
import './SkillsCard.scss';

function SkillsCard(props:any) {
  const { item } = props; 

  return (
    <div className={`skills__card skills__card-${item.id}`}>
      <h2 className="skills__card-title">{item.title}</h2>
      <div className="skills__card-grade">
        <div className={`skills__card-grade-line color-${item.id}`} style={{"width": `${item.grade}%`}}></div>
        <div className="skills__card-grade-number" style={{"width": `${item.grade}%`}}>{item.grade} %</div>
      </div>
      <ul className="skills__card-list">
        {item.points.map((item:string)=><li className="skills__card-list-item">{item}</li>)}
      </ul>
      <p className="skills__card-info">{item.info}</p>
    </div>
  );
}

export default SkillsCard;
