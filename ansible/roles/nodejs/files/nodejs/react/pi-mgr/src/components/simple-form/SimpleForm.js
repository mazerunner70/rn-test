import React from 'react';
import { Field, reduxForm } from 'redux-form';


const SimpleForm = props => {
  const {handleSubmit, fields, pristine, reset, submitting} = props;
  console.log('08', props);
  const fieldHtml = fields.map((field) => {
    console.log('09', field);
    return (
      <div>
        <label>{field.label}</label>
        <div>
          <Field key={field.label} {...field}/>
        </div>
      </div>
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      {fieldHtml}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="submit" disabled={pristine || submitting} onClick={reset}>Clear</button>
      </div>
    </form>
  );
};

// When second form id needed, look at this option:
// https://stackoverflow.com/questions/40509754/how-do-you-pass-in-a-dynamic-form-name-in-redux-form
export default reduxForm({
  form: 'simple'
})(SimpleForm)