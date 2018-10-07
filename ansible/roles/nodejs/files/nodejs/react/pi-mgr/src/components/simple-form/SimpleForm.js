import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FieldDiv, FieldLabel, FieldInput } from './styled';

const SimpleForm = props => {
  const {handleSubmit, fields, pristine, reset, submitting, dirty} = props;
  console.log('675', dirty)  ;
  console.log('08', props);
  const fieldHtml = fields.map((field) => {
    console.log('09', field);
    return (
      <FieldDiv key={field.label} >
        <FieldLabel>{field.label}</FieldLabel>
        <FieldInput key={field.label} {...field}/>
      </FieldDiv>
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      {fieldHtml}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={submitting} onClick={reset}>Reset</button>
        <button type="button" disabled={dirty} onClick={props.onDelete}>Delete</button>
      </div>
    </form>
  );
};

// When second form id needed, look at this option:
// https://stackoverflow.com/questions/40509754/how-do-you-pass-in-a-dynamic-form-name-in-redux-form
export default reduxForm({
  form: 'simple'
})(SimpleForm)