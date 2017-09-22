import React from 'react';
import { connect } from 'react-redux';
import MonsterView from './MonsterView';

import { fetchGnomes } from '../actions/gnomesActions';

@connect(store => {
  return {
    gnomes: store.gnomeReducer.gnomes,
    fetched: store.gnomeReducer.fetched,
  };
})
export default class List extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchGnomes());
  }

  render() {
    return (
      <main className="main">
        <div className="list__container container">
          <h2 className="main__title">Gnomes</h2>
          <ul className="monster__list list">
            {this.props.gnomes.map((gnome, index) => {
              return (
                <MonsterView
                  index={index}
                  key={gnome.id}
                  id={gnome.id}
                  name={gnome.name}
                  strenght={gnome.strenght}
                  age={gnome.age}
                  gnome={gnome}
                />
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}
