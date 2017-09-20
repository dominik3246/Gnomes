import React from 'react';
import { connect } from 'react-redux';

import { fetchGnomes } from '../actions/gnomesActions';

@connect(store => {
  return {
    gnomes: store.gnomes,
    fetched: store.fetched,
  };
})
export default class List extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchGnomes());
  }
  componentDidMount() {
    console.log(this.props.gnomes);
  }

  render() {
    return (
      <main className="main">
        <div className="list__container container">
          <h2 className="list__title">Gnomes</h2>
        </div>
      </main>
    );
  }
}
