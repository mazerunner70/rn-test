import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

console.log('locales available', moment.locales());
console.log('locales in use', moment.locale());
moment.locale('en-gb');
console.log('locales in use', moment.locale());
console.log('example', moment());


function renderDatePicker ({input, type, placeholder, defaultValue, meta: {touched, error} })
{
  const handleChange = (date) => {
    input.onChange(moment(date))
  }

console.log('010',moment());
console.log('1',input);
  return (
    <div>
          <DatePicker {...input} dateFormat={'DD-MM-YYYY'} selected={input.value ? moment(input.value, 'DD-MM-YYYY') : null} 
          value = {input.value?moment(input.value,'DD-MM-YYYY').format('DD-MM-YYYY'):""}
          onChange={handleChange}/>
          {touched && error && <span>{error}</span>}
    </div>
  );
} 

//          <DatePicker {...input} selected={input.value ? moment(input.value, 'DD-MM-YYYY') : null} 
//          value = {input.value?moment(input.value,'DD-MM-YYYY').format('DD-MM-YYYY'):""}
//          onChange={handleChange}/>

export default renderDatePicker;