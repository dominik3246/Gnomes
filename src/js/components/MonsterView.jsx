import React from 'react';
import { string, number } from 'prop-types';
import avatar from '../../img/avatar.png';
import { connect } from 'react-redux';

import { sendDataRequestChange } from '../actions/gnomesActions';

import RequestChangeForm from './RequestChangeForm';

class MonsterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseInside: false,
      isModalOpen: false,
    };
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };

  mouseExit = () => {
    this.setState({ isMouseInside: false });
  };

  showForm = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmitForm = values => {
    this.setState({ isModalOpen: false, isMouseInside: false });
    this.props.dispatch(sendDataRequestChange(values));
  };

  render() {
    return (
      <li
        onMouseEnter={this.mouseEnter}
        onMouseMove={this.mouseEnter}
        onMouseLeave={this.mouseExit}
        className="monster__item list__item"
      >
        <div className="item__row">
          <div className="monster__info">
            <img className="monster__avatar" src={avatar} alt="" />
            <div className="monster__identify">
              <h5 className="monster__name little__title">{this.props.name}</h5>
              <h6 className="monster__age little__subtitle">Age: {this.props.age}</h6>
            </div>
          </div>
          {this.state.isMouseInside ? (
            <button className="btn btn__purple" onClick={() => this.showForm(false)}>
              Change data
            </button>
          ) : null}
          <div className="monster__spec">
            <div className="strength__bar">
              <div className="strength__level" style={{ width: `${this.props.strenght}%` }} />
            </div>
            <p className="strength__number">{this.props.strenght}/100</p>
            <h5 className="ability__name">Strenght</h5>
          </div>
        </div>
        {this.state.isModalOpen ? (
          <RequestChangeForm
            initialValues={{
              id: this.props.id,
              newName: this.props.name,
              newAge: this.props.age,
              newStrenght: this.props.strenght,
            }}
            onSubmit={this.handleSubmitForm}
          />
        ) : null}
      </li>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    sendDataRequestChange: sendDataRequestChange,
  };
};

export default connect(mapDispatchToProps)(MonsterView);

MonsterView.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
  strenght: number.isRequired,
};
