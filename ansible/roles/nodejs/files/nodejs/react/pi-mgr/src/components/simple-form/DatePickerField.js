import React from 'react'
import { compose, withHandlers, withState, lifecycle, setDisplayName } from 'recompose'
import moment from 'moment'
import { Field } from 'redux-form'; 
import DatePickerComponent from 'react-datepicker'

const withLabel = (Component) => setDisplayName('withLabel')(
  ({ id, label, ...props }) => (
    <React.Fragment>
      {label && <label htmlFor={id} >{label}</label>}
      <Component id={id} {...props} />
    </React.Fragment>
  )
)

const withFormField = (Component) => setDisplayName('withFormField')(
  ({ meta: { touched, error }, ...props }) => (
    <Field error={!!(touched && error)}>
      <Component {...props} />

      {touched && error ? (
        <label basic color="red" pointing>
          {error}
        </label>
      ) : null}
    </Field>
  )
)

const withFormLabelField = compose(
  withFormField,
  withLabel
)

/**
 * DatePicker Input
 */
export const DatePicker = compose(
  withState('selectedDate', 'setSelectedDate', null),
  withHandlers({
    handleChange: ({ input, setSelectedDate }) => (date) => {
      setSelectedDate(date)
      input.onChange(date)
    }
  }),
  lifecycle({
    componentWillMount () {
      if (this.props.input.value) {
        this.props.setSelectedDate(moment(this.props.input.value, 'DD/MM/YYY'))
      }
    }
  })
)(({ input, meta, selectedDate, handleChange, ...rest }) => (
  <DatePickerComponent
    selected={selectedDate}
    onChange={handleChange}
    {...rest}
  />
))

/**
 * DatePicker Field
 */
export const DatePickerField = withFormLabelField(DatePicker)