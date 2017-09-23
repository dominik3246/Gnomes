import React from 'react';
import { string, number } from 'prop-types';

export default class MonsterView extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false,
    };
  }

  onMouseOver = () => {
    if (this.state.isHover === true) {
      return this.state;
    }
    this.setState({ ...this.state, isHover: true });
  };

  componentWillReceiveProps() {
    this.setState({
      isHover: false,
    });
  }

  onMouseLeave = () => {
    if (this.state.isHover === false) {
      return this.state;
    }
    this.setState({ ...this.state, isHover: false });
  };

  render() {
    return (
      <li
        className="monster__item list__item"
        onMouseOver={() => this.onMouseOver()}
        onMouseMove={() => this.onMouseOver()}
        onMouseLeave={() => this.onMouseLeave()}
      >
        <div className="item__row">
          <div className="monster__info">
            <img className="monster__avatar" src={require('../../img/avatar.png')} alt="" />
            <div className="monster__identify">
              <h5 className="monster__name little__title">{this.props.name}</h5>
              <h6 className="monster__age little__subtitle">Age: {this.props.age}</h6>
            </div>
          </div>
          {this.state.isHover ? this.props.children[0] : null}
          <div className="monster__spec">
            <div className="strength__bar">
              <div className="strength__level" style={{ width: `${this.props.strenght}%` }} />
            </div>
            <p className="strength__number">{this.props.strenght}/100</p>
            <h5 className="ability__name">Strenght</h5>
          </div>
        </div>
        {this.props.children[1]}
      </li>
    );
  }
}

MonsterView.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
  strenght: number.isRequired,
};
