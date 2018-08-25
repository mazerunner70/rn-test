import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import MyCustomInput from './MyCustomInput';
// import { DatePickerField } from '../DatePickerField';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);


import SimpleForm from '../SimpleForm';
function loggingWrapper(x) {
  console.log('011', x);
  return renderDatePicker(x);
}
function renderDatePicker ({input, type, placeholder, defaultValue, meta: {touched, error} })
{
  const handleChange = (date) => {
    input.onChange(moment(date))
  }

console.log('010',moment());
console.log('010',input);
  return (
    <div>
          <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} 
          onChange={date => input.onChange(moment(date))}/>
          {touched && error && <span>{error}</span>}
    </div>
  );
} 


const fields = [
  {
    label:"Name",
    name: "Name",
    component: "input",
    type: "text",
    placeholder:"Name",
    },
  {
    label:"Address",
    name: "Address",
    placeholder:"Choose date",
    component: renderDatePicker,
  },
];

console.log('07');
storiesOf('SimpleForm', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('default', () => <SimpleForm 
    fields={ fields} 
    handleSubmit={action('submitted')}/>
  )