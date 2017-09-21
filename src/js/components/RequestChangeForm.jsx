import React from 'react';

const RequestChangeForm = props => (
  <div>
    <form className="change__form" action="">
      <div className="field">
        <label>New Name</label>
        <input type="text" value={props.name} />
      </div>
      <div className="field">
        <label>New age</label>
        <input type="number" min="0" max="100" value={props.age} />
      </div>
      <div className="field">
        <label>New strenght</label>
        <input type="number" min="0" max="100" value={props.strenght} />
      </div>
      <button className="btn__purple" type="submit">
        Send change request
      </button>
    </form>
  </div>
);

export default RequestChangeForm;
