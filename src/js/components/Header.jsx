import React from 'react';
import logo from '../../img/logo.png';
import avatar from '../../img/avatar.png';

const Header = () => (
  <header className="header">
    <div className="header-bar container">
      <img className="header-bar__brand" src={logo} alt="" />
      <div className="header-bar__menu">
        <ul className="menu__list list">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Gnoms
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Trolls
            </a>
          </li>
        </ul>
      </div>
      <button className="header-bar__button btn btn__purple">Create monster</button>
      <div className="header-bar__avatar">
        <img src={avatar} alt="" />
        <div className="avatar__person">
          <h5 className="person__name little__title">Robert Łabuś</h5>
          <h6 className="person__title little__subtitle">Game Master</h6>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
