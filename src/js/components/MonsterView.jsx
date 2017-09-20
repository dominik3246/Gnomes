import React from 'react';
import avatar from '../../img/avatar.png';

const MonsterView = props => (
  <li className="monster__item list__item">
    {console.log(props)}
    <div className="monster__info">
      <img className="monster__avatar" src={avatar} alt="" />
      <div className="monster__identify">
        <h5 className="monster__name little__title">{props.name}</h5>
        <h6 className="monster__age little__subtitle">Age: {props.age}</h6>
      </div>
    </div>
    <div className="monster__spec">
      <div className="strength__bar">
        <div className="strength__level" style={{ width: `${props.strenght}%` }} />
      </div>
      <p className="strength__number">{props.strenght}/100</p>
      <h5 className="ability__name">Strenght</h5>
    </div>
  </li>
);

export default MonsterView;
