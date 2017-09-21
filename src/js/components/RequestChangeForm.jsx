import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RequestChangeForm extends React.Component {
  render() {
    return (
      <div>
        <form className="change__form" onSubmit={this.props.handleSubmit}>
          <div className="field">
            <label htmlFor="newName">New Name</label>
            <Field name="newName" type="text" component="input" />
          </div>
          <div className="field">
            <label htmlFor="newAge">New age</label>
            <Field name="newAge" type="number" min="0" max="100" component="input" />
          </div>
          <div className="field">
            <label htmlFor="newStrenght">New strenght</label>
            <Field name="newStrenght" type="number" min="0" max="100" component="input" />
          </div>
          <button className="btn__purple" type="submit">
            Send change request
          </button>
        </form>
      </div>
    );
  }
}

RequestChangeForm = reduxForm({
  form: 'changeForm',
})(RequestChangeForm);
export default RequestChangeForm;
