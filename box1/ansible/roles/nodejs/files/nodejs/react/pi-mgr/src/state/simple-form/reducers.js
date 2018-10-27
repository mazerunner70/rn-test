import { reducer as reduxFormReducer } from 'redux-form';



const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});