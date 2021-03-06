import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string, number } from 'prop-types';

const RequestChangeForm = props => (
  <div className="form__section">
    <form className="change__form" onSubmit={props.handleSubmit}>
      <div className="field">
        <label htmlFor="id">ID</label>
        <Field
          className="gnome__id"
          name="id"
          component="input"
          type="text"
          props={{ disabled: true }}
        />
      </div>
      <div className="field">
        <label htmlFor="newName">New Name</label>
        <Field name="newName" type="text" component="input" placeholder={props.newName} />
      </div>
      <div className="field">
        <label htmlFor="newAge">New age</label>
        <Field
          name="newAge"
          type="number"
          min="0"
          max="100"
          component="input"
          placeholder={props.newAge}
        />
      </div>
      <div className="field">
        <label htmlFor="newStrenght">New strenght</label>
        <Field
          name="newStrenght"
          type="number"
          min="0"
          max="100"
          component="input"
          placeholder={props.newStrenght}
        />
      </div>
      <button className="btn btn__purple" type="submit">
        Send change request
        {props.patching ? <span className="loading__line" /> : null}
      </button>
    </form>
    {props.responseCode === 200 ? null : <p className="response__code">{props.responseCode}</p>}
  </div>
);

RequestChangeForm.propTypes = {
  handleSubmit: func.isRequired,
  newName: string.isRequired,
  newAge: number.isRequired,
  newStrenght: number.isRequired,
};

export default reduxForm({
  form: 'changeForm',
})(RequestChangeForm);
