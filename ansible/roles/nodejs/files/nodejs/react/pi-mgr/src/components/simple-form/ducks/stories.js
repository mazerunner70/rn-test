import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
 
import 'react-datepicker/dist/react-datepicker.css';

import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import DatePickerField from '../DatePickerField';
import { Values } from "redux-form-website-template";

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
    component: DatePickerField,
  },
];

console.log('07');
storiesOf('SimpleForm', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('default', () => (
    <div>
      <SimpleForm 
        fields={ fields} 
        onSubmit= { (e) => {console.log('submit', e);}}
        />
      <Values form='simple'/>
    </div>
    )
  ) 